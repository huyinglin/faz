import React from 'react';
import ResizeObserver from 'rc-resize-observer';
import { Carousels, CarouselItemProps, CarouselListProps } from '../interface';
import { CarouselListView, CarouselWrapperView } from '../style';

const TRANSFORM_SYMBOL = {
  ltr: 1,
  rtl: -1,
};

function CarouselList(props: CarouselListProps) {
  const {
    duration,
    carousels,
    changeInfo,
    animation,
    activeKeys,
  } = props;

  const carouselWrapRef = React.useRef<HTMLDivElement | null>(null);

  const [wrapperWidth, setWrapperWidth] = React.useState<number>(0);
  const [transformLeft, setTransformLeft] = React.useState<number>(0);
  const [lockTransition, setLockTransition] = React.useState<boolean>(true);

  React.useEffect(() => {
    const { width } = carouselWrapRef.current?.getBoundingClientRect() || { width: 0 };
    setWrapperWidth(width);
    setTransformLeft(-width);
  }, []);

  React.useEffect(() => {
    onMove();
  }, [changeInfo]);

  const onMove = React.useCallback(() => {
    if (changeInfo) {
      const { direction, step, lockAnimation } = changeInfo;
      const symbol = TRANSFORM_SYMBOL[direction];
      const distance = transformLeft + (step * symbol * wrapperWidth);

      setLockTransition(lockAnimation);
      setTransformLeft(distance);
    }
  }, [changeInfo, transformLeft, wrapperWidth]);

  // Dealing with boundary conditions
  React.useEffect(() => {
    let timer: number;

    if (wrapperWidth && Math.abs(transformLeft) === wrapperWidth * (carousels.length + 1)) {
      timer = setTimeout(() => {
        setLockTransition(true);
        setTransformLeft(-wrapperWidth);
      }, duration);
    }

    if (transformLeft === 0 && !lockTransition) {
      timer = setTimeout(() => {
        setLockTransition(true);
        setTransformLeft(-(wrapperWidth * carousels.length));
      }, duration);
    }
    return () => clearTimeout(timer);
  }, [carousels, duration, lockTransition, transformLeft, wrapperWidth]);

  const carouselList: CarouselItemProps[] = React.useMemo(() => {
    const carouselList = carousels.map((carousel: Carousels) =>
      React.cloneElement(carousel.node, {
        key: carousel.key,
        carouselKey: carousel.key,
        carouselItemWidth: wrapperWidth,
      }) as CarouselItemProps
    );

    const firstCarousel = carousels[0];
    const clonedFirstCarousel = React.cloneElement(firstCarousel.node, {
      key: `$$_carousel_item_cloned_${firstCarousel.key}`,
      carouselKey: firstCarousel.key,
      carouselItemWidth: wrapperWidth,
    }) as CarouselItemProps;

    const lastCarousel = carousels[carousels.length - 1];
    const clonedLastCarousel = React.cloneElement(lastCarousel.node, {
      key: `$$_carousel_item_cloned_${lastCarousel.key}`,
      carouselKey: lastCarousel.key,
      carouselItemWidth: wrapperWidth,
    }) as CarouselItemProps;

    return [clonedLastCarousel, ...carouselList, clonedFirstCarousel];
  }, [carousels, wrapperWidth]);

  const onListWrapperResize = React.useCallback(() => {
    const { width } = carouselWrapRef.current?.getBoundingClientRect() || { width: 0 };
    if (wrapperWidth) {
      const offsetNum = activeKeys.index + 1;
      setLockTransition(true);
      setTransformLeft(transformLeft - (offsetNum * (width - wrapperWidth)));
    }
    setWrapperWidth(width);
  }, [activeKeys, wrapperWidth, transformLeft]);

  return (
    <ResizeObserver onResize={onListWrapperResize}>
      <CarouselWrapperView ref={carouselWrapRef}>
        <CarouselListView
          transform={`translate3d(${transformLeft}px, 0px, 0px)`}
          lockTransition={lockTransition}
          animation={animation}
        >
          {carouselList}
        </CarouselListView>
      </CarouselWrapperView>
    </ResizeObserver>
  );
}

export default CarouselList;

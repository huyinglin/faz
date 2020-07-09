import React from 'react';
import { CarouselItemProps } from '../interface';
import { CarouselItemView } from '../style';

function CarouselItem(props: CarouselItemProps) {
  const { carouselItemWidth, children } = props;
  return (
    <CarouselItemView carouselItemWidth={carouselItemWidth}>
      {children}
    </CarouselItemView>
  );
}

CarouselItem.displayName = 'CarouselItem';

export default CarouselItem;

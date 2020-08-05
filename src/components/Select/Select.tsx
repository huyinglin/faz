import React from 'react';
import Option from './component/Option';

import {
  SelectProps
} from './interface';
import {
  SelectView,
  SelectInputView,
  SelectSuffixView,
} from './style';
import { SelectContext } from './component/SelectContext';
import { useMergedState } from '../../hooks/useMergedState';
import { AiOutlineDown, AiFillCloseCircle } from 'react-icons/ai';

function Select(props: SelectProps) {
  const {
    allowClear,
    autoClearSearchValue,
    disabled,
    showSearch = false,
    defaultValue,
    placeholder,
    suffixIcon = <AiOutlineDown style={{ color: 'rgba(0, 0, 0, 0.25)' }}/>,
    clearIcon = <AiFillCloseCircle style={{ color: 'rgba(0, 0, 0, 0.25)' }}/>,
    listHeight,
    style,
    className,
    children,
  } = props;

  const selectInputRef = React.useRef<HTMLInputElement>(null);
  const hideCaret = React.useMemo(() => !showSearch, [showSearch]);
  const [inputValue, setInputValue] = React.useState<string>();
  const [visible, setVisible] = React.useState<boolean>(false);
  const [suffixHover, setSuffixHover] = React.useState<boolean>(false);

  const [value, setValue] = useMergedState(defaultValue, {
    value: props.value,
    isProps: 'value' in props,
  });

  function handleSelect(selectValue: string | number, label?: string) {
    setValue(selectValue);
    setVisible(false);
    setInputValue(label);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (hideCaret) {
      return;
    }
    setInputValue(e.target.value);
  }

  function handleVisibleChange(visible: boolean) {
    setVisible(visible);
  }

  function handleSelectInputFocus() {
    setTimeout(() => {
      selectInputRef.current?.focus();
    }, 0);
  }

  function handleClear() {
    setValue(undefined);
    setInputValue(undefined);
  }

  function handleSuffixMouseEnter() {
    setSuffixHover(true);
  }

  function handleSuffixMouseLeave() {
    setSuffixHover(false);
  }

  const selectSuffix = (
    <SelectSuffixView
      onMouseEnter={handleSuffixMouseEnter}
      onMouseLeave={handleSuffixMouseLeave}
    >
      {suffixHover && allowClear && value
        ? <span onClick={handleClear}>{clearIcon}</span>
        : <span onClick={() => setVisible(true)}>{suffixIcon}</span>
      }
    </SelectSuffixView>
  );

  const contextValue = {
    value,
    onSelect: handleSelect,
    onFocus: handleSelectInputFocus,
  };

  return (
    <SelectContext.Provider value={contextValue}>
      <SelectView
        trigger="click"
        color="#fff"
        placement="bottom"
        space={4}
        enterDelay={50}
        arrow={false}
        visible={visible}
        onChange={handleVisibleChange}
        childrenFocus={handleSelectInputFocus}
        title={children}
      >
        <SelectInputView
          placeholder={placeholder}
          value={inputValue}
          suffix={selectSuffix}
          inputRef={selectInputRef}
          onChange={handleInputChange}
          hideCaret={hideCaret}
          style={style}
          className={className}
        />
      </SelectView>
    </SelectContext.Provider>
  );
}

Select.displayName = 'Select';

Select.defaultProps = {

};

type ForwordSelect = typeof Select & { Option: typeof Option };

(Select as ForwordSelect).Option = Option;

/** @component */
export default Select;

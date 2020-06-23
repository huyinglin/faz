import styled, { css, FlattenSimpleInterpolation } from 'styled-components/macro';
import { themeColor } from '../../styled';
import { TabsProps, TabPosition, TabSize } from './interface';

const tabSize = {
  default: '14px',
  large: '18px',
  small: '12px',
};

const reversePosition = {
  top: 'bottom',
  bottom: 'top',
  right: 'left',
  left: 'right',
};

const tabDirection = {
  top: 'column',
  bottom: 'column-reverse',
  left: 'unset',
  right: 'row-reverse',
};

const navDirection = {
  top: 'row',
  bottom: 'row',
  left: 'column',
  right: 'column',
};

type TabNavItemViewProps = {
  active: boolean;
  size?: TabSize;
  disabled?: boolean;
  tabPosition?: TabPosition;
}

const activeFP = (props: TabNavItemViewProps) => {
  const { active, tabPosition } = props;
  return tabPosition && active && css`
    margin-${reversePosition[tabPosition]}: -2px;
    border-${reversePosition[tabPosition]}: 2px solid ${themeColor.primary};
    color: ${themeColor.primary};
  `;
};

const disabledFP = (props: TabNavItemViewProps) => {
  const { disabled } = props;
  return disabled && css`
    opacity: 0.3;
    cursor: not-allowed;
    &:hover {
      color: unset;
    }
  `;
};

// const sizeFP = (props: TabsProps) => {
//   const { size } = props;
//   return size && css`
//     font-size: ${tabSize[size]};
//   `;
// };

const positionFP = (props: TabsProps) => {
  const { tabPosition } = props;
  return tabPosition && css`
    flex-direction: ${tabDirection[tabPosition]};
    ${tabPosition === 'right' && 'justify-content: space-between;'}
    ${TabNavView} {
      display: flex;
      margin-${reversePosition[tabPosition]}: 8px;
      border-${reversePosition[tabPosition]}: 2px solid #ccc;
      flex-direction: ${navDirection[tabPosition]};
    }
  `;
}

export const TabContentView = styled.div``;

export const TabNavView = styled.div`
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
`;

export const TabsView = styled.div<TabsProps>`
  width: 100%;
  height: 100%;
  display: flex;
  outline: none;
  ${positionFP}
`;

export const TabNavItemView = styled.div<TabNavItemViewProps>`
  padding: 8px 16px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    color: ${themeColor.primary};
  }

  ${activeFP}
  ${disabledFP}
`;


/* ================================= TabNav ================================= */

function controlledFeature(featureName: string, feature: FlattenSimpleInterpolation) {
  return css`
    ${(props: any) => props && props[featureName] && feature}
  `;
}

const TabNodeActive = css`
  padding-left: 30px;
  font-weight: bolder;
`;

const TabNodeDisabled = css`
  opacity: 0.3;
  cursor: not-allowed;
`;

export const TabNodeView = styled.button<{ active: boolean; disabled: boolean; }>`
  border: 0;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.5);
  margin: 0;
  padding: 8px 16px;
  outline: none;
  cursor: pointer;
  position: relative;
  font-weight: lighter;

  &:focus {
    background: rgba(0, 0, 255, 0.1);
  }

  ${controlledFeature('active', TabNodeActive)}
  ${controlledFeature('disabled', TabNodeDisabled)}
`;

export const InkBarView = styled.div`
  position: absolute;
  background: red;
  pointer-events: none;
  transition: all 0.3s;
  height: 3px;
  bottom: 0;
`;

export const TabListView = styled.div`
  display: flex;
  position: relative;
  transition: transform 0.3s;
`;
import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import {
  ModalProps
} from './interface';
import {
  ModalView,
  ModalInnerView,
} from './style';

function Modal(props: ModalProps) {
  const {
    getContainer,
    children,
  } = props;

  const container = getContainer || document.body;
  // const container = document.getElementById('rsg-root')

  const modal = (
    <ModalView>
      <ModalInnerView>
        {children}
      </ModalInnerView>
    </ModalView>
  )

  if (container) {
    return createPortal(modal, container as any);
  }
  return null;
}

Modal.displayName = 'Modal';

Modal.defaultProps = {

};

Modal.propTypes = {

};

/** @component */
export default Modal;

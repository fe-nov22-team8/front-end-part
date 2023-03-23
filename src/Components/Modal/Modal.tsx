/* eslint-disable jsx-a11y/no-autofocus */
import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';
import FocusTrap from 'focus-trap-react';
import { LocalStorageContext } from 'Components/Context';

interface Props {
  shouldShowLocal: boolean;
}

export const Modal: React.FC<Props> = ({ shouldShowLocal }) => {
  const { removeAll, handleModal, isModalVisible } =
    useContext(LocalStorageContext);

  const handleConfirm = () => {
    removeAll();
    handleModal();
  };

  useEffect(() => {
    if (isModalVisible && shouldShowLocal) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalVisible, shouldShowLocal]);
  return isModalVisible && shouldShowLocal
    ? ReactDOM.createPortal(
        <div className="modal-backdrop">
          <div className="modal">
            <div className="modal__content">
              <h4 className="modal__text">Would you like to checkout?</h4>
              <div className="modal__line" />
              <FocusTrap>
                <div className="modal__button-container">
                  <button
                    type="button"
                    className="modal__button"
                    aria-label="confirm"
                    onClick={handleConfirm}
                    autoFocus
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    className="modal__button"
                    aria-label="cancel"
                    onClick={handleModal}
                  >
                    Cancel
                  </button>
                </div>
              </FocusTrap>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;
};

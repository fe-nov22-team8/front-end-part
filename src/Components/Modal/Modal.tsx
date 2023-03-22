import { LocalStorageContext } from 'localStorageContex';
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

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

  return isModalVisible && shouldShowLocal
    ? ReactDOM.createPortal(
        <div className="modal-backdrop">
          <div className="modal">
            <div className="modal__content">
              <h4 className="modal__text">Would you like to checkout?</h4>
              <div className="modal__line" />
              <div className="modal__button-container">
                <button
                  type="button"
                  className="modal__button"
                  aria-label="confirm"
                  onClick={handleConfirm}
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
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;
};

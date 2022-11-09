/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-multi-assign */
import React, { useState } from 'react';
import Modal from 'react-modal';
import './style.css';
import '../../scripts/Scripts';

Modal.setAppElement('#root');

export default function SettingsButton() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    document.documentElement.style.overflow = 'hidden';
  }

  function closeModal() {
    setIsOpen(false);
    document.documentElement.style.overflow = 'auto';
  }

  return (
    <div>
      <a
        onClick={openModal}
        className="settings-button"
        href="#"
        id="settings-button"
      >
        <ion-icon name="settings-sharp" />
      </a>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="overlay"
        className="modal-content"
        id="modal-is-open"
      >
        <div className="header-modal">
          <h1 className="title">Timer Setting</h1>

          <a className="closeButton" onClick={closeModal}>
            <ion-icon name="close" />
          </a>
        </div>

        <span className="line" />

        <div className="main-modal">
          <div>
            <label htmlFor="input-pomodoro">Pomodoro</label>
            <input
              id="input-pomodoro"
              type="number"
              placeholder="25"
              min="0"
              max="999"
            />
          </div>
          <div>
            <label htmlFor="input-short-break">Short Break</label>
            <input
              id="input-short-break"
              type="number"
              placeholder="5"
              min="0"
              max="999"
            />
          </div>
          <div>
            <label htmlFor="input-long-break">Long Break</label>
            <input
              id="input-long-break"
              type="number"
              placeholder="15"
              min="0"
              max="999"
            />
          </div>
        </div>

        <div className="footer-modal">
          <div className="footer-content">
            <button type="button" id="ok-button" onClick={closeModal}>
              OK
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

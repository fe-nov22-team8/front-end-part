import React from 'react';
import ReactDom from 'react-dom';
import './Backdrop.scss';

type Props = {
  onClick: () => void;
};

export const Backdrop: React.FC<Props> = ({ onClick }) => {
  const backdropHook = document.getElementById('backdrop-hook') as HTMLElement;

  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  const content = <div className="backdrop" onClick={onClick} />;

  return ReactDom.createPortal(content, backdropHook);
};

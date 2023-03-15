import React from 'react';
import ReactDom from 'react-dom';
import './Menu.scss';

type Props = {
  children: React.ReactNode;
};

export const Menu: React.FC<Props> = (props) => {
  const { children } = props;
  const menuHook = document.getElementById('menu-hook') as HTMLElement;

  const content = <aside className="menu">{children}</aside>;

  return ReactDom.createPortal(content, menuHook);
};

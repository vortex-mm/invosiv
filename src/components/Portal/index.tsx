import React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  id?: string;
}

const Portal: React.FC<PortalProps> = ({ children, id }) => {
  const el = id ? document.getElementById(id) : document.body;

  if (!el) return null;

  return createPortal(children, el);
};

export default Portal;
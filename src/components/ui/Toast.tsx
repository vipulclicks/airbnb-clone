import React, { useEffect } from 'react';

interface ToastProps {
  message: string | null;
  toastId?: number;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ message, toastId, onClose, duration = 3000 }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, toastId, duration, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-[23px] left-1/2 -translate-x-1/2 z-[100] pointer-events-none transition-all duration-150">
      <div className="bg-[#222222] text-white px-2.5 py-[7px] rounded-lg shadow-md text-[13px] font-normal leading-[18px] flex items-center justify-center whitespace-nowrap">
        <span>{message}</span>
      </div>
    </div>
  );
};

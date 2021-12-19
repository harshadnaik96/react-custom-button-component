import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  className: string;
  onClick: (event?: any) => void;
  key?: string | number;
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
}
export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type={props.type}
      key={props.key}
      style={props.style}
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.buttonText}
    </button>
  );
};

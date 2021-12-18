import React from 'react';

interface ButtonProps {
  buttonText: string;
  className: string;
  onClick: (event?: any) => void;
  key?: string | number;
  style?: React.CSSProperties;
  disabled?: boolean;
}
export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
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

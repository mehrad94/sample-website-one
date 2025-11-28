import React from "react";

interface Props {
  id?: string;
  title: string;
  leftIcon?: React.ReactNode;
  containerClass?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  id,
  title,
  leftIcon,
  containerClass = "",
  onClick,
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon && <span>{leftIcon}</span>}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        {title}
      </span>
    </button>
  );
};

export default Button;

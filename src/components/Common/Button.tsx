import { Button, Form } from "antd";
import React from "react";
import '../../style/auth.css';
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: any;
  className?: string;
  variant?: "primary" | "secondary" | "success" | "danger";
  isDisabled?: boolean;
  href?: any;
}

const Buttons: React.FC<ButtonProps> = ({
  children,
  onClick,
  type,
  className,
  variant,
  isDisabled,
  href
}) => {
  const baseStyle = "basic_design";
  const disabledStyle = isDisabled ? "disabled" : "";

  let variantStyle;
  switch (variant) {
    case "primary":
      variantStyle = "fill_button";
      break;
    case "secondary":
      variantStyle = "outline_button";
      break;
    default:
      variantStyle = "fill_button";
      break;
  }

  return (
    <Form.Item>
      <Link to={href}>
        <Button
          type={type}
          htmlType="submit"
          onClick={onClick}
          disabled={isDisabled}
          className={`${baseStyle} ${variantStyle} ${className} ${disabledStyle}`}
        >
          {children}
        </Button>
      </Link>
    </Form.Item>
  );
};

export default Buttons;

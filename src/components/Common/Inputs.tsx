import React from "react";
import { Form, Input,Select } from "antd";

const { Option } = Select;

interface SelectProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  name?: string;
  options: { value: string; label: string }[];
}


interface InputProps {
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    label?: string
    name?: string;
    type?: "text" | "number" | "password" | "email" | "date";
}

export const Inputs: React.FC<InputProps> = ({
    value,
    onChange,
    placeholder,
    className,
    disabled,
    name,
    label,
    type
}) => {
    const baseStyle = "";
    const disabledStyle = disabled ? "disabled" : "";
   
    return (
        <Form.Item
            name={name}
            label={label}
        >
            <Input
                value={value}
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={`${baseStyle} ${className} ${disabledStyle}`}
                style={{boxShadow: "0 0 0 1000px #F9F9F9 inset"}}
            />
        </Form.Item>
    );
};

export const Selects: React.FC<SelectProps> = ({
  value,
  onChange,
  placeholder,
  className,
  disabled,
  name,
  options
}) => {
  const baseStyle = "";
  const disabledStyle = disabled ? "disabled" : "";

  return (
    <Form.Item name={name} >
      <Select
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${baseStyle} ${className} ${disabledStyle}`}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};


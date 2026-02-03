import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

/**
 * Select/Dropdown Component
 */
const SelectField = ({
  label,
  name,
  value,
  onChange,
  options = [],
  error,
  placeholder = "Chọn...",
  required = false,
  disabled = false,
  valueKey = "value",
  labelKey = "label",
  helpText,
  ...props
}) => {
  return (
    <Form.Group className="mb-3">
      {label && (
        <Form.Label>
          {label}
          {required && <span className="text-danger"> *</span>}
        </Form.Label>
      )}
      <Form.Select
        name={name}
        value={value}
        onChange={onChange}
        isInvalid={!!error}
        required={required}
        disabled={disabled}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option
            key={index}
            value={typeof option === "object" ? option[valueKey] : option}
          >
            {typeof option === "object" ? option[labelKey] : option}
          </option>
        ))}
      </Form.Select>
      {helpText && <Form.Text className="text-muted">{helpText}</Form.Text>}
      {error && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

SelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  helpText: PropTypes.string,
};

export default SelectField;

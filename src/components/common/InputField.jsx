import React, { useState } from "react";
import PropTypes from "prop-types";
import { Eye, EyeOff } from "lucide-react";

const InputField = ({ label, name, type = "text", value, onChange, onBlur, error, placeholder, required = false, disabled = false, maxLength, min, max, helpText, icon, autoComplete, className = "", ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className={'space-y-2 ' + className}>
      {label && (
        <label htmlFor={name} className="block text-sm font-semibold text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className={error ? "text-red-400" : "text-gray-400"}>{icon}</span>
          </div>
        )}

        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          maxLength={maxLength}
          min={min}
          max={max}
          autoComplete={autoComplete}
          className={'block w-full ' + (icon ? 'pl-12' : 'pl-4') + ' ' + (isPassword ? 'pr-12' : 'pr-4') + ' py-3.5 text-gray-900 border ' + (error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500') + ' rounded-xl shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed'}
          {...props}
        />

        {isPassword && (
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200">
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        )}
      </div>

      {helpText && !error && <p className="text-sm text-gray-500">{helpText}</p>}

      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

InputField.propTypes = { label: PropTypes.string, name: PropTypes.string.isRequired, type: PropTypes.string, value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), onChange: PropTypes.func.isRequired, onBlur: PropTypes.func, error: PropTypes.string, placeholder: PropTypes.string, required: PropTypes.bool, disabled: PropTypes.bool, maxLength: PropTypes.number, min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), helpText: PropTypes.string, icon: PropTypes.node, autoComplete: PropTypes.string, className: PropTypes.string };

export default InputField;

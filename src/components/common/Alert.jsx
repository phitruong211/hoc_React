import React from "react";
import PropTypes from "prop-types";
import {
  AlertCircle,
  CheckCircle2,
  Info,
  AlertTriangle,
  X,
} from "lucide-react";

/**
 * Alert Component for displaying messages (Tailwind version)
 */
const Alert = ({
  variant = "info",
  message,
  title,
  dismissible = false,
  onClose,
  show = true,
  className = "",
}) => {
  if (!show) return null;

  // Variant configurations
  const variants = {
    success: {
      container: "bg-green-50 border-green-200 text-green-800",
      icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
      titleColor: "text-green-900",
      closeColor: "text-green-600 hover:text-green-800",
    },
    danger: {
      container: "bg-red-50 border-red-200 text-red-800",
      icon: <AlertCircle className="h-5 w-5 text-red-600" />,
      titleColor: "text-red-900",
      closeColor: "text-red-600 hover:text-red-800",
    },
    warning: {
      container: "bg-yellow-50 border-yellow-200 text-yellow-800",
      icon: <AlertTriangle className="h-5 w-5 text-yellow-600" />,
      titleColor: "text-yellow-900",
      closeColor: "text-yellow-600 hover:text-yellow-800",
    },
    info: {
      container: "bg-blue-50 border-blue-200 text-blue-800",
      icon: <Info className="h-5 w-5 text-blue-600" />,
      titleColor: "text-blue-900",
      closeColor: "text-blue-600 hover:text-blue-800",
    },
    primary: {
      container: "bg-indigo-50 border-indigo-200 text-indigo-800",
      icon: <Info className="h-5 w-5 text-indigo-600" />,
      titleColor: "text-indigo-900",
      closeColor: "text-indigo-600 hover:text-indigo-800",
    },
  };

  const config = variants[variant] || variants.info;

  return (
    <div
      className={`
        ${config.container}
        border rounded-xl p-4
        flex items-start gap-3
        animate-in fade-in slide-in-from-top-2 duration-300
        ${className}
      `}
      role="alert"
    >
      {/* Icon */}
      <div className="flex-shrink-0 mt-0.5">{config.icon}</div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {title && (
          <h3 className={`text-sm font-semibold ${config.titleColor} mb-1`}>
            {title}
          </h3>
        )}
        <div className="text-sm">
          {typeof message === "string" ? <p>{message}</p> : message}
        </div>
      </div>

      {/* Close Button */}
      {dismissible && onClose && (
        <button
          type="button"
          onClick={onClose}
          className={`
            flex-shrink-0 ml-2
            ${config.closeColor}
            transition-colors duration-200
            hover:scale-110
            focus:outline-none
          `}
          aria-label="Close alert"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

Alert.propTypes = {
  variant: PropTypes.oneOf(["primary", "success", "danger", "warning", "info"]),
  message: PropTypes.node.isRequired,
  title: PropTypes.string,
  dismissible: PropTypes.bool,
  onClose: PropTypes.func,
  show: PropTypes.bool,
  className: PropTypes.string,
};

export default Alert;

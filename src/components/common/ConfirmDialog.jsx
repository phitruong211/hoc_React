import React from "react";
import { Modal as BootstrapModal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

/**
 * Confirmation Dialog Component
 */
const ConfirmDialog = ({
  show,
  onHide,
  onConfirm,
  title = "Xác nhận",
  message,
  confirmText = "Xác nhận",
  cancelText = "Hủy",
  variant = "primary",
  size = "md",
}) => {
  return (
    <BootstrapModal show={show} onHide={onHide} centered size={size}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>{message}</BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={onHide}>
          {cancelText}
        </Button>
        <Button variant={variant} onClick={onConfirm}>
          {confirmText}
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

ConfirmDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string,
  message: PropTypes.node.isRequired,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

export default ConfirmDialog;

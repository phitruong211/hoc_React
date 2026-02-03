import React from "react";
import { Card as BootstrapCard } from "react-bootstrap";
import PropTypes from "prop-types";

/**
 * Card Component for displaying stats or info
 */
const Card = ({
  title,
  subtitle,
  children,
  footer,
  variant = "light",
  className = "",
  headerVariant,
  footerVariant,
  ...props
}) => {
  return (
    <BootstrapCard className={className} bg={variant} {...props}>
      {(title || subtitle) && (
        <BootstrapCard.Header bg={headerVariant}>
          {title && <BootstrapCard.Title as="h5">{title}</BootstrapCard.Title>}
          {subtitle && (
            <BootstrapCard.Subtitle className="text-muted">
              {subtitle}
            </BootstrapCard.Subtitle>
          )}
        </BootstrapCard.Header>
      )}
      <BootstrapCard.Body>{children}</BootstrapCard.Body>
      {footer && (
        <BootstrapCard.Footer bg={footerVariant}>{footer}</BootstrapCard.Footer>
      )}
    </BootstrapCard>
  );
};

Card.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  variant: PropTypes.string,
  className: PropTypes.string,
  headerVariant: PropTypes.string,
  footerVariant: PropTypes.string,
};

export default Card;

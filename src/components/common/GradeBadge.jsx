import React from "react";
import { Badge } from "react-bootstrap";
import PropTypes from "prop-types";
import { getGradeClassification, getGradeLabel } from "../../utils/helpers";

/**
 * Grade Badge Component with classification
 */
const GradeBadge = ({ score, showLabel = false }) => {
  const classification = getGradeClassification(score);

  const getBadgeVariant = () => {
    switch (classification) {
      case "A":
        return "success";
      case "B":
        return "primary";
      case "C":
        return "info";
      case "D":
        return "warning";
      case "F":
        return "danger";
      default:
        return "secondary";
    }
  };

  return (
    <Badge bg={getBadgeVariant()}>
      {score} - {classification}
      {showLabel && ` (${getGradeLabel(score)})`}
    </Badge>
  );
};

GradeBadge.propTypes = {
  score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  showLabel: PropTypes.bool,
};

export default GradeBadge;

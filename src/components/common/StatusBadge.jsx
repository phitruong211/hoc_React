import React from "react";
import { Badge } from "react-bootstrap";
import PropTypes from "prop-types";
import {
  CLASS_STATUS,
  ENROLLMENT_STATUS,
  ATTENDANCE_STATUS,
} from "../../constants/businessRules";

/**
 * Status Badge Component
 */
const StatusBadge = ({ status, type = "class" }) => {
  const getStatusConfig = () => {
    switch (type) {
      case "class":
        return {
          [CLASS_STATUS.OPEN]: { bg: "success", text: "Đang mở" },
          [CLASS_STATUS.CLOSED]: { bg: "danger", text: "Đã đóng" },
          [CLASS_STATUS.PENDING]: { bg: "warning", text: "Chờ xử lý" },
        };

      case "enrollment":
        return {
          [ENROLLMENT_STATUS.ACTIVE]: { bg: "success", text: "Đang học" },
          [ENROLLMENT_STATUS.DROPPED]: { bg: "secondary", text: "Đã rút" },
          [ENROLLMENT_STATUS.PENDING]: { bg: "warning", text: "Chờ duyệt" },
        };

      case "attendance":
        return {
          [ATTENDANCE_STATUS.PRESENT]: { bg: "success", text: "Có mặt" },
          [ATTENDANCE_STATUS.ABSENT]: { bg: "danger", text: "Vắng" },
          [ATTENDANCE_STATUS.LATE]: { bg: "warning", text: "Muộn" },
          [ATTENDANCE_STATUS.EXCUSED]: { bg: "info", text: "Có phép" },
        };

      default:
        return { [status]: { bg: "secondary", text: status } };
    }
  };

  const config = getStatusConfig();
  const { bg, text } = config[status] || { bg: "secondary", text: status };

  return <Badge bg={bg}>{text}</Badge>;
};

StatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["class", "enrollment", "attendance"]).isRequired,
};

export default StatusBadge;

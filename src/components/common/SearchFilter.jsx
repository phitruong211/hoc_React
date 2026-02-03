import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";

/**
 * Search and Filter Component
 */
const SearchFilter = ({
  searchValue = "",
  onSearchChange,
  filters = [],
  onFilterChange,
  onReset,
  placeholder = "Tìm kiếm...",
  showReset = true,
}) => {
  return (
    <Form className="mb-4">
      <Row className="g-3">
        {/* Search Input */}
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder={placeholder}
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </Col>

        {/* Filter Dropdowns */}
        {filters.map((filter, index) => (
          <Col md={filter.size || 3} key={index}>
            <Form.Select
              value={filter.value}
              onChange={(e) => onFilterChange(filter.name, e.target.value)}
            >
              <option value="">
                {filter.placeholder || `Chọn ${filter.label}`}
              </option>
              {filter.options.map((option, optIndex) => (
                <option
                  key={optIndex}
                  value={typeof option === "object" ? option.value : option}
                >
                  {typeof option === "object" ? option.label : option}
                </option>
              ))}
            </Form.Select>
          </Col>
        ))}

        {/* Reset Button */}
        {showReset && (
          <Col md="auto">
            <Button variant="outline-secondary" onClick={onReset}>
              Đặt lại
            </Button>
          </Col>
        )}
      </Row>
    </Form>
  );
};

SearchFilter.propTypes = {
  searchValue: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.any,
      options: PropTypes.array.isRequired,
      placeholder: PropTypes.string,
      size: PropTypes.number,
    })
  ),
  onFilterChange: PropTypes.func.isRequired,
  onReset: PropTypes.func,
  placeholder: PropTypes.string,
  showReset: PropTypes.bool,
};

export default SearchFilter;

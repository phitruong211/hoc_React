import React from "react";
import { Table as BootstrapTable } from "react-bootstrap";
import PropTypes from "prop-types";

/**
 * Reusable Table Component
 */
const DataTable = ({
  columns = [],
  data = [],
  striped = true,
  bordered = true,
  hover = true,
  responsive = true,
  size,
  className = "",
  emptyMessage = "Không có dữ liệu",
  ...props
}) => {
  const TableComponent = (
    <BootstrapTable
      striped={striped}
      bordered={bordered}
      hover={hover}
      size={size}
      className={className}
      {...props}
    >
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              style={{
                width: column.width,
                textAlign: column.align || "left",
              }}
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td
              colSpan={columns.length}
              className="text-center text-muted py-4"
            >
              {emptyMessage}
            </td>
          </tr>
        ) : (
          data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  style={{ textAlign: column.align || "left" }}
                >
                  {column.render
                    ? column.render(row, rowIndex)
                    : row[column.field]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </BootstrapTable>
  );

  return responsive ? (
    <div className="table-responsive">{TableComponent}</div>
  ) : (
    TableComponent
  );
};

DataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      field: PropTypes.string,
      render: PropTypes.func,
      width: PropTypes.string,
      align: PropTypes.oneOf(["left", "center", "right"]),
    })
  ).isRequired,
  data: PropTypes.array,
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  hover: PropTypes.bool,
  responsive: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg"]),
  className: PropTypes.string,
  emptyMessage: PropTypes.string,
};

export default DataTable;

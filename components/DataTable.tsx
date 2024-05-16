import React from 'react';

/**
 * Interface for the DataTable component props.
 */
interface IDataTable {
  columns: string[]; // Array of column names
  rows: any[]; // Array of row data objects
}

/**
 * DataTable component renders a table with the provided columns and rows.
 * @param {IDataTable} props - The props for the DataTable component.
 * @returns {JSX.Element} The DataTable component.
 */
const DataTable: React.FC<IDataTable> = ({
  columns = [],
  rows = []
}: IDataTable) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 mt-4">
      <thead className=" bg-gray-900 text-white">
        <tr>
          {columns.map((column) => (
            <th
              key={column}
              scope="col"
              className="px-4 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-gray-700 divide-y divide-gray-200">
        {rows.map((row) => (
          <tr key={row.id}>
            {/* Render table cells with row data */}
            {Object.values(row).map((value, index) => (
              <td
                key={value + '-' + index}
                className="px-4 py-3 whitespace-nowrap"
              >
                {value as string}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;

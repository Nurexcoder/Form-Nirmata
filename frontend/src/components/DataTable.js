import React from "react";
import { useTable } from "react-table";

const DataTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="relative">
      <div className="overflow-x-auto overflow-y-scroll">
        <table
          {...getTableProps()}
          className="table-auto w-full border-collapse"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="p-4 text-left font-bold border-l sticky top-0 bg-white"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="">
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="border-t hover:bg-gray-100 transition-colors"
                >
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="p-4 border-l">
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;

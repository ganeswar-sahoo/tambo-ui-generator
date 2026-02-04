"use client";

interface TableColumn {
  label: string;
}

interface TableRow {
  cells?: (string | number)[];
}

interface TableProps {
  title?: string;
  columns?: TableColumn[];
  rows?: TableRow[];
}

export function Table({
  title,
  columns = [],
  rows = [],
}: TableProps) {
  // Guard: no columns or rows
  if (!Array.isArray(columns) || !columns.length) {
    return (
      <div className="rounded-xl border bg-white p-4 text-sm text-gray-400">
        Table columns not available
      </div>
    );
  }

  if (!Array.isArray(rows) || !rows.length) {
    return (
      <div className="rounded-xl border bg-white p-4 text-sm text-gray-400">
        Table rows not available
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm overflow-x-auto">
      {title && (
        <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      )}

      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b bg-gray-50">
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-3 py-2 text-left font-medium text-gray-600"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => {
            // Guard EACH row
            if (!Array.isArray(row.cells)) {
              return (
                <tr key={rowIndex}>
                  <td
                    colSpan={columns.length}
                    className="px-3 py-2 text-gray-400 italic"
                  >
                    Row data incomplete
                  </td>
                </tr>
              );
            }

            return (
              <tr
                key={rowIndex}
                className="border-b last:border-none hover:bg-gray-50"
              >
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-3 py-2 text-gray-800"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

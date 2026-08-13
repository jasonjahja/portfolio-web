export default function ComparisonTable({
  headers,
  rows,
  columns = "1.5fr 1fr 1fr",
  renderCell,
}) {
  const gridStyle = { gridTemplateColumns: columns };

  return (
    <div className="overflow-hidden rounded-15 border border-bw5">
      <div
        className="grid bg-bw3 px-15 py-10 text-body-b7 text-bw6 md:px-25 md:text-body-b6"
        style={gridStyle}
      >
        {headers.map((header) => (
          <span key={header}>{header}</span>
        ))}
      </div>
      {rows.map((row, rowIndex) => (
        <div
          key={row[0]}
          className="grid border-t border-bw5 px-15 py-15 text-body-b7 md:px-25 md:text-body-b5"
          style={gridStyle}
        >
          {row.map((cell, columnIndex) => (
            <span key={`${rowIndex}-${columnIndex}`}>
              {renderCell ? renderCell(cell, columnIndex, row, rowIndex) : cell}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function TableBlock({ value }) {
  const rows = value?.rows ?? [];

  if (rows.length === 0) {
    return null;
  }

  const hasHeader = value.hasHeader !== false;
  const headerCells = hasHeader ? rows[0]?.cells ?? [] : [];
  const bodyRows = rows.slice(hasHeader ? 1 : 0);

  // Use the largest row width so every column shares the available space.
  const columnCount = Math.max(
    headerCells.length,
    ...bodyRows.map((row) => row.cells?.length ?? 0),
    1
  );

  const formatHeader = (text) => {
    if (typeof text !== "string" || !text.length) {
      return text;
    }

    return text.charAt(0).toLocaleUpperCase() + text.slice(1);
  };

  return (
    <figure className="my-10 w-full min-w-0">
      {value.caption && (
        <figcaption className="mb-4 text-base font-semibold leading-7 text-foreground sm:text-lg">
          {value.caption}
        </figcaption>
      )}

      <div className="w-full min-w-0 overflow-x-auto rounded-xl border border-border/90 bg-card">
        <table className="w-full table-fixed border-collapse text-left text-sm sm:text-base">
          <colgroup>
            {Array.from({ length: columnCount }).map((_, index) => (
              <col key={index} style={{ width: `${100 / columnCount}%` }} />
            ))}
          </colgroup>

          {hasHeader && headerCells.length > 0 && (
            <thead className="bg-foreground/5">
              <tr>
                {headerCells.map((cell, index) => (
                  <th
                    key={index}
                    scope="col"
                    className={`border-b-2 border-border/80 px-4 py-3.5 font-semibold text-foreground sm:px-5 ${
                      index > 0 ? "border-l border-border/70" : ""
                    }`}
                  >
                    <span className="break-words">
                      {formatHeader(cell)}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
          )}

          <tbody>
            {bodyRows.map((row, rowIndex) => (
              <tr
                key={row._key || rowIndex}
                className="border-b border-border/70 last:border-b-0 transition-colors bg-surface/40"
              >
                {Array.from({ length: columnCount }).map((_, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-3.5 leading-7 text-foreground sm:px-5 ${
                      cellIndex > 0 ? "border-l border-border/70" : ""
                    }`}
                  >
                    <div className="break-words">
                      {row.cells?.[cellIndex] ?? ""}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
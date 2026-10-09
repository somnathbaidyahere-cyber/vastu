export default function TableBlock({ value }) {
  const rows = value?.rows ?? [];

  if (rows.length === 0) {
    return null;
  }

  const hasHeader = value.hasHeader !== false;

  return (
    <figure className="my-10 min-w-0">
      {value.caption && (
        <figcaption className="mb-4 text-base font-medium leading-7 text-foreground">
          {value.caption}
        </figcaption>
      )}

      <div className="w-full overflow-x-auto rounded-xl border border-border/70">
        <table className="w-full min-w-max border-collapse text-left text-sm sm:text-base">
          {hasHeader && rows[0]?.cells?.length > 0 && (
            <thead className="bg-muted/60">
              <tr>
                {rows[0].cells.map((cell, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="border-b border-border px-4 py-3 font-semibold text-foreground sm:px-5"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
          )}

          <tbody className="divide-y divide-border/70">
            {rows.slice(hasHeader ? 1 : 0).map((row, rowIndex) => (
              <tr
                key={row._key || rowIndex}
                className="transition-colors hover:bg-muted/30"
              >
                {(row.cells ?? []).map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-4 py-3 leading-7 text-foreground/85 sm:px-5"
                  >
                    {cell}
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
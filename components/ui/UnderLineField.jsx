function UnderlinedField({
  id,
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  hint,
  required = false,
  multiline = false,
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-4">
        <label
          htmlFor={id}
          className="text-sm font-medium uppercase tracking-wide text-[#7A7268]"
        >
          {label}
          {required && " *"}
        </label>

        {hint && (
          <span className="text-xs italic text-[#A49A8D]">
            {hint}
          </span>
        )}
      </div>

      {multiline ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          rows={1}
          className={`min-h-20 w-full resize-y border-0 border-b border-[#E2DACC] bg-transparent px-0 py-2 text-sm leading-relaxed text-[#2C2825] outline-none transition-colors focus:border-[#8C6A3C] ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-[#D9CDBB] focus:border-[#8C6A3C]"
          }`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full border-0 border-b border-[#E2DACC] bg-transparent px-0 py-2 text-sm text-[#2C2825] outline-none transition-colors focus:border-[#8C6A3C]" ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-[#D9CDBB] focus:border-[#8C6A3C]"
          }`}
        />
      )}

     <div className="min-h-5 pt-1">
  <p
    id={`${id}-error`}
    role="alert"
    className={`text-xs leading-4 text-red-600 transition-opacity duration-200 ${
      error ? "opacity-100" : "opacity-0"
    }`}
  >
    {error || "\u00A0"}
  </p>
</div>
    </div>
  );
}

export default UnderlinedField;
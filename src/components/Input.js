export default function Input({
  id,
  measureState,
  label,
  measureText,
  classInvalid,
  handleChange,
  invalidText,
}) {
  return (
    <div className="col-6 input-wrapper">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <p className="measure mt-0 mb-1 text-muted">{measureText}</p>
      <input
        type="text"
        className={`form-control ${classInvalid}`}
        id={id}
        onFocus={(e) => e.target.value = ""}
        value={measureState}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div id={id} className="invalid-feedback">
        Please provide a valid {invalidText}.
      </div>
    </div>
  );
}

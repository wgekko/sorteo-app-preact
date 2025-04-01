export const Input = ({ type, value, onInput, placeholder, className }) => {
    return (
      <input
        type={type}
        value={value}
        onInput={onInput}
        placeholder={placeholder}
        className={`py-2 px-4 rounded-md ${className}`}
      />
    );
  };
  
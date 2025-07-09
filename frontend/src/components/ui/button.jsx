
export function Button({ className = "", children, ...props }) {
  return (
    <button className={`px-4 py-2 font-semibold rounded ${className}`} {...props}>
      {children}
    </button>
  );
}

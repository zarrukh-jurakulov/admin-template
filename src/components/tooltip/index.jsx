const Tooltip = ({ message, children = "div" }) => {
  return (
    <div className="relative group bg-slate-300 inline-block">
      <Component
        component={children}
        className="absolute whitespace-nowrap top-8 left-1/2 -translate-x-1/2 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100"
      >
        {message}
      </Component>
    </div>
  );
};

const Component = ({ className = "", children, component }) => {
  switch (component) {
    case "div":
      return <div className={className}>{children}</div>;
    case "span":
      return <span className={className}>{children}</span>;
    case "p":
      return <p className={className}>{children}</p>;
    case "button":
      return <button className={className}>{children}</button>;
    default:
      return <div className={className}>{children}</div>;
  }
};

export default Tooltip;

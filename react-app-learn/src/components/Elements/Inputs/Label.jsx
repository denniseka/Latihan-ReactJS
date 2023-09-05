const Label = (props) => {
  const { htmlfor, children } = props;
  return (
    <label
      htmlFor={htmlfor}
      className="block text-slate-700 font-bold mb-2 pt-1"
    >
      {children}
    </label>
  );
};

export default Label;

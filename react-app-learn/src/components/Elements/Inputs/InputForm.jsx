import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { name, label, type, placeholder } = props;
  return (
    <div className="mb-3">
      <Label htmlfor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder}></Input>
    </div>
  );
};

export default InputForm;

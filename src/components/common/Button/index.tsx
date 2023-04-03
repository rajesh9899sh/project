import "./index.css";
type RajeshLabel = { label: string };
const Button = ({ label }: RajeshLabel) => {
  return (
    <div>
      <button className="navbar__button">{label}</button>
    </div>
  );
};

export default Button;

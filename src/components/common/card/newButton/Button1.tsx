import "./index.css";

type ButtonProp = {
  Remove: () => void;
};

const Button1 = ({ Remove }: ButtonProp) => {
  return (
    <div className="button">
      <button className="buttonClick" onClick={Remove}>
        Not Interested
      </button>
    </div>
  );
};

export default Button1;

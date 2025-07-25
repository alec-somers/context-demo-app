import { useContext } from "react";
import { AppContext } from "./AppContext";

const Card = () => {
  let { count, setCount } = useContext(AppContext);
  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
};

export default Card;

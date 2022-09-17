import {useSelector, useDispatch} from "react-redux";
import {actions} from "./store/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
      dispatch(actions.increment());
  }
  const decrement = () => {
      dispatch(actions.decrement());
  }
  const PlusTen = () => {
      dispatch(actions.PlusTen(10));
  }
  const MinusTen = () => {
      dispatch(actions.MinusTen(10));
  }


  return (
    <div>
      <h1 className = "text-4xl text-center mb-5">Counter App</h1>
      <h2 className = "text-2xl text-center">Value : {counter}</h2>
      <div className = "flex items-center justify-center py-10">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={PlusTen}>+10</button>
        <button onClick={MinusTen}>-10</button>
      </div>
    </div>
  );
}

export default App;

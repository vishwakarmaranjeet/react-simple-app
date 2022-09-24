import Wrapper from "./Wrapper";

const CountWithOne = (props) => {
  return <h1 onClick={props.handleClick}>Count with 1 : {props.count}</h1>;
};

export default Wrapper(CountWithOne, 1);

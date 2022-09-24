import Wrapper from "./Wrapper";

const CountWithTwo = (props) => {
  return <h1 onClick={props.handleClick}>Count with 2 : {props.count}</h1>;
};

export default Wrapper(CountWithTwo, 2);

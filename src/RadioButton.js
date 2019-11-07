import React from "react";

const Input = (props) => {
  // console.log(props)
  return (
    <div>
      <label>
          <input type="radio" name={props.name} value={props.value} />
          {props.value}, {props.name},
      </label>
    </div>
  )
};


const Parent = props => {
  const childrenNodes = [];
  React.Children.forEach(props.children, child => {
    const childProps = Object.assign({}, child.props);
    childrenNodes.push(childProps);

  });
  return (
    <>{props.children}</>
  )
}

const RadioButton = () => {
  return (
    <Parent >
      <Input value="남자" name="kind" />
      <Input value="여자" name="kind" />
    </Parent>
  )
}

export default RadioButton;
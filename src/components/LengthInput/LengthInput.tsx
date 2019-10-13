import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setArraySize } from "../../Actions";
import { ISizeError } from "../../Constants/ActionTypes";

interface IState {
  errors: ISizeError;
}

interface InputProps {
  error: ISizeError;
}

const mapStateToProps = (state: IState) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch: any) => ({
  setArraySize: (arraySize: string) => dispatch(setArraySize({ arraySize }))
});

const Wrapper = styled.div`
  flex: 1;
  width: 25vw;
`;
const Title = styled.p`
  font-weight: bold;
  font-family: Open Sans;
  font-size: 16;
  color: var(--title);
`;
const Input = styled.input<InputProps>`
  padding: 0.5em;
  background: #ecfcff;
  border-radius: 4px;
  width: 90%;
  border: ${props => mapPropsToBorder(props.error)};
  transition: all ease-in-out 0.3s;
`;
const ErrorMsg = styled.p`
  font-family: Open Sans;
  font-size: 10;
  color: var(--compared);
  transition: all ease-in-out 0.3s;
`;

const mapPropsToBorder = (error: ISizeError): string => {
  if (error.arraySize !== null) {
    return `2px solid var(--compared)`;
  }
  return `none`;
};

interface IProps {
  setArraySize: (arraySize: string) => void;
  errors: ISizeError;
}

const LengthInput: React.FC<IProps> = ({ setArraySize, errors }) => {
  const [arraySize, setLocalArraySize] = useState("10");
  const changeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalArraySize(e.target.value);
    setArraySize(e.target.value);
  };

  return (
    <Wrapper>
      <Title>Input Size</Title>
      <Input error={errors} onChange={e => changeSize(e)} value={arraySize} />
      <ErrorMsg>{errors.arraySize}</ErrorMsg>
    </Wrapper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LengthInput);

import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setArraySize } from "../../Actions";

interface SizeError {
  arraySize: string | null;
}

interface State {
  errors: SizeError;
}

interface InputProps {
  error: SizeError;
}

const mapStateToProps = (state: State) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch: any) => ({
  setArraySize: (arraySize: string) => dispatch(setArraySize({ arraySize }))
});

const Wrapper = styled.div`
  flex: 1;
  width: 25vw;
  margin-bottom: 6vh;
`;
const Title = styled.p`
  font-weight: bold;
  font-family: Open Sans;
  font-size: 16;
  color: black;
`;
const Input = styled.input<InputProps>`
  padding: 0.5em;
  background: white;
  border-radius: 4px;
  width: 90%;
  border: ${props => mapPropsToBorder(props.error)};
  transition: all ease-in-out 0.3s;
`;
const ErrorMsg = styled.p`
  font-family: Open Sans;
  font-size: 10;
  color: red;
  transition: all ease-in-out 0.3s;
`;

const mapPropsToBorder = (error: SizeError): string => {
  if (error.arraySize !== null) {
    return `2px solid red`;
  }
  return `none`;
};

interface Props {
  setArraySize: (arraySize: string) => void;
  errors: SizeError;
}

const LengthInput: React.FC<Props> = ({ setArraySize, errors }) => {
  const [arraySize, setLocalArraySize] = useState("10");
  const changeSize = (e: any) => {
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

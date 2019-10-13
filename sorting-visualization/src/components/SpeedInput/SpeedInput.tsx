import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setSpeed } from "../../Actions";

const mapDispatchToProps = (dispatch: any) => ({
  setSpeed: (speed: string) => dispatch(setSpeed({ speed }))
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
const Input = styled.input`
  appearance:none;
  height: 1vh;
  border-radius: 1em;
  width: 90%;
  &::-webkit-slider-thumb {
    appearance: none;
    box-shadow: 0 0 80px 10px #888888;
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--background);
    border: .25rem solid var(--bar);
    border-radius: 1rem
    cursor: pointer;
  }
`;

interface IProps {
  setSpeed: (speed: string) => void;
}

const SpeedInput: React.FC<IProps> = ({ setSpeed }) => {
  const [speed, setLocalSpeed] = useState("50");

  return (
    <Wrapper>
      <Title>Speed</Title>
      <Input
        type="range"
        min="0"
        max="100"
        value={speed}
        onChange={e => setLocalSpeed(e.target.value)}
        onMouseUp={() => setSpeed(speed)}
        onTouchEnd={() => setSpeed(speed)}
      />
    </Wrapper>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(SpeedInput);

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
  color: black;
`;
const Input = styled.input`
  padding: 0.5em;
  background: transparent;
  border: none;
  border-radius: 4px;
  width: 90%;
`;

interface Props {
  setSpeed: (speed: string) => void;
}

const SpeedInput: React.FC<Props> = ({ setSpeed }) => {
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

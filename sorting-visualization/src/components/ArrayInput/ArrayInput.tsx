import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setInitialArray } from "../../Actions";

interface State {
  initialArray: string;
}

const mapStateToProps = (state: State) => ({
  initialArray: state.initialArray
});

const mapDispatchToProps = (dispatch: any) => ({
  setInitialArray: (initialArray: string) =>
    dispatch(setInitialArray({ initialArray }))
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
const Select = styled.select`
  padding: 0.5em;
  background: white;
  border: none;
  border-radius: 4px;
  width: 90%;
`;

enum initialType {
  NS = "Nearly Sorted",
  IS = "Reversed",
  RD = "Random"
}

interface Props {
  setInitialArray: (initialArray: string) => void;
  initialArray: string;
}

const types = [initialType.NS, initialType.IS, initialType.RD];

const ArrayInput: React.FC<Props> = ({ setInitialArray, initialArray }) => (
  <Wrapper>
    <Title>Initial Array</Title>
    <Select
      value={initialArray}
      onChange={e => setInitialArray(e.target.value)}
    >
      {types.map((t, i) => (
        <option key={i} value={t}>
          {t}
        </option>
      ))}
    </Select>
  </Wrapper>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArrayInput);

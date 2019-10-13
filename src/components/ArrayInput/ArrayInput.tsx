import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setInitialArray } from "../../Actions";

interface IState {
  initialArray: string;
}

const mapStateToProps = (state: IState) => ({
  initialArray: state.initialArray
});

const mapDispatchToProps = (dispatch: any) => ({
  setInitialArray: (initialArray: string) =>
    dispatch(setInitialArray({ initialArray }))
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
const Select = styled.select`
  padding: 0.5em;
  background: #ecfcff;
  border: none;
  border-radius: 4px;
  width: 90%;
`;

enum initialType {
  NS = "Nearly Sorted",
  IS = "Reversed",
  RD = "Random"
}

interface IProps {
  setInitialArray: (initialArray: string) => void;
  initialArray: string;
}

const types = [initialType.NS, initialType.IS, initialType.RD];

const ArrayInput: React.FC<IProps> = ({ setInitialArray, initialArray }) => (
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

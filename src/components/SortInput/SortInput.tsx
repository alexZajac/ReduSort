import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setAlgorithm } from "../../Actions";

interface IState {
  algorithm: string;
}

const mapStateToProps = (state: IState) => ({ algorithm: state.algorithm });

const mapDispatchToProps = (dispatch: any) => ({
  setAlgorithm: (algorithm: string) => dispatch(setAlgorithm({ algorithm }))
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

interface IProps {
  setAlgorithm: (algorithm: string) => void;
  algorithm: string;
}

const algos = [
  "Bubble Sort",
  "Insertion Sort",
  "Selection Sort",
  "Merge Sort",
  "Quick Sort",
  "Tim Sort",
  "Heap Sort"
];

const SortInput: React.FC<IProps> = ({ algorithm, setAlgorithm }) => (
  <Wrapper>
    <Title>Sorting Algorithm</Title>
    <Select value={algorithm} onChange={e => setAlgorithm(e.target.value)}>
      {algos.map((a, i) => (
        <option key={i} value={a}>
          {a}
        </option>
      ))}
    </Select>
  </Wrapper>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortInput);

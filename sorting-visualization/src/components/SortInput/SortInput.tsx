import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setAlgorithm } from "../../Actions";

interface State {
  algorithm: string;
}

const mapStateToProps = (state: State) => ({ algorithm: state.algorithm });

const mapDispatchToProps = (dispatch: any) => ({
  setAlgorithm: (algorithm: string) => dispatch(setAlgorithm({ algorithm }))
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

interface Props {
  setAlgorithm: (algorithm: string) => void;
  algorithm: string;
}

const algos = [
  "Bubble Sort",
  "Insertion Sort",
  "Selection Sort",
  "Merge Sort",
  "Quick Sort",
  "Radix Sort",
  "Counting Sort",
  "Tim Sort",
  "Heap Sort"
];

const SortInput: React.FC<Props> = ({ algorithm, setAlgorithm }) => (
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

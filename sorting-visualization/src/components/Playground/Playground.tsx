import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Bar from "../Bar";
import { setBars } from "../../Actions";

interface Action {
  type: string;
  first: number;
  second: number;
  index: number;
  value: number;
}

interface Props {
  bars: Array<bar>;
  setBars: (bars: Array<bar>) => void;
  nextAction: Action | null;
  speed: string;
}

interface State {
  bars: Array<bar>;
  nextAction: Action | null;
  speed: string;
}

interface bar {
  value: number;
  isSwapped: boolean;
  isCompared: boolean;
}

const mapStateToProps = (state: State) => ({
  bars: state.bars,
  nextAction: state.nextAction,
  speed: state.speed
});

const mapDispatchToProps = (dispatch: any) => ({
  setBars: (bars: Array<bar>) => dispatch(setBars({ bars }))
});

const Wrapper = styled.div`
  width: 75vw;
  height: 100vh;
  background: white;
`;

const Playground: React.FC<Props> = ({ bars, setBars, nextAction, speed }) => {
  useEffect(() => {
    if (nextAction !== null && nextAction !== undefined) {
      if (nextAction.type === "comparison") {
        let barArray = [...bars];
        barArray[nextAction.first].isCompared = true;
        barArray[nextAction.second].isCompared = true;
        setBars(barArray);
      } else if (nextAction.type === "swapColors") {
        let barArray = [...bars];
        barArray[nextAction.first].isCompared = false;
        barArray[nextAction.second].isCompared = false;
        barArray[nextAction.first].isSwapped = true;
        barArray[nextAction.second].isSwapped = true;
        setBars(barArray);
      } else if (nextAction.type === "swap") {
        let barArray = [...bars];
        let temp = barArray[nextAction.first];
        barArray[nextAction.first] = barArray[nextAction.second];
        barArray[nextAction.second] = temp;
        setBars(barArray);
      } else if (nextAction.type === "clean") {
        let barArray = [...bars];
        barArray.forEach(b => {
          b.isCompared = false;
          b.isSwapped = false;
        });
        setBars(barArray);
      } else if (nextAction.type === "changeValue") {
        let barArray = [...bars];
        barArray[nextAction.index].value = nextAction.value;
        barArray[nextAction.index].isSwapped = true;
        setBars(barArray);
      }
    }
  }, [nextAction]);

  return (
    <Wrapper>
      {bars.map((b, i) => (
        <Bar speed={speed} key={i} value={b} highest={bars.length} index={i} />
      ))}
    </Wrapper>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playground);

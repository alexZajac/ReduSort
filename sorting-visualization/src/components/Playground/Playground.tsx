import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Bar from "../Bar";
import { setBars } from "../../Actions";
import { IBar, IAction } from "../../Constants/ActionTypes";

interface IProps {
  bars: Array<IBar>;
  setBars: (bars: Array<IBar>) => void;
  nextAction: IAction | null;
  speed: string;
}

interface IState {
  bars: Array<IBar>;
  nextAction: IAction | null;
  speed: string;
}

const mapStateToProps = (state: IState) => ({
  bars: state.bars,
  nextAction: state.nextAction,
  speed: state.speed
});

const mapDispatchToProps = (dispatch: any) => ({
  setBars: (bars: Array<IBar>) => dispatch(setBars({ bars }))
});

const Wrapper = styled.div`
  width: 75vw;
  height: 100vh;
  background: var(--background);
  align-items: flex-end;
  display: flex;
`;

const Playground: React.FC<IProps> = ({ bars, setBars, nextAction, speed }) => {
  useEffect(() => {
    if (nextAction !== null && nextAction !== undefined) {
      if (nextAction.type === "comparison") {
        let barArray = [...bars];
        barArray[nextAction.first!].isCompared = true;
        barArray[nextAction.second!].isCompared = true;
        setBars(barArray);
      } else if (nextAction.type === "swapColors") {
        let barArray = [...bars];
        barArray[nextAction.first!].isCompared = false;
        barArray[nextAction.second!].isCompared = false;
        barArray[nextAction.first!].isSwapped = true;
        barArray[nextAction.second!].isSwapped = true;
        setBars(barArray);
      } else if (nextAction.type === "swap") {
        let barArray = [...bars];
        let temp = barArray[nextAction.first!];
        barArray[nextAction.first!] = barArray[nextAction.second!];
        barArray[nextAction.second!] = temp;
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
        barArray[nextAction.index!].value = nextAction.value!;
        barArray[nextAction.index!].isSwapped = true;
        setBars(barArray);
      }
    }
  }, [nextAction, setBars]);

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

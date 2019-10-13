import React from "react";
import styled from "styled-components";
import {
  interpolateSpeed,
  useWindowDimensions,
  MIN_VALUE_DISPLAY_FACTOR
} from "../../Constants/Utils";
import { IBar } from "../../Constants/ActionTypes";

const mapPropsToColor = (isCompared: boolean, isSwapped: boolean): string => {
  if (isCompared) {
    return "var(--compared)";
  }
  if (isSwapped) {
    return "var(--swapped)";
  }
  return "var(--copyOtherSidebar)";
};

const mapPropsToTransition = (speed: string): string => {
  const minInterval = Math.min(300, interpolateSpeed(speed));
  return `all ease-in-out ${minInterval}ms`;
};

const Container = styled.div<IBarContainerProps>`
  height: ${props => props.height};
  flex: 1;
  background: ${props => mapPropsToColor(props.isCompared, props.isSwapped)};
  transition: ${props => mapPropsToTransition(props.speed)};
  color: var(--background);
  font-size: 2vw;
  font-family: Open Sans;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  display: flex;
  border: 1px solid var(--background);
`;

interface IBarContainerProps {
  height: string;
  total: number;
  isSwapped: boolean;
  isCompared: boolean;
  speed: string;
}

interface IProps {
  value: IBar;
  highest: number;
  index: number;
  speed: string;
}

const Bar: React.FC<IProps> = ({ value: bar, highest, speed }) => {
  const height = `${Math.floor((bar.value / highest) * 100)}vh`;

  return (
    <Container
      height={height}
      total={highest}
      isSwapped={bar.isSwapped}
      isCompared={bar.isCompared}
      speed={speed}
    >
      {highest < 50 ? bar.value : null}
    </Container>
  );
};

export default Bar;

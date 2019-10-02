import React from "react";
import styled from "styled-components";
import { interpolateSpeed } from "../../Constants/Utils";

const mapPropsToMargin = (total: number): string => {
  const margin = 100 / total;
  return "0px";
  //return `${margin}px`;
};

const mapPropsToWidth = (total: number): string => {
  const totalMargin = (100 / total) * 2;
  return `calc(75vw / ${total})`;
};

const mapPropsToLeft = (index: number, total: number): string => {
  const position = index / total;
  return `calc(25vw + (75vw * ${position}))`;
};

const mapPropsToColor = (isCompared: boolean, isSwapped: boolean): string => {
  if (isCompared) {
    return "red";
  }
  if (isSwapped) {
    return "blue";
  }
  return "black";
};

const mapPropsToTransition = (speed: string): string => {
  const minInterval = Math.min(300, interpolateSpeed(speed));
  return `all ease-in-out ${minInterval}ms`;
};

const Container = styled.div<ContainerProps>`
  position: absolute;
  height: ${props => props.height};
  width: ${props => mapPropsToWidth(props.total)};
  background: ${props => mapPropsToColor(props.isCompared, props.isSwapped)};
  bottom: 0;
  left: ${props => mapPropsToLeft(props.index, props.total)};
  margin-left: ${props => mapPropsToMargin(props.total)};
  margin-right: ${props => mapPropsToMargin(props.total)};
  transition: ${props => mapPropsToTransition(props.speed)};
  color: white;
  font-size: 24;
  font-family: Open Sans;
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid white;
`;

interface ContainerProps {
  height: string;
  total: number;
  index: number;
  isSwapped: boolean;
  isCompared: boolean;
  speed: string;
}

interface bar {
  value: number;
  isSwapped: boolean;
  isCompared: boolean;
}

interface Props {
  value: bar;
  highest: number;
  index: number;
  speed: string;
}

const Bar: React.FC<Props> = ({ value: bar, highest, index, speed }) => {
  const height = `${Math.floor((bar.value / highest) * 100)}vh`;
  return (
    <Container
      height={height}
      total={highest}
      index={index}
      isSwapped={bar.isSwapped}
      isCompared={bar.isCompared}
      speed={speed}
    >
      {bar.value}
    </Container>
  );
};

export default Bar;

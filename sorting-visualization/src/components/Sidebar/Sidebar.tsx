import React from "react";
import styled from "styled-components";

import ArrayInput from "../ArrayInput";
import LengthInput from "../LengthInput";
import SortInput from "../SortInput";
import SpeedInput from "../SpeedInput";
import StartButton from "../StartButton";

const Wrapper = styled.div`
  height: 100vh;
  width: 25vw;
  background: #999999;
  border-right: 2px solid black;
  padding: 1em;
`;
const TitleWrapper = styled.div`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const Title = styled.p`
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 2px;
  color: white;
  font-weight: bold;
  font-family: Open Sans;
  text-align: center;
`;

interface Props {
  // initial: [string, (initial: string) => void];
  // speed: [string, (speed: string) => void];
  // sorting: [string, (sorting: string) => void];
  // length: [string, (length: string) => void];
  // startSorting: [boolean, (startSorting: boolean) => void];
}

const Sidebar: React.FC<Props> = props => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Sorting Visualization</Title>
      </TitleWrapper>
      <LengthInput />
      <ArrayInput />
      <SortInput />
      <SpeedInput />
      <StartButton />
    </Wrapper>
  );
};
export default Sidebar;

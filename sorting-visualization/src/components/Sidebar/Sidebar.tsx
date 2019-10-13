import React from "react";
import styled from "styled-components";

import ArrayInput from "../ArrayInput";
import LengthInput from "../LengthInput";
import SortInput from "../SortInput";
import SpeedInput from "../SpeedInput";
import StartButton from "../StartButton";
import Switch from "../Switch";

const Wrapper = styled.div`
  height: 94vh;
  width: 25vw;
  background: var(--sidebar);
  padding: 3vh;
`;
const TitleWrapper = styled.div`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const Title = styled.p`
  text-transform: uppercase;
  font-size: 2vw;
  letter-spacing: 2px;
  color: var(--bar);
  font-weight: bold;
  font-family: Open Sans;
  text-align: center;
`;

const Sidebar: React.FC<{}> = () => (
  <Wrapper>
    <TitleWrapper>
      <Title>Sorting Visualization</Title>
    </TitleWrapper>
    <Switch />
    <LengthInput />
    <ArrayInput />
    <SortInput />
    <SpeedInput />
    <StartButton />
  </Wrapper>
);
export default Sidebar;

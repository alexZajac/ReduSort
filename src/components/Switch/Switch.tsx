import React, { ReactNode, useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../ThemeContext/ThemeContext";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.p`
  font-weight: bold;
  font-family: Open Sans;
  font-size: 16;
  color: var(--title);
`;

const LabelSwitch = styled.label`
  display: flex;
  margin: 0 50px 0 50px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 50px;
  height: 25px;
  background: var(--background);
  border-radius: 25px;
  position: relative;
  transition: background-color 0.2s;
  span {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    border-radius: 25px;
    transition: 0.2s;
    background: var(--bar);
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
  &:active span {
    width: 30px;
  }
`;

const InputSwitch = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + ${LabelSwitch} span {
    left: calc(100%);
    transform: translateX(-100%);
  }
`;

const Switch: React.FC = () => {
  const { isDark, toggle } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Title>Dark Mode: </Title>
      <InputSwitch
        checked={isDark}
        onChange={() => toggle()}
        id="react-switch-new"
        type="checkbox"
      />
      <LabelSwitch htmlFor="react-switch-new">
        <span />
      </LabelSwitch>
    </Wrapper>
  );
};

export default Switch;

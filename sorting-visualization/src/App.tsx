import * as React from "react";

import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Playground from "./components/Playground";

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const App: React.FC = () => (
  <AppWrapper>
    <Sidebar />
    <Playground />
  </AppWrapper>
);

export default App;

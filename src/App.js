import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppBody>
        <Sidebar />
        <Routes>
          <Route path="/" exact element="" />
        </Routes>
      </AppBody>
    </BrowserRouter>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

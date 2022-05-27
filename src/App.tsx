import React, { useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import { BoardGame } from "./component/Board";

function App() {
  useEffect(() => {
    // test && test?.current
    // // console.log(test.current.play);
    // test.current.play && test.current.play();
    // console.log(test.current);
    // // test.current? as any
  }, []);

  return (
    <>
      <BoardGame />
    </>

    // <Home>
    //   <BrowserRouter>
    //     <ColorMode>
    //       <Setting />
    //       <Menu>
    //         <Title>MindBattle</Title>
    //         <FormButton
    //           title="continue"
    //           ImageLink="../image/icons8-synchronize-50.png"
    //         ></FormButton>
    //         <FormButton
    //           title="1 player"
    //           ImageLink="../image/icons8-popular-man-32.png"
    //         ></FormButton>
    //         <FormButton
    //           title="2 player"
    //           ImageLink="../image/icons8-head-to-head-32.png"
    //         ></FormButton>
    //         <FormButton
    //           title="online"
    //           ImageLink="../image/icons8-online-50.png"
    //         ></FormButton>
    //       </Menu>
    //     </ColorMode>
    //     <Routes>
    //       salam
    //       <Route path="/playground" element={<Playground />} />
    //     </Routes>
    //   </BrowserRouter>
    // </Home>
  );
}

export default App;

const Home = styled.div`
  width: 100%;
  height: 41.5rem;
  background: url("./image/Russian-Checkers.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ColorMode = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 60px;
  margin-top: 30px;
  font-family: "Caveat", cursive;
  font-family: "Dancing Script", cursive;
  font-family: "Rubik Glitch", cursive;
  font-weight: 400;
`;

const Menu = styled.div`
  width: 25rem;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

import React, { useState } from "react";
import styled from "styled-components";
import { PlayButton } from "./button/PlayButton";

export const BoardGame: React.FC = () => {
  let piece = new Array(49).fill("");
  const [active, setActive] = useState();
  return (
    <Board>
      <BoxGame>
        {piece.map((number, index: any) => (
          <PieceBoard key={index}>
            {
              <PlayButton
                active={active}
                setActive={setActive}
                type={index % 2 === 0 ? "even" : "odd"}
              />
            }
          </PieceBoard>
        ))}
      </BoxGame>
    </Board>
  );
};

const Board = styled.div`
  width: 100%;
  height: 41.5rem;
  background: url(../../image/www.jpeg);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PieceBoard = styled.div`
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-child(odd) {
    background: url(../../image/d.jpeg);
  }
  &:nth-child(even) {
    background: url(../../image/woodb.png);
  }
`;

const BoxGame = styled.div`
  width: 48%;
  height: 36rem;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 5.1rem;
  position: relative;
`;

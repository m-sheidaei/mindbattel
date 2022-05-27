import _ from "lodash";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { minimax } from "../ai/miniMax";
import { whoIsWin } from "../ai/utils";
import { PlayButton } from "./button/PlayButton";

export const BoardGame: React.FC = ({}) => {
  const [restart, setRestart] = useState(false);

  const [board, setBoard] = useState<number[][]>(generateBoard());
  const [isComputer, setIsComputer] = useState<boolean>(false);
  const [whoWin, setWhoWin] = useState<-1 | 0 | 1>(0);

  const [sel1, setSel1] = useState<{
    col: number;
    row: number;
    isSelected: boolean;
  }>({ col: -1, row: -1, isSelected: false });
  const [sel2, setSel2] = useState<{
    col: number;
    row: number;
    isSelected: boolean;
  }>({ col: -1, row: -1, isSelected: false });

  useEffect(() => {
    setBoard(generateBoard());
    setSel1({ col: -1, row: -1, isSelected: false });
    setSel2({ col: -1, row: -1, isSelected: false });
  }, [restart]);

  useEffect(() => {
    if (sel2.isSelected) {
      const b = _.cloneDeep(board);
      b[sel1.row][sel1.col] = 0;
      b[sel2.row][sel2.col] = -1;
      setIsComputer(true);
      sel2.isSelected = false;
      sel1.isSelected = false;
      setBoard(b);
    }
  }, [sel2]);

  useEffect(() => {
    setWhoWin(whoIsWin(board, isComputer));
  }, [board]);

  useEffect(() => {
    if (isComputer) {
      setIsComputer(false);
      setBoard(minimax(board, true));
    }
  }, [isComputer]);
  const handleClick = (rowIndex: number, columnIndex: number) => {
    if (!sel1.isSelected && board[rowIndex][columnIndex] === -1) {
      setSel1({ col: columnIndex, row: rowIndex, isSelected: true });
    } else if (
      sel1.isSelected &&
      sel1.col === columnIndex &&
      sel1.row === rowIndex
    ) {
      setSel1({ col: columnIndex, row: rowIndex, isSelected: false });
    } else if (
      board[rowIndex][columnIndex] === 1 &&
      sel1.isSelected &&
      Math.abs(rowIndex - sel1.row) + Math.abs(columnIndex - sel1.col) < 2
    ) {
      setSel2({ col: columnIndex, row: rowIndex, isSelected: true });
    }
  };
  return (
    <Board>
      {whoWin === -1 ? (
        <Box
          width="19rem"
          height="2rem"
          color="#f87800"
          backgroundColor="#d6d6d6"
        >
          White is Winner
        </Box>
      ) : whoWin === 1 ? (
        <Box
          width="19rem"
          height="2rem"
          color="#f87800"
          backgroundColor="black"
        >
          black is Winner
        </Box>
      ) : (
        <Box
          width="19rem"
          height="2rem"
          color="white"
          backgroundColor="#f87800"
        >
          you are white
        </Box>
      )}

      <RestartButton onClick={() => setRestart(!restart)}>
        Restart
      </RestartButton>
      <BoxGame>
        {board.map((row, rowIndex) => {
          return (
            <div style={{ display: "flex" }}>
              {row.map((item, columnIndex) => {
                return (
                  <PieceBoard
                    odd={(rowIndex * board.length + columnIndex) % 2 === 0}
                  >
                    <PlayButton
                      isSelected={
                        sel1.isSelected &&
                        sel1.row === rowIndex &&
                        sel1.col === columnIndex
                      }
                      kind={item}
                      onClick={() => handleClick(rowIndex, columnIndex)}
                      key={String(rowIndex) + String(columnIndex)}
                    />
                    {/* {<PlayButton type={index % 2 === 0 ? "even" : "odd"} />} */}
                  </PieceBoard>
                );
              })}
            </div>
          );
        })}
      </BoxGame>
    </Board>
  );
};

const Board = styled.div`
  width: 100%;
  height: 41.5rem;
  background: url(../../image/www.jpeg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const RestartButton = styled.button`
  border-radius: 5%;
  border: 0px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  background-color: #f87800;
  margin: 1rem;
  color: #ffffff;
  width: 10rem;
  height: 4rem;
  font-weight: 500;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const PieceBoard = styled.div<{ odd: boolean }>`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  height: 5.5rem;
  width: 5.5rem;
  background: ${(props) =>
    props.odd ? "url(../../image/d.jpeg)" : " url(../../image/woodb.png)"};
`;

const BoxGame = styled.div`
  /* width: 48%; */
  height: 36rem;
  margin: 3rem auto;
  flex-direction: column;
  display: flex;
  /* display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 5.1rem; */
  position: relative;
`;
export const Box = styled.div`
  color: ${(props: IProps) => props.color};
  background-color: ${(props: IProps) => props.backgroundColor};
  height: ${(props: IProps) => props.height};
  width: ${(props: IProps) => props.width};
  text-align: center;
  font-size: 1.3rem;
`;

interface IProps {
  height: string;
  width: string;
  color: string;
  backgroundColor: string;
}

const generateBoard = (): number[][] => {
  return [
    [-1, 1, -1, 1, -1],
    [1, -1, 1, -1, 1],
    [-1, 1, -1, 1, -1],
    [1, -1, 1, -1, 1],
    [-1, 1, -1, 1, -1],
  ];
};

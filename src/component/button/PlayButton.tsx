import { type } from "os";
import React, { useState } from "react";
import styled from "styled-components";

interface Color {
  active:boolean;
  setActive:(val:boolean)=>void;
  type: string;
}
export const PlayButton: React.FC<Color> = ({ type ,setActive,active}) => {
  button={
    type="odd";
    positon:[2,1]
    active:true;
  }
  const ActiveButton = () => {
  setActive(!active)
  };
  return (
    <Button  onClick={ActiveButton}>
      <Button_inner type={typee} />
    </Button>
  );
};

const Button = styled.div<Color>`
  display: block;
  width: 52px;
  height: 53px;
  background: ${(prop) => (prop.type == "odd" ? "#58504c" : "#e4ded9")};
  border-radius: 75px;
  box-shadow: ${(prop) =>
    prop.type == "odd" ? "-7px 0 0 #2a2826" : "-7px 0 0 #f9f4ee"};
  cursor: pointer;
`;

const Button_inner = styled.div<Color>`
  display: block;
  width: 42px;
  height: 42px;
  background: ${(prop) => (prop.type == "odd" ? "#58504c" : "#e4ded9")};
  border-radius: 50px;
  box-shadow: ${(prop) =>
    prop.type == "odd" ? "inset -7px 0 0 #2a2826" : "inset -7px 0 0 #f9f4ee"};
  position: relative;
  left: 5px;
  top: 5px;
  border: ${(prop) =>
    prop.type == "odd" ? "2px solid #2a2826" : "2px solid #f9f4ee"};
`;

import React from "react";
import styled, { css, keyframes } from "styled-components";

interface IProps {
  // type: "odd" | "even";
  kind: number;
  onClick?: any;
  isSelected: boolean;
}
export const PlayButton: React.FC<IProps> = ({ onClick, isSelected, kind }) => {
  return (
    <Button kind={kind} isSelected={isSelected} onClick={onClick}>
      <Button_inner kind={kind} />
      {isSelected && <UpShadow isSelected={isSelected} />}
    </Button>
  );
};

const UpShadow = styled.div<{ isSelected: boolean }>`
  position: absolute;
  display: block;
  top: 0.4rem;
  left: 0.8rem;
  width: 59px;
  margin-bottom: 1rem;
  height: 53px;
  box-shadow: -6px 10px 7px #2a2828;
  border-radius: 75px;
  ${(props) =>
    props.isSelected &&
    css`
      animation: ${selectShadow} 1s infinite alternate-reverse linear;
    `}
`;
const select = keyframes`
    0%		{   margin-bottom:1rem}
    100%		{    margin-bottom:2rem}

`;

const selectShadow = keyframes`
    0%		{   top:0.4rem}
    100%		{    top:0rem}

`;
const Button = styled.div<IProps>`
  display: block;
  width: 52px;
  height: 53px;
  border-radius: 75px;
  cursor: pointer;
  ${(props: IProps) =>
    props.isSelected &&
    css`
      margin-bottom: 1rem;
      animation: ${select} 1s infinite alternate-reverse linear;
    `}

  ${(props: IProps) =>
    props.kind === 1 &&
    css`
      background: #58504c;
      box-shadow: -7px 0 0 #2a2826;
    `}
  ${(props: IProps) =>
    props.kind === 0 &&
    css`
      display: none;
    `}

  ${(props: IProps) =>
    props.kind === -1 &&
    css`
      background: #e4ded9;
      box-shadow: -7px 0 0 #f9f4ee;
    `}
`;

const Button_inner = styled.div<{ kind: number }>`
  display: block;
  width: 42px;
  height: 42px;
  border-radius: 50px;
  ${(props) =>
    props.kind === 1 &&
    css`
      background: #58504c;
      box-shadow: inset -7px 0 0 #2a2826;
      border: 2px solid #2a2826;
    `}
  ${(props) =>
    props.kind === -1 &&
    css`
      background: #e4ded9;
      box-shadow: inset -7px 0 0 #f9f4ee;
      border: 2px solid #f9f4ee;
    `}
  position: relative;
  left: 5px;
  top: 5px;
`;

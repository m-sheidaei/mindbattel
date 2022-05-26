import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

type Style = {
  color?: string;
  bg?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
};
interface FButton {
  style?: Style;
  ImageLink?: string;
  title?: string;
  Address?: any;
}

export const FormButton: React.FC<FButton> = ({
  style,
  ImageLink,
  title,
  Address,
}) => {
  return (
    <StyledLink to="">
      <SButton style={style}>
        <Icon>
          <ImageIcon src={ImageLink} />
        </Icon>
        <Title>{title}</Title>
      </SButton>
    </StyledLink>
  );
};

const SButton = styled.div<FButton>`
  width: ${(w) => w.style?.width || "10.5rem"};
  height: ${(h) => h.style?.height || "2.1rem"};
  background-color: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Icon = styled.div`
  width: 3rem;
  height: 100%;
  border-radius: 15px 0 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;

const Title = styled.div`
  width: 9rem;
  height: 100%;
  border-radius: 0 15px 15px 0;
  box-shadow: rgba(50, 50, 93, 0.2) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.2) 0px 18px 36px -18px inset;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-family: "Righteous", cursive;
`;

const ImageIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  :hover {
    transform: scale(1.1);
    box-shadow: rgba(230, 230, 230, 0.56) 0px 22px 70px 4px;
  }
`;

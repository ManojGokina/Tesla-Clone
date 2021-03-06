import React from "react";
import styled from "styled-components";

const Section = () => {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online For Touchless Delivery</p>
      </ItemText>
      <ButtonsGroup>
        <Buttons>
          <LeftButton>Custom Order</LeftButton>

          <RightButton>Existing Inventory</RightButton>
        </Buttons>
        <DownArrow src="/images/down-arrow.svg" />
      </ButtonsGroup>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin:8px;
`;

const RightButton = styled(LeftButton)``;
const ButtonsGroup = styled.div``;

const DownArrow = styled.img`
  height: 40px;
  overflow-x:hidden;
  animation: animateDown infinite 1.5s;
`

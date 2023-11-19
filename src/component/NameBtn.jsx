import React from 'react'
import { css } from 'styled-components';
import styled from 'styled-components';


function NameBtn({nameBtn,nameList,clickNameBtn}) {
  return (
    <div>
         <StNameContainer>
        {nameList.map((dormlist, index) => {
          return (
            <StNameBox
              key={index}
            //   backGroundColor={dormlist}
              onClick={() => clickNameBtn(dormlist)}
              nameBtn={nameBtn}  
            > 
              {dormlist}
            </StNameBox>
          );
        })}
        ;
      </StNameContainer>
    </div>
  )
}

const StNameContainer = styled.div`
  width: 450px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: larger;
  margin: 40px auto 0px auto;
`;
const StNameBox = styled.button`
  width: 100px;
  height: 30px;
  background-color: gray;
  margin: 10px;
  padding: 5px;
  text-align: center;
  border-radius: 3px;
  ${({ children, nameBtn }) => {
    // console.log("children", children);
    // console.log("nameBtn", nameBtn)
    // console.log("===========")
    // console.log(nameBtn===children)
    if (nameBtn === children) {
      return css`
        background-color: #a55d2a;
      `;
    }
  }}
  &:hover {
    background-color: #a55d2a;
    font-weight: bold;
  }
`;

export default NameBtn
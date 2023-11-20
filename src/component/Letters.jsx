import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Letters({ dormLetters, letters }) {
  const navigate = useNavigate();

  return (
    <div>
      {dormLetters.map((letter) => {
        return (
          <StLetterBox
            onClick={() => {
              navigate(`detail/${letter.id}`);
            }}
            key={letters.id}
          >
             <img src={letter.avatar} alt="없다" />
           <StLetterText>
            <h3>{letter.nickname}</h3>
            <StContentsBox>{letter.content}</StContentsBox>
            <p>{letter.createdAt} </p>
            <p>{letter.writedTo}</p>
            </StLetterText>
          </StLetterBox>
        );
      })}
    </div>
  );
}

const StLetterBox = styled.div`
  margin: 50px auto 20px auto;
  width: 550px;
  height: 250px;
  border: 1px solid white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    border-color: gray;
  }
`;
const StContentsBox = styled.p`
  width: 350px;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const StLetterText = styled.div`
  margin: 20px;
  gap: 10px;
  display: block;
  /* flex-direction: column;
  align-items: center;
  justify-content: flex-start;  */
  
`;

export default Letters;

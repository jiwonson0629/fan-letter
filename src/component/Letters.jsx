import React from "react";
import styled from "styled-components";
import css from "styled-components";
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
            {/* <image>{letters.avatar}</image> */}
            <img src={letter.avatar} alt="없다" />
            <h3>{letter.nickname}</h3>
            <StContentsBox>{letter.content}</StContentsBox>
            <p>{letter.createdAt} </p>
            <p>{letter.writedTo}</p>
            {/* <p>{letter.id} </p> */}
          </StLetterBox>
        );
      })}
    </div>
  );
}

const StLetterBox = styled.div`
  margin: 20px auto 20px auto;
  width: 550px;
  height: 250px;
  border: 1px solid white;
  border-radius: 4px;
  display: grid;
  /* align-items: center;
  justify-content: center; */
  &:hover {
    border-color: gray;
  }
`;
const StContentsBox = styled.p`
  width: 400px;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Letters;

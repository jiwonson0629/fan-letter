import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Detail({ letters, setLetters }) {
  const homenavi = useNavigate();
  const { id } = useParams();

  const letter = letters.filter((item) => {
    return item.id === id;
  });
  // 삭제버튼
  const removeLetter = (click) => {
    console.log("asdf", click[0].id)
    const newLetter = letters.filter((item) => {
      console.log("123123", item.id);
      
      return click[0].id !== item.id;
    });
    console.log("0000000",newLetter)
    setLetters(newLetter);
    homenavi("/");
  };

  // 수정버튼 
   const [upDate, setUpDate] = useState();
   
  return (
    <div>
      <HomeBtn
        onClick={() => {
          homenavi("/");
        }}
      >
        home
      </HomeBtn>
      <StLetterBox>
        <img src={letter[0].avatar} alt="없다" />
        <StLetterText2>
          <h3>{letter[0].nickname}</h3>
          <div>{letter[0].content} </div>
          <p>{letter[0].createdAt} </p>
          <p>{letter[0].writedTo}</p>
          <p>{letter[0].id} </p>

          <button 
          onClick={() =>removeLetter(letter)}
          >삭제</button>
          <button>수정</button>
        </StLetterText2>
      </StLetterBox>
      <footer></footer>
    </div>
  );
}

const HomeBtn = styled.button`
  width: 40px;
  height: 20px;
  padding: 10px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
`;
const StLetterText2 = styled.div`
  margin: 20px;
  gap: 10px;
  display: block;
  /* flex-direction: column;
  align-items: center;
  justify-content: flex-start;  */
  
`;
const StLetterBox = styled.div`
  margin: 100px auto 20px auto;
  padding: 10px;
  border: 1px solid white;
  border-radius: 4px;
  width: 550px;
  height: 250px;
  display: flex;
`;

export default Detail;

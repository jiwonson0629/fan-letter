import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import uuid from 'react-uuid';

function InputLetter({letters,setLetters, nameList}) {
 const [nickname, setNickname] = useState("");
 const [content,setContent] = useState("");
 const [select, setSelect] = useState("Gryffindor");

    const submitBtn =(e)=>{
        e.preventDefault();
        const newLetter = {
            avatar: defauteImg,
            nickname,
            content,
            // createdAt : letters.createdAt,
            writedTo : select,
            id:uuid(),
        }
        setLetters([...letters, newLetter])
       
    }
        const defauteImg = "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
    
  return (
    
    <div>
        <StTextContainer
        onSubmit={submitBtn}
      >
        <input
         placeholder="이름을 입력하세요"
         value={nickname}
        //  타이핑 한 값이 들어옴
          onChange={(event)=>{      
            setNickname(event.target.value)
          }}/> <br />

        <StTextArea placeholder="응원을 남겨보세요"
        value={content} 
        onChange={(event)=>{
            setContent(event.target.value)
        }}/> <br />

        기숙사 :
        {/* 셀렉트에서 onchange 사용 */}
        <select value={select}
        
        onChange={(event)=>{                
            setSelect(event.target.value)
            
        }}>
        
          {nameList.map((dorm) => {
            return <option value={dorm}>{dorm}</option>;
          })}
        </select>
        <button>응원하기</button>
      </StTextContainer>
    </div>
  )
}

const StTextContainer = styled.form`
  width: 450px;
  height: 300px;
  margin: 50px auto 0px auto;
  display: grid;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
`;
const StTextArea = styled.textarea`
  width: 300px;
  height: 100px;
  resize: none;
`;

export default InputLetter
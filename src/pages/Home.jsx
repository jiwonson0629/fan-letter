import React, { useState } from "react";
import styled from "styled-components";
import hog from "../img/hog.jpeg";
import uuid from "react-uuid";
import { css } from "styled-components";

// styled
const Header = styled.header`
  height: 400px;
  background-image: url(${hog});
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: end;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
`;
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
const StLetterBox = styled.p`
  margin: 20px auto 20px auto;
  width: 550px;
  height: 250px;
  border: 1px solid white;
  border-radius: 4px;
  display: grid;
  /* align-items: center;
  justify-content: center; */

 
`;
const StContentsBox = styled.p`
  width:400px ;
  padding: 10px;

     ${({children})=> {
//    const contents = children[1].props.children[0]
//    console.log(children) 
   if( children[0].length >= 10 ){
    return css`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; `
   }  
 } 
 }
`

// 네임박스 색깔

// 클릭 했을 때 어떤 탭이 활성화 되는지 알 수 있도록 색깔입혀주기
//

function Home({ letters, setLetters }) {
  //   console.log("letters", letters);

  // 기숙사 이름 컬러, 컬러에따라 나오게 하기
  const nameList = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];

    // const nameBox = (color) => {
    //   // console.log("namecolor", color);
    //   switch (color) {
    //     case "#A52A2A":
    //       return "Gryffindor";
    //     case "#3C5087":
    //       return "Ravenclaw";
    //     case "#FFBE0A":
    //       return "Hufflepuff";
    //     case "green":
    //       return "Slytherin";
    //     default:
    //       return "error";
    //   }
    // };
const [nickname, setNickname] = useState("");
const [content,setContent] = useState("");
const [select, setSelect] = useState("Gryffindor");
 

  // 버튼 유지 state
  const [nameBtn, setnameBtn] = useState("Gryffindor");
  console.log()
  //   console.log("nameBtn", nameBtn)
  const clickNameBtn = (name) => {
    // console.log("name", name);
    
    setnameBtn(name);
    // setList(dromLetters);
  };
//   const [letter, setLetter] = useState();
const dormLetters = letters.filter((item)=>{
    return (item.writedTo === nameBtn)
} 
)
//  console.log(dormLetters)

//  console.log(select);
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
    const defauteImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx5U0ej9iv5kEHF9UB-aARiONrHWTCqUekSS8dsvk5Zg&s"

  return (
    <body>
      <Header>
        HOGWARTS
        <br /> Quidditch World Cup
      </Header>

      {/* 기숙사 이름 버튼 */}
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

      <div>
        {dormLetters.map((letter) => {
          return (
            <StLetterBox key={letters.id} nickname={letter.nickname}>
              {/* <image>{letters.avatar}</image> */}
              <img src={letter.avatar} alt="없다"/> 
              <h3>{letter.nickname}</h3>
              <StContentsBox>{letter.content} </StContentsBox>
              <p>{letter.createdAt} </p>
              <p>{letter.writedTo}</p>
              <p>{letter.id} </p>
            </StLetterBox>
          );
        })}
      </div>
    </body>
  );
}

export default Home;

import React, { useState } from "react";
import styled from "styled-components";
import hog from "../img/hog.jpeg";
import NameBtn from "../component/NameBtn";
import InputLetter from "../component/InputLetter";
import Letters from "../component/Letters";

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


function Home({ letters, setLetters }) {
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

 const [nameBtn, setnameBtn] = useState("Gryffindor");


// 버튼 클릭시 nameBtn state에 담긴 이름 변경
  const clickNameBtn = (name) => {setnameBtn(name); };

const dormLetters = letters.filter((item)=>{
    return (item.writedTo === nameBtn)
} 
)

  return (
    <body>
      <Header>
        HOGWARTS
        <br /> Quidditch World Cup
      </Header>

      {/* 기숙사 이름 버튼 */}
     <NameBtn nameList={nameList} clickNameBtn={clickNameBtn} nameBtn={nameBtn} ></NameBtn>

    {/* letter 작성  */}
    <InputLetter letters={letters} setLetters={setLetters} nameList={nameList} ></InputLetter>

      <div>
     <Letters  letters={letters} dormLetters={dormLetters}></Letters>
      </div>
    </body>
  );
}

export default Home;

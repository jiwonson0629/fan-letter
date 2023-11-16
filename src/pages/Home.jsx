import React from 'react'
import styled from 'styled-components'
import hog from '../img/hog.jpeg'

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
    
 `   
const NameContainer = styled.div`
    width: 450px;
    height: 70px;
    background-color: bisque;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: larger;
    margin: 20px auto 0px auto ;

`
const NameBox = styled.button`
    width: 100px;
    height: 30px;
    background-color: ${(p)=>p.backGroundColor };
    margin: 10px;
    padding: 5px;
    text-align: center;
    border-radius: 3px;
    
    
`
const TextContainer = styled.div`
    width: 450px;
    height: 300px;
    margin: 50px auto 0px auto;
    display: grid;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
`
const TextArea = styled.textarea`
    width: 300px;
    height: 100px;
    resize: none;
  
`

// 셀렉트 박스 컴포넌트
const SelectBox =(props)=>{
console.log(props)
    return (
        <select>
            {props.options.map((option) => {
              return  <option
					key={option.value}
					value={option.value}
				>
					{option.name}
				</option>
            })}
        </select>
    )
}

// 네임박스 색깔

// 클릭 했을 때 어떤 탭이 활성화 되는지 알 수 있도록 색깔입혀주기
// 버튼에 색깔 입힌다. 
// 맵으로 돌면서 클릭하면 색깔 바뀐다. 
 const nameColorList = ['red', 'blue', 'yello','green']

 const nameBox = (color)=>{

 }
   

function Home() {
    const NameOption = [
        { value: "Gryffindor", name: "Gryffindor" },
        { value: "Ravenclaw", name: "Ravenclaw" },
        { value: "Hufflepuff", name: "Hufflepuff" },
        { value: "Slytherin", name: "Slytherin" },
        ]

  return (
    <body>
        <Header>
            HOGWARTS<br/>  Quidditch World Cup
        </Header>
        <NameContainer>
        <NameBox backGroundColor ="red">Gryffindor</NameBox>
        <NameBox>Ravenclaw</NameBox>
        <NameBox>Hufflepuff</NameBox>
        <NameBox>Slytherin</NameBox>
        </NameContainer>

        <TextContainer>
        <input placeholder='이름을 입력하세요'/> <br/>
         <TextArea placeholder='응원을 남겨보세요'/> <br/>
            기숙사 : <SelectBox options={NameOption}></SelectBox>
            <button>응원하기</button>
        </TextContainer>
        <div>

        </div>
        <footer>

        </footer>
    </body>
  )
}

export default Home
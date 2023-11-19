import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';

function Detail({ letters, setLetters}) {
    const homenavi = useNavigate();
    const {id} = useParams();
    console.log("123",id)
    
    const defauteImg = "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
  
   const letter = letters.filter((item)=>{
     return item.id === id
   })
     console.log("456456452324", letter)
// 

  return (
    <div>
        <HomeBtn onClick={() =>{
          homenavi('/')
        }}>
          home
        </HomeBtn>
        <StLetterBox2>
        <img src={defauteImg} alt="없다"/> 
           <StLetterText>  
              <h3>{letter[0].nickname}</h3>
              <div>{letter[0].content} </div>
              <p>{letter[0].createdAt} </p>
              <p>{letter[0].writedTo}</p>
              <p>{letter[0].id} </p>
              <button>삭제</button>
              <button>수정</button>
            </StLetterText>
        
        </StLetterBox2>
        <footer>

        </footer>
    </div>
  )
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
`
const StLetterText = styled.div`
  
  display: grid;
  /* align-items: center;
  justify-content: center; */
`;
const StLetterBox2 = styled.div`
  margin: 20px auto 20px auto;
  border: 1px solid white;
  border-radius: 4px;
  width: 550px;
  height: 250px;
 


`

export default Detail
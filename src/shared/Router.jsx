import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import dummy from "../fakeData"
import { useState } from "react";

const Router =() =>{
    const [letters, setLetters] = useState(dummy)

    return(
        <BrowserRouter>
        <Routes >
            <Route path="/" element={<Home letters={letters} setLetters={setLetters}/>}  />
            <Route path="detail" element={<Detail letters={letters} setLetters={setLetters}/>}  />
        </Routes>
        </BrowserRouter>



    )
}

export default Router;
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Main from "./pages/Main/Main";
=======
import Login from "./pages/Login/Login";
>>>>>>> master

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/main" element={<Main />} />
=======
        <Route path="/" element={<Login />} />
>>>>>>> master
      </Routes>
    </BrowserRouter>
  );
}

//로그인완료
//로그인 add 재전송

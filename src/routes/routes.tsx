import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import TodoList from "../pages/TodoList/TodoList";
import IBanking from "../pages/IBanking/IBanking";
import Login from "../pages/Login/Login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/ibaking" element={<IBanking />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
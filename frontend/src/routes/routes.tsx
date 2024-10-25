import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import TodoList from "../pages/TodoList/TodoList";
import Login from "../pages/Login/Login";
import Transactions from "../pages/Transactions/Transactions";
import PrivateRoute from "../components/routes/privateRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/transactions"
          element={
            <PrivateRoute>
              <Transactions />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

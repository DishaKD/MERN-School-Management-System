import React from "react";
import "./App.css";
import Header from "./components/HeaderNav";
import AddStudent from "./components/AddStudent";
import AllStudent from "./components/AllStudent";
import DeleteStudent from "./components/DeleteStudent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateStudent from "./components/UpdateStudent";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<AllStudent />} />
          <Route path="/add" exact element={<AddStudent />} />
          <Route path="/delete/:id" exact element={<DeleteStudent />} />
          <Route path="/update/:id" exact element={<UpdateStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

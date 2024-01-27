import React from "react";
import "./App.css";
import Header from "./components/HeaderNav";
import AddStudent from "./components/AddStudent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/add" exact element={<AddStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

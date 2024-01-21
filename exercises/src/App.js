import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./modules/side-bar/Sidebar";
import Api from "./modules/api-request/Api";
import Search from "./modules/search-app/Search";
import Counter from "./modules/simple-counter/Counter";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Api />} />
            <Route path="/Search" exact element={<Search />} />
            <Route path="/Counter" exact element={<Counter />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;

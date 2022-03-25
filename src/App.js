import React from "react";
import "./App.css";
import "./css/candidateCss.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Candidates from "./pages/Candidates";
import CandidatesDetail from "./pages/CandidatesDetail";
import AboutUs from "./pages/AboutUs";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/aboutus" component={AboutUs}></Route>
          <Route path="/candidates" component={Candidates}></Route>
          <Route path="/candidatesDetail/:id" component={CandidatesDetail}></Route>
          <Route path="/signup" component={Signup}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

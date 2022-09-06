import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";


export default class App extends Component {
  name= "Yash";
  render() {
    return <div>
     <Navbar/>
     <News pageSize={5}/>
    </div>;
  }
}

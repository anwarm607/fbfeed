import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Posts from "./Posts/Posts";
import '../styles/App.scss';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Posts />
            </div>
        );
    }
}

export default App;
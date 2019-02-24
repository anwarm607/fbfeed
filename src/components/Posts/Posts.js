import React, { Component } from "react";
import './style.scss';
import autosize from "autosize";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from "@fortawesome/free-solid-svg-icons";

const  min_char = 0;
class Posts extends Component {
    state = {
        chars_used:min_char
    };
    componentDidMount() {
        this.textarea.focus();
        autosize(this.textarea);
    }
    handleChange = (event) => {
        var input = event.target.value;
        this.setState({
            chars_used: min_char + input.length
        });
    }
    render() {
        return (
            <div className="posts">
                <div className="header">
                    <div className="btn_set">
                        <button><FontAwesomeIcon icon={faImage} />  Add</button>
                        <button disabled>Post</button>
                    </div>
                    <img className="co-logo" src="http://placehold.it/40x40" />
                    <div className="co-name"><a href="#">Angelina John</a></div>
                    <div className="profession">Professional Hair Stylist</div>
                </div>
                <div className="f-card">
                    <form className="user_input">
                        <textarea
                        className="text"
                        maxLength="120"
                        onChange={this.handleChange}
                        ref={c => (this.textarea = c)}
                        placeholder="Hey! Try something here."
                        rows={1}
                        defaultValue=""/>
                        <span>{this.state.chars_used}/120</span>
                    </form>
                </div>
            </div>
        )
    }
}
export default Posts;
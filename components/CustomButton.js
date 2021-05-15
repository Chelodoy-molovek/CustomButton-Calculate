import React from "react";

export default class CustomButton extends React.Component {
    state = {
        text: ""
    };

    warnAlert = () => {
        alert(`${this.props.warnMessage}`);
    }
    slam = () => {
        this.setState({ text: this.props.hint })
    }
    onslam = () => {
        this.setState({ text: "" })
    }
    render() {
        return (
            <div >
                <button className={this.props.warnMessage ? "red" : "white"} onClick={this.warnAlert} onMouseOver={this.slam} onMouseOut={this.onslam}>{this.props.text}</button>
        
                <p>{this.state.text}</p>
            </div>
        )
    }
}
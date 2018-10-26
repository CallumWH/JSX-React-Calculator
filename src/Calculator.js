import React, { Component } from 'react';

export default class Calculator extends Component {

    constructor(){
        super();

        this.state = {
            stateText: ''
        }

        this.addNumeral = (e) => this.setState({
            stateText: this.state.stateText + e.target.value
        });

        this.addOpperator = (e) => this.setState({
            stateText: this.state.stateText + e.target.value
        });

        this.calculate = () => this.setState({
            stateText: eval(this.state.stateText)
        });

        this.clear = () => this.setState({
            stateText: ''
        });
        
    }

    render() {
        return (
            <div>             
                <p style ={{color: this.state.stateColor, fontWeight: this.state.stateBold, fontStyle: this.state.stateItalic}}>{this.state.stateText}</p>

                <div>
                    <input type="Button" value="7" onClick={this.addNumeral}></input>
                    <input type="Button" value="8" onClick={this.addNumeral}></input>
                    <input type="Button" value="9" onClick={this.addNumeral}></input>
                    <input type="Button" value="+" onClick={this.addOpperator}></input><br/>
                    <input type="Button" value="4" onClick={this.addNumeral}></input>
                    <input type="Button" value="5" onClick={this.addNumeral}></input>
                    <input type="Button" value="6" onClick={this.addNumeral}></input>
                    <input type="Button" value="-" onClick={this.addOpperator}></input><br/>
                    <input type="Button" value="1" onClick={this.addNumeral}></input>
                    <input type="Button" value="2" onClick={this.addNumeral}></input>
                    <input type="Button" value="3" onClick={this.addNumeral}></input>
                    <input type="Button" value="*" onClick={this.addOpperator}></input><br/>
                    <input type="Button" value="0" onClick={this.addNumeral}></input>
                    <input type="Button" value="/" onClick={this.addOpperator}></input>
                    <input type="Button" value="=" onClick={this.calculate}></input>
                    <input type="Button" value="CL" onClick={this.clear}></input><br/>
                </div>

            </div>);
    }

}
import React, { Component } from 'react';

export default class StateItem extends Component {

    constructor(){
        super();

        this.state = {
            stateText: 'This is state text',
            stateColor: 'black',
            stateBold: 'normal',
            stateItalic: 'normal',
            stateUpper: 'normal',
        }

        this.updateColor = (e) => this.setState({
            stateColor: e.target.value
        });

        this.updateText = (e) => this.setState({
            stateText: e.target.value
        });

        this.boldText = () => this.setState({
            stateBold: 'bold'
        });

        this.unbold = () => this.setState({
            stateBold: 'normal'
        });

        this.italicText = () => this.setState({
            stateItalic: 'italic'
        });

        this.upperCaseText = (e) => this.setState({
            stateText: this.state.stateText.toUpperCase()
        });
        
    }

    ToggleBold()
    {
        if(this.state.stateBold = 'bold')
        {
            this.boldText
        }
    }

    render() {
        return (
            <div>             
                <p style ={{color: this.state.stateColor, fontWeight: this.state.stateBold, fontStyle: this.state.stateItalic}}>{this.state.stateText}</p>
                Color : <input type="Text" onChange={this.updateColor}></input><br />
                Sentence : <input type="Text" onChange={this.updateText}></input><br />
                <input type="Button" value="Bold" onClick={this.boldText}></input><br/>
                <input type="Button" value="Italic" onClick={this.italicText}></input><br/>
                <input type="Button" value="To Upper Case" onClick={this.upperCaseText}></input><br/>

            </div>);
    }

}
import React, {Component} from "react";
import CircullarBtn from "@/components/CircullarBtn.jsx";

export default class NewComponent extends Component {

    state = {
        name: 'Alan',
        age: 25
    };

    handleClick = (e) => {
        alert('yooooo')
    }

    handleMouseOver = (e) => {
        alert(e.target, e.pageY, e.pageX)
    }

    handleCopy = (e) => {
        alert('Successfully copy')
    }

    handelChangingState = (e) => {
        this.setState({
            name: 'Jubeh',
            age: 22
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.name);
        console.log(this.state.age);
    }

    render() {
        return (
            <div className={'bg-black'}>
                <p>Yelan: how about you? {this.state.name}</p>
                <p>Alwan: I'm {this.state.age} y'o</p>
                <p>Yelan: Oky</p>

                <button type="button" onClick={this.handleClick} onMouseOver={this.handleMouseOver}>Click anywhere
                </button>

                <p onCopy={this.handleCopy}>copy</p>

                <button type='button' onClick={this.handelChangingState}>Change</button>
                <br/><br/><br/>
                <form onSubmit={this.handleSubmit}>
                    Name: <input type="text" name='name' onChange={this.handleChange}/><br/>
                    Age : <input type="number" name='age' onChange={this.handleChange}/>
                    <br/>
                    <button type={"submit"}>Submit</button>
                </form>
                <CircullarBtn/>
            </div>
        )
    }
}

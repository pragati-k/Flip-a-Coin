import React, { Component} from 'react';
import Coin from './Coin';
import './Flip.css';

class Flip extends Component{
    static defaultProps={
        result: [true, false]
    }
    constructor(props){
        super(props);
        this.state={
            isHead: null,
            totalCount: 0,
            head: 0,
            tail: 0
        }
        this.handleClick= this.handleClick.bind(this)
    }
    flip(){
        const res = this.props.result[Math.floor(Math.random()*this.props.result.length)];
        console.log(res)
        this.setState(st => {
            return{
                isHead: res,
                totalCount: st.totalCount + 1,
                head: st.head + (res? 1 : 0),
                tail: st.tail + (res? 0 : 1)
            }
        })
    }
    handleClick(){
        this.flip();
    }
    render(){
        return(
            <div className='Flip'>
                <h1>Let's flip a coin</h1>
                <Coin isHead={this.state.isHead}/>
                <button onClick ={this.handleClick}>Click to Flip</button>
                <p>Out of {this.state.totalCount} flips, there have been {this.state.head} heads and {this.state.tail} tails</p>
            </div>
        )
    }
}

export default Flip;
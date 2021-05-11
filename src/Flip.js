import React, { Component } from 'react';
import Coin from './Coin';
import './Flip.css';

class Flip extends Component {
    static defaultProps = {
        result: [true, false]
    }
    constructor(props) {
        super(props);
        this.state = {
            isHead: null,
            totalCount: 0,
            head: 0,
            tail: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    flip() {
        const res = this.props.result[Math.floor(Math.random() * this.props.result.length)];
        this.setState(st => {
            return {
                isHead: res,
                totalCount: st.totalCount + 1,
                head: st.head + (res ? 1 : 0),
                tail: st.tail + (res ? 0 : 1)
            }
        })
    }
    handleClick() {
        this.flip();
    }
    render() {
        return (
            <div className='Flip'>
                <h1>LET'S FLIP A COIN</h1>
                <Coin isHead={this.state.isHead} />
                <button onClick={this.handleClick}>FLIP</button>
                <table>
                    <tbody>
                    <tr>
                        <th>Flips</th>
                        <th>Head</th>
                        <th>Tail</th>
                    </tr>
                    <tr>
                        <td>{this.state.totalCount}</td>
                        <td>{this.state.head}</td>
                        <td>{this.state.tail}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Flip;
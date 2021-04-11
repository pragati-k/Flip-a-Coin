import React, {Component} from 'react';

class Coin extends Component{
    render(){
        return(
            <div>
                {this.props.isHead != null ? 
                    <img src={this.props.isHead? 'https://qphs.fs.quoracdn.net/main-qimg-1d5a0e61da032da066453daa3fb43b50.webp' : 
                    'https://qphs.fs.quoracdn.net/main-qimg-148ae81e6fe0500e130fb547026a9b26'} alt=""/>:null }
            </div>
        )
    }
}

export default Coin;
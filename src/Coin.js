import React, {Component} from 'react';

class Coin extends Component{
    render(){
        return(
            <div>
                {this.props.isHead != null ? 
                    <img src={this.props.isHead? 'https://en.numista.com/catalogue/photos/inde/1690-180.jpg' : 
                    'https://en.numista.com/catalogue/photos/inde/3147-180.jpg'} alt=""/>:null }
            </div>
        )
    }
}

export default Coin;
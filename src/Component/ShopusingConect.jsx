import React, { Component } from 'react'
import { connect } from 'react-redux';
import { buyShirt } from '../redux/shirt/shirtAction';

class ShopusingConect extends Component { 
    constructor(props){
        super(props)
    }

    buy = (price) => {
       console.log(this.props); 
       this.props.dispatch(buyShirt(price))
    }

  render() {
    return (
      <>
        <div>Shirt-- {this.props.shirt}</div>
        <div>total sell-- {this.props.totalshirtsell}</div>
        <button onClick={() =>this.buy(1000)}>buy Shirt</button>
      </>
    )
  }
}


const mapStateToProps = state => state.shirt
// const shirtstate = useSelector(state => state.shirt)

// const mapDisptachToProps = disptach => {
//     return {
//         buyShirt: () => disptach(buyShirt())
//     }
// }

export default connect(mapStateToProps)(ShopusingConect)
// connect is an higher order function becoz it takes mapStateToProps
// as an argument and returns a function which takes component as an argument
// connect()()
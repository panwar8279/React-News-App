import React, { Component } from 'react'
import loading from './loading-1.gif'

//***************** Class based component ********//
// export default class spinner extends Component {
//   render() {

//**************Function based component ************* */
const Spinner=()=>{
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" srcSet="" width="35px"/>
      </div>
    )
  }
//   }
// }
export default Spinner
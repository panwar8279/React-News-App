import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize=20
  apikey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      
      />
        <Routes>
          <Route exact path="/" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="general" pagesize={this.pageSize} country='in' category="general"/>} />
          <Route exact path="/business" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="business" pagesize={this.pageSize} country='in' category="business"/>} />
          <Route exact path="/entertainment" element={ <News setProgress={this.setProgress} apikey={this.apikey}  key="entertainment" pagesize={this.pageSize} country='in' category="entertainment"/>} />
          <Route exact path="/general" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="general" pagesize={this.pageSize} country='in' category="general"/>} />
          <Route exact path="/health" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="health" pagesize={this.pageSize} country='in' category="health"/>} />
          <Route exact path="/science" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="science" pagesize={this.pageSize} country='in' category="science"/>} />
          <Route exact path="/sports" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="sports" pagesize={this.pageSize} country='in' category="sports"/>} />
          <Route exact path="/technology" element={ <News setProgress={this.setProgress} apikey={this.apikey} key="technology" pagesize={this.pageSize} country='in' category="technology"/>} />
        </Routes>
        </Router>
      </div>
    )
  }
}


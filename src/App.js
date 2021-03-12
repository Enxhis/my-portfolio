import React, { Component } from 'react';
//import ReactGA from 'react-ga';
import $ from 'jquery';
//import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      data: {}
    };

  }

  getData(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.data.main}/>
        <About data={this.state.data.main}/>
        <Resume data={this.state.data.resume}/>
        <Portfolio data={this.state.data.portfolio}/>
        <Testimonials data={this.state.data.testimonials}/>
        <Contact data={this.state.data.main}/> 
        <Footer data={this.state.data.main}/> 
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react'

export default class
 extends Component {
  render() {
    return (
      <div>
<nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">TodayNews</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <a className="nav-link" href="/">Home</a>
        <a className="nav-link" href="Business">Business</a>
        <a className="nav-link" href="Entertainment">Entertainmentt</a>
        <a className="nav-link" href="Health">Health</a>
        <a className="nav-link" href="General">General</a>
        <a className="nav-link" href="Sport">Sport</a>
        <a className="nav-link" href="Science">Science</a>
        <a className="nav-link" href="Technology">Technology </a>
    
        
      </div>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

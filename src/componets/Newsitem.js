import React, { Component } from "react";


export default class extends Component {
 
  render() {
    let {title , descreption , Imagesurl , url} = this.props;
    
    
    return (
      <div>
      
        <div className="card" style={{ width: "18rem" }}>
          <img src={Imagesurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {descreption}
            </p>
            <a href={url}className="btn btn-sm btn btn-dark">
             Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

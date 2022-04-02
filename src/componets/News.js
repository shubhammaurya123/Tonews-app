import React, { Component } from "react";
import Newsitem from "./Newsitem"; 
export default class extends Component {
 
  articles =[];
  constructor() {
    super();
    this.state = {  
      articles : this.articles ,
      loading : false, 
      page : 1
    }
  }
  async componentDidMount() {
    let {category} = this.props;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=423809b9d78342c88de71cb2f31b4834&page=1&pageSize=18`;
    let data = await fetch(url);
    let datatype = await data.json();
    this.setState({articles: datatype.articles});
    
  }
  Next = async ()  => {
    let {category} = this.props;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=423809b9d78342c88de71cb2f31b4834&page=${this.state.page+ 1}&pageSize=18`;
    let data = await fetch(url);
    let datatype = await data.json();
    this.setState({articles: datatype.articles});
       this.setState ({
         page : this.state.page+1
       })
  }

  Privious= async() => {
    let {category} = this.props;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=423809b9d78342c88de71cb2f31b4834&page=${this.state.page- 1}&pageSize=18`;
    let data = await fetch(url);
    let datatype = await data.json();
    this.setState({articles: datatype.articles});
       this.setState ({
         page : this.state.page-1
       })
  }
  render() {
  
    return (
      <div className="container my-3">
        <h1 style={{textAlign: "center" }} className = "hedline my-4" >Top Headline today News</h1>
        <div className="row">
          {this.state.articles.map((element) => {
               return  <div className="col-md-4" key={element.urlToImage}>
                      <Newsitem title = {element.title}  descreption = {element.description} Imagesurl ={element.urlToImage} url = {element.url}/>
                      <br/> <br/>
                    </div>
                
          })  }
          </div>
          <div className="container my-5 d-flex justify-content-between"> 
          <button type="button" className="btn btn-dark" onClick={this.Privious}> &laquo; Privious</button>
          <button type="button" className="btn btn-dark" onClick={this.Next}>Next  &raquo;</button>
          </div>
      </div>

     
     
    );
  }
}


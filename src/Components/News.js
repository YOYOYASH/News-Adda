import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
  constructor() {
    super();
   this.state={
    articles:[]
   }
  }
  async componentDidMount(){
   let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=cfbf3f2a6e894c929ceefd3dc60299af";
   let data=await fetch(url);
   let parsedData= await  data.json();
   console.log(parsedData);
   this.setState({
     articles:parsedData.articles,
   })
  

  }//loads after render
  render() {
    return (
      <div className="container my-3">
        <h2>News Adda: Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;

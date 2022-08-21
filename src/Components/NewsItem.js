
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://thumbs.dreamstime.com/b/news-network-mobile-device-89835976.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsUrl} className="btn btn-primary" target="__blank">Read More</a>
      </div>
    </div>
    )
  }
}

export default NewsItem
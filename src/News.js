import React from "react";
import Article from "./Article";
import "./App.css";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?" +
      "sources=bbc-news&" +
      "apiKey=e67d4d336cc8496388d6ca911b8ea10e";
    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json.articles
        });
      });
  }
  render() {
    var { items } = this.state;
    return (
      <div className="article-container">
        {items.map(item => (
          <Article
            key={item.publishedAt}
            image={item.urlToImage}
            title={item.title}
            description={item.description}
            link={item.url}
          />
        ))}
      </div>
    );
  }
}
export default News;

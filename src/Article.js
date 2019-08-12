import React from "react";
import "./App.css";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      image: this.props.image,
      link: this.props.link
    };
  }
  render() {
    /* function newsPreview(e) {
      e.preventDefault();
      console.log(e.target.value);
    } */
    return (
      <div className="article">
        <a href={this.state.link} target="_blank" rel="noopener noreferrer">
          <img src={this.state.image} alt="news" />
          <h1 className="article-title">{this.state.title}</h1>
          <p className="article-description">{this.state.description}</p>
        </a>
      </div>
    );
  }
}

export default Article;

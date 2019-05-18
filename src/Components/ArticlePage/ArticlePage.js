import React, { Component } from "react";
import axios from "axios";
import renderHTML from "react-render-html";
import "./ArticlePage.css";

import usaFlag from "../../siliconeraPics/usa.gif";
import europeFlag from "../../siliconeraPics/europe.gif";
import japanFlag from "../../siliconeraPics/japan.gif";
import CreateComment from "../CreateComment/CreateComment";

const allSystems = {
  threeDS: "3DS",
  switch: "SWITCH",
  ps4: "PLAYSTATION 4",
  ps3: "PLAYSTATION 3",
  vita: "VITA",
  psp: "PSP",
  ios: "iOS",
  xOne: "XBOX ONE",
  x360: "XBOX 360",
  interviews: "INTERVIEWS"
};

class ArticlePage extends Component {
  constructor() {
    super();
    this.state = {
      article: null,
      articleLocations: [],
      systemCollection: []
    };
  }

  componentDidMount() {
    axios
      .get(`/api/get-articles-by-id/${this.props.match.params.id}`)
      .then(response => {
        const locationList = response.data[0].locations;

        const allCountries = [
          { name: "northAmerica", flag: usaFlag },
          { name: "europe", flag: europeFlag },
          { name: "japan", flag: japanFlag }
        ];
        const targetCountries = allCountries.filter(country => {
          return locationList.includes(country.name);
        });
        this.setState({
          articleLocations: targetCountries,
          article: response.data[0]
        });
      });
  }

  render() {
    if (!this.state.article) {
      return null;
    }

    const showFlags = this.state.articleLocations.map(locations => {
      return (
        <div className="flags">
          <div>
            <img src={locations.flag} />
          </div>
        </div>
      );
    });

    const showSystems = this.state.article.systems.map(system => {
      return <div className="system">{allSystems[system]}</div>;
    });

    return (
      <div className="article">
        <div className="top">
          <div className="systems">
            <h2>{showSystems}</h2>
          </div>
         
          <div className="title">
            <h1>{this.state.article.title}</h1>
          </div>
          <div className="flag">{showFlags}</div>
          <div className="authorPost">
            By {this.state.article.author_name} . {this.state.article.created_on}
          </div>
        </div>
        <div className="articlePic">
          <img src={this.state.article.image} />
        </div>
        <div className="articleInfo">
          <p>{renderHTML(this.state.article.article)}</p>
        </div>
        <div className='comments'>
          <b>COMMENTS</b>
          <br />
          <CreateComment article_id={this.state.article.article_id} />
        </div>
      </div>
    );
  }
}

export default ArticlePage;

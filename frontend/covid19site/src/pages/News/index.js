import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/pt-br";

import "./styles.scss";
import Header from "../../components/Header";

export default function News() {
  const news = useSelector((state) => state.news.listArticles);
  console.log(news);
  moment.locale("pt-BR");

  const listArticles = () => {
    return (
      <div className="content">
        <div className="articles">
          {news.map((e) => (
            <div className="card" key={e.url}>
              <a href={e.url} className="title">
                {e.title}
              </a>
              <img src={e.urlToImage} alt=""/>
              <a href={e.url} className="description">
                {e.description}
              </a>
              <h4>
                {e.source.name} - {moment(e.publishedAt).calendar()}
              </h4>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="articlesList">{listArticles()}</div>
    </>
  );
}

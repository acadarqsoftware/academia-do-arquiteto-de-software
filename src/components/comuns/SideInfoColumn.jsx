import React, { useEffect, useState } from 'react';
import './SideInfoColumn.css';

// Para adicionar mais notícias, insira novos objetos neste array:


function SideInfoColumn() {

  const [newsList, setNews] = useState([]);

  const baseUrl = import.meta.env.BASE_URL;

  useEffect(()=>{
    fetch(`${baseUrl}/assets/noticias/noticias.json`)
    .then((response) => response.json())
    .then((date) => {
      const newsOrder = [...date].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      setNews(newsOrder);
    })
    .catch((error) => console.error("Erro ao buscar eventos: ", error));
  }, []);


  return (
    <aside className="side-info-sideinfocolumn side-info-column-sideinfocolumn">
      <div className="info-section-sideinfocolumn my-3">
        <h3 className="section-title-sideinfocolumn">Novidades</h3>

        {newsList.map((news, index) => (
          <div key={index}>
            <a href={news.link} rel='noopener noreferrer' target="_blank" className='text-decoration-none text-dark'>
            <button

              className="news-item-sideinfocolumn"
              style={{
                border: 'none',
                background: 'none',
                padding: 0,
                width: '100%',
                textAlign: 'left',
              }}
            >
              <img src={news.image} alt={news.title} className="news-image-sideinfocolumn" />
              <div className="news-text-sideinfocolumn">
                <h4>{news.title}</h4>
                <p className="news-date-sideinfocolumn">{(news.date).split("-").reverse().join("-")}</p>
              </div>
            </button>
            </a>
            <hr />
          </div>
        ))}
      </div>

    </aside>
  );
}

export default SideInfoColumn;

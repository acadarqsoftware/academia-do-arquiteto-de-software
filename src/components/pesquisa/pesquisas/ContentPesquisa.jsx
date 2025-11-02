import artigoIcon from '../../../assets/icons/iconA.png';
import './ContentPesquisa.css';
import { useEffect, useState } from 'react';

function ContentArtigosPublicados() {

  const [congressos, setCongressos] = useState([]);
  const [periodicos, setPeriodicos] = useState([]);

  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    fetch(`${baseUrl}/pesquisa/pesquisas/congressos.json`)
    .then((response) => response.json())
    .then((data) => {
      const congressosOrdenados = [...data].sort((a, b) =>{
        return parseInt(b.data) - parseInt(a.data);
      });
      setCongressos(congressosOrdenados);
    })
    .catch((error) => console.error("Erro em buscar eventos: ", error));
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/pesquisa/pesquisas/periodicos.json`)
    .then((response) => response.json())
    .then((data) => {
      const periodicosOrdenados = [...data].sort((a, b) => {
        return new Date(b.data) - new Date(a.data);
      })
      setPeriodicos(periodicosOrdenados);
    })
    .catch((error) => console.error("Erro em buscar eventos: ", error));
  }, []);
  

  return (
    <section id="artigos" className="container-fluid px-5 my-5">
      <h2 className="fw-bold section-title text-center mb-4 title-artigopublicados">
        Artigos Publicados
      </h2>

      <h3 className="subsection-title mt-4 mb-3">Publicados em Periódicos</h3>
      <div className="row g-4">
        {periodicos.map((item, idx) => (
          <div key={`periodico-${idx}`} className="col-12">
            <a
              href={item.url}
              className="card shadow-sm border-0 card-hover-contentpesquisa text-decoration-none text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-body d-flex align-items-center flex-column flex-md-row icone-contentpesquisa">
                <img src={artigoIcon} alt="Ícone" className="me-4" />
                <div>
                  <h5 className="mb-1">{item.title}</h5>
                  <p className="mb-1 text-muted"><strong>Ano:</strong> {new Date(item.data).getFullYear()}</p>
                  <p className="mb-1 text-muted"><strong>Autores:</strong> {item.autores}</p>
                  <p className="mb-0 text-muted"><strong>Publicação:</strong> {item.publicacao}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <h3 className="subsection-title mt-5 mb-3">Publicados em Anais de Congressos</h3>
      <div className="row g-4">
        {congressos.map((item, idx) => (
          <div key={`congresso-${idx}`} className="col-12">
            <a
              href={item.url}
              className="card shadow-sm border-0 card-hover-contentpesquisa text-decoration-none text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-body d-flex align-items-center flex-column flex-md-row icone-contentpesquisa">
                <img src={artigoIcon} alt="Ícone" className="me-4" />
                <div>
                  <h5 className="mb-1">{item.title}</h5>
                  <p className="mb-1 text-muted"><strong>Ano:</strong> {item.data}</p>
                  <p className="mb-1 text-muted"><strong>Autores:</strong> {item.autores}</p>
                  <p className="mb-0 text-muted"><strong>Publicação:</strong> {item.publicacao}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContentArtigosPublicados;
// Importa os ícones usados para mestrado e doutorado
import orientacoesMestrado from '../../../assets/icons/iconM.png';
import orientacoesDoutorado from '../../../assets/icons/iconD.png';


// Importa o arquivo de estilos CSS específico deste componente
import './ContentOrientacoes.css';
import { useEffect, useState } from 'react';

function ContentOrientacoes() {

  const [doutorados, setDoutorados] = useState([]);
  const [mestrados, setMestrados] = useState([]);

  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    fetch(`${baseUrl}/pesquisa/orientacoes/doutorados.json`)
    .then((response) => response.json())
    .then((data) =>{
      const doutoradosOrdenados = [...data].sort((a, b) =>{
        return parseInt(b.data) - parseInt(a.data);
      });
      setDoutorados(doutoradosOrdenados);
    })
    .catch((error) => console.error('erro ao buscar eventos: ', error));

  }, []);

    useEffect(() => {
    fetch(`${baseUrl}/pesquisa/orientacoes/mestrados.json`)
    .then((response) => response.json())
    .then((data) =>{
      const mestradosOrdenados = [...data].sort((a, b) =>{
        return parseInt(b.data) - parseInt(a.data);
      });
      setMestrados(mestradosOrdenados);
    })
    .catch((error) => console.error('erro ao buscar eventos: ', error));

  }, []);



  return (
    <section id="orientacoes" className="container-fluid px-5 my-5">
      {/* Título principal da seção */}
      <h2 className="fw-bold section-title text-center mb-4 title-orientacaoandamento">
        Orientações em Andamento
      </h2>

      {/* Subtítulo da seção de mestrado */}
      <h3 className="subsection-title mt-4 mb-3 title-dissertacoesmestrado">
        Dissertações de Mestrado
      </h3>

      {/* Renderização dos cartões de Mestrado */}
      <div className="row g-4">
        {mestrados.map((item, idx) => (
          <div key={`mestrado-${idx}`} className="col-12">
            <a
              href={item.url}
              className="card shadow-sm border-0 card-hover-contentorientacoes text-decoration-none text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-body d-flex align-items-center d-flex flex-column flex-md-row icone-contentorientacoes">
                <img src={orientacoesMestrado} alt="Ícone de orientação" className="me-4" />
                <div>
                  <h5 className="mb-1 info-dissertacaoori">{item.title}</h5>
                  <p className="info-dissertacaoori mb-1 text-muted">
                    <strong>Ano:</strong> {item.data}
                  </p>
                  <p className="info-dissertacaoori mb-1 text-muted">
                    <strong>Autores:</strong> {item.autores}
                  </p>
                  <p className="info-dissertacaoori mb-0 text-muted">
                    <strong>Publicação:</strong> {item.publicacao}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Subtítulo da seção de doutorado */}
      <h3 className="subsection-title mt-5 mb-3 title-dissertacoesmestrado">Tese de Doutorado</h3>

      {/* Renderização dos cartões de Doutorado */}
      <div className="row g-4">
        {doutorados.map((item, idx) => (
          <div key={`doutorado-${idx}`} className="col-12">
            <a
              href={item.url}
              className="card shadow-sm border-0 card-hover-contentorientacoes text-decoration-none text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-body d-flex align-items-center d-flex flex-column flex-md-row icone-contentorientacoes">
                <img src={orientacoesDoutorado} alt="Ícone de orientação" className="me-4" />
                <div>
                  <h5 className="mb-1 info-dissertacaoori">{item.title}</h5>
                  <p className="info-dissertacaoori mb-1 text-muted">
                    <strong>Ano de início:</strong> {item.data}
                  </p>
                  <p className="info-dissertacaoori mb-1 text-muted">
                    <strong>Autores:</strong> {item.autores}
                  </p>
                  <p className="info-dissertacaoori mb-0 text-muted">
                    <strong>Sobre:</strong> {item.publicacao}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContentOrientacoes;

import { useEffect, useState } from 'react';
import dissertacoesIcon from '../../../assets/icons/iconM.png';
import './ContentDissertacoes.css';

function ContentDissertacoes() {

  const [dissertacoes, setDissertacoes] = useState([]);

  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    fetch(`${baseUrl}/pesquisa/dissertacoes/dissertacoes.json`)
      .then((response) => response.json())
      .then((data) => {
        const dissertacoesOrdenados = [...data].sort((a, b) => {
          return parseInt(b.data) - parseInt(a.data);
        });
        setDissertacoes(dissertacoesOrdenados);
      })
      .catch((error) => console.error('Erro ao  buscar eventos:', error));
  }, []);

  // Ordena por ano (do mais recente para o mais antigo)

  return (
    <section id="dissertacoes" className="container-fluid px-5 my-5">
      {/* Título geral da seção */}
      <h2 className="fw-bold section-title text-center mb-4 title-orientacoesconcluidas">
        Orientações Concluídas
      </h2>

      {/* Subtítulo específico da subseção */}
      <h3 className="subsection-title mt-4 mb-3 title-dissertacoesdemestrado">
        Dissertações de Mestrado
      </h3>

      <div className="row g-4">
        {/* Renderiza cada dissertação como um card */}
        {dissertacoes.map((item, index) => (
          <div key={index} className="col-12">
            <a
              href={item.url} // Link externo para o repositório
              className="card shadow-sm border-0 card-hover-contentdissertacoes text-decoration-none text-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-body d-flex align-items-center d-flex flex-column flex-md-row icone-contentdissertacoes">
                {/* Ícone representando a dissertação */}
                <img src={dissertacoesIcon} alt="Ícone do artigo" className="me-4" />
                <div>
                  {/* Título da dissertação */}
                  <h5 className="mb-1 info-contentdissertacoes">{item.title}</h5>

                  {/* Metadados da dissertação */}
                  <p className="mb-1 text-muted info-contentdissertacoes">
                    <strong>Data:</strong> {item.data}
                  </p>
                  <p className="mb-1 text-muted info-contentdissertacoes">
                    <strong>Autores:</strong> {item.autores}
                  </p>
                  <p className="mb-0 text-muted info-contentdissertacoes">
                    <strong>Nota:</strong> {item.nota}
                  </p>
                  <p className="mb-0 text-muted info-contentdissertacoes">
                    <strong>Escola:</strong> {item.escola}
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

export default ContentDissertacoes;

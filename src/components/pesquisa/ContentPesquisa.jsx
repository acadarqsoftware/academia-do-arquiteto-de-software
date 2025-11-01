import artigoIcon from '../../assets/icons/iconA.png';
import './ContentPesquisa.css';

function ContentArtigosPublicados() {
  // ------- Artigos publicados em periódicos -------
  const periodicos = [
    {
      title: 'Estudo comparativo da adaptação de software utilizando Chamada de Métodos Remotos e Serviços Web',
      data: '2011-01-02',
      autores: 'Affonso, Frank José; Rodrigues, Evandro Luis Linhari',
      publicacao: 'Revista de Sistemas de Informação da FSMA, v. 7, n. 2, p. 22–31',
      url: 'https://oaji.net/articles/2015/601-1433785163.pdf',
    },
    {
      title: 'ReflectTools: Uma ferramenta de apoio ao desenvolvimento de software reconfigurável',
      data: '2011-11-02',
      autores: 'Affonso, Frank José; Rodrigues, Evandro Luis Linhari',
      publicacao: 'Revista Brasileira de Computação Aplicada, v. 3, n. 2, p. 73–90',
      url: 'https://seer.upf.br/index.php/rbca/article/view/1804',
    },
    {
      title: 'Adaptive Software Development supported by an Automated Process: a Reference Model',
      data: '2013-01-02',
      autores: 'Affonso, Frank José; Vecchiato Saenz Carneiro, Maria Cecilia; Rodrigues, Evandro Luis Linhari; Nakagawa, Elisa Yumi',
      publicacao: 'Salesian Journal on Information Systems, v. 12, p. 8–20',
      url: 'https://oaji.net/articles/2015/601-1433776680.pdf',
    },
    {
      title: 'A Reference Model as Automated Process for Software Adaptation at Runtime',
      data: '2015-02-12',
      autores: 'Affonso, F. J.; Carneiro, M. C. V. S.; Rodrigues, E. L. L.; Nakagawa, E. Y.',
      publicacao: 'IEEE Latin America Transactions, v. 13, n. 1, p. 214–221',
      url: 'https://doi.org/10.1109/TLA.2015.7040650',
    },
    {
      title: 'Self-adaptive software: development approach and automatic process for adaptation at runtime',
      data: '2015-02-24',
      autores: 'Affonso, Frank José; Nakagawa, Elisa Yumi',
      publicacao: 'Revista Brasileira de Computação Aplicada, v. 7, n. 1, p. 68–84',
      url: 'http://dx.doi.org/10.5335/rbca.2015.4224',
    },
    {
      title: 'SASeS: A Framework for the Development of Service-based Self-adaptive Applications',
      data: '2016-12-16',
      autores: 'Costa Junior, E.; Maia, P. H. M.; Affonso, F. J.',
      publicacao: 'IEEE Latin America Transactions, v. 14, n. 9, p. 4187–4195',
      url: 'https://doi.org/10.1109/TLA.2016.7785951',
    },
    {
      title: 'Developing Self-Adaptive Service-Oriented Mobile Applications: A Framework Based on Dynamic Deployment',
      data: '2018-12-01',
      autores: 'Passini, William Filisbino; Affonso, Frank José',
      publicacao: 'International Journal of Software Engineering and Knowledge Engineering, v. 28, n. 11n12, p. 1537–1558',
      url: 'https://doi.org/10.1142/S0218194018400168',
    },
    {
      title: 'A Reference Architecture to support the development of mobile applications based on self-adaptive services',
      data: '2019-01-16',
      autores: 'Affonso, Frank José; Passini, William Filisbino; Nakagawa, Elisa Yumi',
      publicacao: 'Pervasive and Mobile Computing, v. 53, p. 33–58',
      url: 'https://doi.org/10.1016/j.pmcj.2019.01.001',
    },
    {
      title: 'Design of frameworks for self-adaptive service-oriented applications: A systematic analysis',
      data: '2021-06-10',
      autores: 'Passini, William Filisbino; Lana, Cristiane Aparecida; Pfeifer, Vinicius; Affonso, Frank José',
      publicacao: 'Software: Practice and Experience, v. 52, n. 1, p. 5–38',
      url: 'https://doi.org/10.1002/spe.3013',
    },
    {
      title: 'A multi-agent approach to monitor and manage container-based distributed systems',
      data: '2021-12-23',
      autores: 'Pfeifer, Vinicius; Passini, William Filisbino; Dorante, William Fernandes; Guilherme, Ivan Rizzo; Affonso, Frank José',
      publicacao: 'IEEE Latin America Transactions, v. 20, n. 1, p. 82–91',
      url: 'https://doi.org/10.1109/TLA.2022.9662176',
    },
    {
      title: 'RA4Self-CPS: A Reference Architecture for Self-adaptive Cyber-Physical Systems',
      data: '2024-01-23',
      autores: 'Camargo, Marcos Paulo de Oliveira; Pereira, Gabriel dos Santos; Almeida, Daniel; Bento, Leandro Apolinário; Dorante, William Fernande; Affonso, Frank José',
      publicacao: 'IEEE Latin America Transactions, v. 22, n. 2, p. 113–125',
      url: 'https://doi.org/10.1109/TLA.2024.10412036',
    },
    {
      title: 'A Reference Architecture Based on Reflection for Self-Adaptive Software: A Second Release',
      data: '2024-07-15',
      autores: 'Affonso, Frank José; Nagassaki Campos, Gabriel; Guiguer Menaldo, Guilherme',
      publicacao: 'IEEE Access, v. 12, p. 97476–97499',
      url: 'https://doi.org/10.1109/ACCESS.2024.3428368',
    },
    {
      title: 'A Systematic Mapping Study on the Modernization of Legacy Systems to Microservice Architecture',
      data: '2025-06-11',
      autores: 'Fávero, Lucas Fernando; Rodrigues de Almeida, Nathalia; Affonso, Frank José',
      publicacao: 'Applied System Innovation 8, no. 4: 86',
      url: 'https://doi.org/10.3390/asi8040086',
    },
  ];

  // ------- Artigos publicados em congressos -------
  const congressos = [
    {
      title: 'DynaSchema: A Library to Support the Relational Data Schema Evolution for the Self-Adaptive Software Domain',
      data: '2025',
      autores: 'Campos, Gabriel; Affonso, Frank',
      publicacao: 'Proceedings of the 27th International Conference on Enterprise Information Systems, 2025. p. 722',
      url: 'http://dx.doi.org/10.5220/0013349000003929',
    },
    {
      title: 'Micro4Delphi: A Process for the Modernization of Legacy Systems in Delphi to Microservice Architecture',
      data: '2025',
      autores: 'Fávero, Lucas; Mário, Gabriel; Affonso, Frank',
      publicacao: 'Proceedings of the 27th International Conference on Enterprise Information Systems, 2025. p. 328',
      url: 'http://dx.doi.org/10.5220/0013434400003929',
    },
    {
      // Não funciona
      title: 'A Real-time Data Synchronization Approach for High-availability Micro Applications',
      data: '2025',
      autores: 'Moraes, F. R.; Almeida, D.; Affonso, F. J.',
      publicacao: 'Anais do XXXIX Simpósio Brasileiro de Engenharia de Software, 2025. v. 1',
      url: 'http://dx.doi.org/10.5753/sbes.2025.9904',
    },
    {
      title: 'From domain-driven design to microservice architecture: a systematic mapping focused on modernization of legacy systems',
      data: '2025',
      autores: 'Almeida, N. R.; Favaro, L. F.; Affonso, F. J.',
      publicacio: 'Proceedings of 20th Iberian Conference on Information Systems and Technologies (CISTI 2025), 2025',
      url: null,
    },
    {
      title: 'Modernization of Legacy Systems to Microservice Architecture: A Tertiary Study',
      data: '2024',
      autores: 'Almeida, Nathalia; Campos, Gabriel; Moraes, Fernando; Affonso, Frank',
      publicacao: 'Proceedings of the 26th International Conference on Enterprise Information Systems, 2024. v. 1. p. 581-12',
      url: 'http://dx.doi.org/10.5220/0012633300003690',
    },
    {
      title: 'Micro Frontend-Based Development: Concepts, Motivations, Implementation Principles, and an Experience Report',
      data: '2024',
      autores: 'Moraes, Fernando; Campos, Gabriel; Almeida, Nathalia; Affonso, Frank',
      publicacao: 'Proceedings of the 26th International Conference on Enterprise Information Systems, 2024. v. 1. p. 175-10',
      url: 'http://dx.doi.org/10.5220/0012627300003690',
    },
    {
      // Não funciona
      title: 'A New Integration Approach to support the Development of Build-time Micro Frontend Architecture Applications',
      data: '2024',
      autores: 'Moraes, Fernando Rodrigues de; Affonso, Frank José',
      publicacao: 'Anais do XXXVIII Simpósio Brasileiro de Engenharia de Software (SBES 2024), 2024. p. 637-643',
      url: 'http://dx.doi.org/10.5753/sbes.2024.3585',
    },
    {
      title: 'A Systematic Mapping on the Use of Data Mining for the Face-to-Face School Dropout Problem',
      data: '2021',
      autores: 'Rondado de Sousa, Leandro; Oliveira de Carvalho, Veronica; Penteado, Bruno; Affonso, Frank',
      publicacao: 'Proceedings of the 13th International Conference on Computer Supported Education, 2021. v. 1. p. 36-47',
      url: 'http://dx.doi.org/10.5220/0010476300360047',
    },
    {
      title: 'A Self-protecting Approach for Service-oriented Mobile Applications',
      data: '2021',
      autores: 'Martins, R. R.; Camargo, M. P. O.; Passini, W. F.; Campos, G. N.; Affonso, F. J.',
      publicacao: 'Proceedings of the 23rd International Conference on Enterprise Information Systems - Volume 1: ICEIS, 2021. p. 313-320',
      url: 'http://dx.doi.org/10.5220/0010448603130320',
    },
    {
      title: 'A Framework to Support the Development of Self-adaptive Service-oriented Mobile Applications',
      data: '2018',
      autores: 'Passini, William; Affonso, Frank',
      publicacao: 'The 30th International Conference on Software Engineering and Knowledge Engineering, 2018. p. 286-291',
      url: 'http://dx.doi.org/10.18293/seke2018-163',
    },
    // outros 10
    {
      title: 'Infrastructure Based on Template Engines for Automatic Generation of Source Code for Self-adaptive Software Domain',
      data: '2017',
      autores: 'Benato, G. S.; Affonso, F. J.; Nakagawa, E. Y.',
      publicacao: 'The 29th International Conference on Software Engineering & Knowledge Engineering, 2017. p. 30-35',
      url: 'http://dx.doi.org/10.18293/SEKE2017-147',
    },
    {
      title: 'Software architecture and reference architecture of software-intensive systems and systems-of-systems',
      data: '2017',
      autores: 'Nakagawa, Elisa Yumi; Dias, Diógenes; Horita, Flávio; Affonso, Frank José; Abdalla, Gabriel; Vicente, Isabella; Duarte, Leonardo; Felizardo, Katia; Garcés, Lina; Oliveira, Lucas; Gonçalves, Marcelo; Allian, Ana; Morais, Maria Gabriela; Guessi, Milena; Silva, Nilson; Bianchi, Thiago; Volpato, Tiago; Neto, Valdemar V. Graciano; Zani, Vinicius; Manzano, Wallace; et al.',
      publicacao: 'Proceedings of the 11th European Conference on Software Architecture Companion Proceedings - ECSA 2017, 2017. p. 4-11',
      url: 'http://dx.doi.org/10.1145/3129790.3129822',
    },
    {
      title: 'DmS-Modeler: A Tool for Modeling Decision-making Systems for Self-adaptive Software Domain',
      data: '2016',
      autores: 'Affonso, F. J.; Leite, G.; Nakagawa, E. Y.',
      publicacao: 'The 28th International Conference on Software Engineering & Knowledge Engineering (SEKE 2016), 2016. p. 617-622',
      url: null,
    },
    {
      title: 'Integrando Sistemas de Informação via Serviço Web: Um Estudo de Caso na Defesa Civil de Rio Claro',
      data: '2015',
      autores: 'Affonso, F. J.; Carneiro, M. C. V. S.; Carneiro, J. G. V.; Kuroishi, D. A.; Polezi, L. A.; Benato, G. S.; Fernando, F. A.; Carvalho, V. O.; Govone, J. S.; Nourani, F.; Falcao, J. G.; Cattani, J. G. Z.',
      publicacao: '8º Congresso de Extensão Universitária da UNESP, 2015. v. 8',
      url: null,
    },
    {
      title: 'Informatizando a Gestão dos Microempreendedores Individuais de Rio Claro',
      data: '2015',
      autores: 'Carvalho, V. O.; Affonso, F. J.; Oliveira, R. S.; Pacheco, M. V.; Nascimento Junior, O. S.; Nourani, F.; Padua, R.; Moraes, N. C. D.',
      publicacao: '8º Congresso de Extensão Universitária da UNESP, 2015. v. 8',
      url: null,
    },
    {
      title: 'A Framework Based on Learning Techniques for Decision-making in Self-adaptive Software',
      data: '2015',
      autores: 'Affonso, F. J.; Leite, G.; Oliveira, R. A. P.; Nakagawa, E. Y.',
      publicacao: 'The 27th International Conference on Software Engineering & Knowledge Engineering (SEKE 2015), 2015. p. 24-29',
      url: null,
    },
    {
      title: 'Reference Architectures for Self-Managed Software Systems: A Systematic Literature Review',
      data: '2014',
      autores: 'Affonso, Frank J.; Scannavino, Katia R. F.; Oliveira, Lucas B. R.; Nakagawa, Elisa Y.',
      publicacao: '2014 Eighth Brazilian Symposium on Software Components, Architectures and Reuse (SBCARS), 2014. p. 21-30',
      url: 'http://dx.doi.org/10.1109/sbcars.2014.18',
    },
    {
      title: 'Adaptação de Artefatos de Software em Tempo de Execução utilizando Aspectos e Reflexão',
      data: '2014',
      autores: 'Souza, S. D. M.; Affonso, F. J.; Nakagawa, E. Y.',
      publicacao: 'V Workshop on Autonomous Software Systems (AutoSoft 2014), 2014',
      url: null,
    },
    {
      title: 'A Reference Architecture Based on Reflection for Self-Adaptive Software',
      data: '2013',
      autores: 'Affonso, Frank Jose; Nakagawa, Elisa Yumi',
      publicacao: '2013 VII Brazilian Symposium on Software Components, Architectures and Reuse (SBCARS), 2013. p. 129-138',
      url: 'http://dx.doi.org/10.1109/sbcars.2013.24',
    },
    {
      title: 'A Proposal of Reference Architecture for the Reconfigurable Software Development',
      data: '2012',
      autores: 'Affonso, F. J.; Rodrigues, E. L. L.',
      publicacao: 'The 24th International Conference on Software Engineering and Knowledge Engineering, 2012',
      url: null,
    },
  ];

  const ordenarPorData = (items) => [...items].sort((a, b) => new Date(b.data) - new Date(a.data));
  const extrairAno = (data) => data.split('/')[0];

  const periodicosOrdenados = ordenarPorData(periodicos);
  const congressosOrdenados = ordenarPorData(congressos);

  return (
    <section id="artigos" className="container-fluid px-5 my-5">
      <h2 className="fw-bold section-title text-center mb-4 title-artigopublicados">
        Artigos Publicados
      </h2>

      <h3 className="subsection-title mt-4 mb-3">Publicados em Periódicos</h3>
      <div className="row g-4">
        {periodicosOrdenados.map((item, idx) => (
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
        {congressosOrdenados.map((item, idx) => (
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
                  <p className="mb-1 text-muted"><strong>Ano:</strong> {extrairAno(item.data)}</p>
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
import BannerPesquisa from '../components/pesquisa/banner/BannerPesquisa';
import SideInfoColumn from '../components/comuns/SideInfoColumn';
import ContentPesquisa from '../components/pesquisa/pesquisas/ContentPesquisa';
import ContentOrientacoes from '../components/pesquisa/orientacoes/ContentOrientacoes';
import ContentDissertacoes from '../components/pesquisa/dissertacoes/ContentDissertacoes';
import MenuPesquisa from '../components/pesquisa/menu/MenuPesquisa';

function Pesquisa() {
  return (
    <main className="Pesquisa">
      <figure className="mb-0">
        <BannerPesquisa />
      </figure>

      <div className="row gx-4">
        {/* Coluna principal */}
        <div className="col-lg-9 mb-4">
          <MenuPesquisa />
          <ContentPesquisa />
          <ContentOrientacoes />
          <ContentDissertacoes />
        </div>

        {/* Coluna lateral */}
        <div className="col-lg-3">
          <SideInfoColumn />
        </div>
      </div>
    </main>
  );
}

export default Pesquisa;

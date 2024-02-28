import Filtrocard from '../../components/Filtrocard'

import * as S from './styles'

const Barralateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <Filtrocard legenda="pendente" contador={1} />
        <Filtrocard legenda="concluidas" contador={2} />
        <Filtrocard legenda="urgentes" contador={3} />
        <Filtrocard legenda="importantes" contador={4} />
        <Filtrocard legenda="normal" contador={6} />
        <Filtrocard legenda="todas" contador={5} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default Barralateral

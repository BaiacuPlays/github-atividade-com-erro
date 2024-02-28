import { useState } from 'react'
import * as S from './styles'

import * as enums from '../../UTILS/enums/tarefa'

type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

const Tarefa = ({ descricao, prioridade, status, titulo }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao} />
      <S.Barraacao>
        {estaEditando ? (
          <>
            <S.botaosalvar>Salvar</S.botaosalvar>
            <S.botaocancelarremover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.botaocancelarremover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.botaocancelarremover>Remover</S.botaocancelarremover>
          </>
        )}
      </S.Barraacao>
    </S.Card>
  )
}

export default Tarefa

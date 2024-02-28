import { createSlice, PayloadAction} from "@reduxjs/toolkit"
import Tarefa from "../../models/Tarefa"
import * as enums from '../../UTILS/enums/tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa('Estudar java',
    enums.Prioridade.IMPORTANTE,
    enums.Status.PENDENTE,
    '',
    1
    ),
    new Tarefa('Estudar type',
    enums.Prioridade.URGENTE,
    enums.Status.CONCLUIDA,
    'aula 2',
    2
    ),
    new Tarefa('Estudar react',
    enums.Prioridade.URGENTE,
    enums.Status.PENDENTE,
    'praticar useffect',
    3
    ),
  ],
  reducers: {
    remover: (state, action: PayloadAction<Number>) = {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const {remover } = tarefasSlice.actions

export default tarefasSlice.reducer

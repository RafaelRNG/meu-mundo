export type PlanoAlimentar = {
  codigo: number
  nome: string
  descricao: string
  urlImagem?: string

  refeicoes: RefeicaoDetalhe[]
}

export type RefeicaoDetalhe = {
  codigo?: number
  nome?: string
  descricao?: string
  horario?: string
  minimoCarbo?: number
  minimoProteina?: number
  minimoGordura?: number
  detalhes?: DetalhesDoAlimento[]
}

export type DetalhesDoAlimento = {
  codigo: number
  carbo: number
  proteina: number
  gordura: number
  pesoBruto: number
  alimento: AlimentoDetalhe

}

export type AlimentoDetalhe = {
  codigo: number
  nome: string
}

// Array de alunos, cada um com nome e nota
const alunos = [
  { nome: "João", nota: 7 },
  { nome: "Maria", nota: 5 },
  { nome: "Pedro", nota: 8.5 },
  { nome: "Ana", nota: 4 },
  { nome: "Lucas", nota: 6 },
];

// Função que retorna alunos aprovados (nota >= 6)
const alunosAprovados = (listaAlunos) => {
  return listaAlunos.filter(aluno => aluno.nota >= 6);
}

// Usando a função para obter só os aprovados
const aprovados = alunosAprovados(alunos);

console.log(aprovados);

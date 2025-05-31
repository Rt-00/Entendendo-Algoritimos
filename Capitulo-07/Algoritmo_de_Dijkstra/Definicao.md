# 📖 Algoritmo de Dijkstra

## ✅ Definição

O **Algoritmo de Dijkstra** é uma técnica de busca utilizada para encontrar o **caminho mais curto** entre dois nós em um **grafo ponderado** com pesos **não negativos**. Ele calcula o custo mínimo a partir de um nó inicial até todos os outros nós do grafo, atualizando iterativamente os menores custos conhecidos.

## ✅ Quando usar?
- Quando é necessário encontrar o **caminho de menor custo** em grafos com **pesos não negativos**.
- Ideal para aplicações como **sistemas de navegação**, **redes de computadores**, e **planejamento de rotas**.
- Quando se quer o **caminho mais barato**, e não necessariamente o com menos arestas.

## ✅ Como funciona?
- Mantém uma **tabela de custos**: inicialmente, o custo para o nó inicial é **0**, e para os demais, **Infinito**.
- Utiliza uma **tabela de pais** para reconstruir o caminho mais curto.
- Em cada iteração:
  1. Seleciona o nó **não processado** com o menor custo atual.
  2. Atualiza os custos de seus vizinhos, se forem menores que os atualmente conhecidos.
  3. Marca o nó como **processado**.
- O processo continua até todos os nós serem processados.

## ✅ Estruturas fundamentais
- **Tabela de custos** → mantém o menor custo conhecido para cada nó.
- **Tabela de pais** → ajuda a reconstruir o caminho mais curto.
- **Conjunto de processados** → evita visitar o mesmo nó várias vezes.

## ✅ Complexidade

|Aspecto|Complexidade|
|-------|-----------------------------------------------------------------|
|Tempo  |O(V²) com lista simples / O((V + E) log V) com fila de prioridade|
|Espaço |O(V), para armazenar tabelas de custos e pais                    |

## ✅ Vantagens
- ✔️ Garante encontrar o **caminho mais curto** em grafos ponderados sem pesos negativos.
- ✔️ Pode ser adaptado com estruturas eficientes, como **fila de prioridade**.
- ✔️ Muito utilizado em aplicações práticas como **GPS e roteamento de redes**.

## ❌ Desvantagens
- ❌ Não funciona corretamente com **pesos negativos** — para isso, use o algoritmo de **Bellman-Ford**.
- ❌ Pode ter um desempenho ruim em grafos muito grandes, se não usar estruturas eficientes.
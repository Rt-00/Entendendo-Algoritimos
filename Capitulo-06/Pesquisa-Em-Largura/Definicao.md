# 📖 Pesquisa em Largura (Breadth-First Search - BFS)

## ✅ Definição

A **Pesquisa em Largura** (ou **BFS** - *Breadth-First Search*) é uma técnica de busca que explora um grafo ou uma árvore camada por camada. Ela começa pela raiz (ou qualquer outro nó escolhido) e explora todos os vizinhos desse nó antes de passar para os vizinhos dos vizinhos, seguindo um padrão de expansão em largura.

---

## ✅ Quando usar?

- Quando deseja encontrar o **menor caminho** (menor número de arestas) em grafos **não ponderados**.
- Ideal para verificar a **existência de caminhos** entre dois nós.
- Para **percorrer completamente** todas as conexões em grafos ou árvores.

---

## ✅ Como funciona?

- Utiliza uma **fila (queue)** para controlar a ordem de visitação.
- Mantém um conjunto ou lista de nós já **visitados** para evitar loops ou revisitas.
- Remove um nó da fila, verifica se é o objetivo e, se não for, adiciona seus vizinhos à fila.

---

## ✅ Estruturas fundamentais

- **Fila (Queue)** → mantém a ordem de visita.
- **Lista de verificados** → evita ciclos.

---

## ✅ Complexidade

| Aspecto | Complexidade |
|---------|--------------|
| Tempo   | O(V + E), onde V = vértices e E = arestas |
| Espaço  | O(V), devido ao armazenamento da fila e do conjunto de visitados |

---
## ✅ Vantagens
- ✔️ Garante encontrar o caminho mais curto em grafos não ponderados.
- ✔️ Implementação simples e direta.
- ✔️ Pode ser aplicada em qualquer tipo de grafo (direcionado ou não).

## ❌ Desvantagens
- ❌ Consome mais memória do que buscas em profundidade (DFS), principalmente em grafos amplos.
- ❌ Não funciona adequadamente para encontrar caminhos mais curtos em grafos com pesos, onde algoritmos como Dijkstra são mais indicados.
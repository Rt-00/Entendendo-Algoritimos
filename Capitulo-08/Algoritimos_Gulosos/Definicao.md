# 📖 Algoritmos Gulosos (Greedy Algorithms)

## ✅ Definição

Os **Algoritmos Gulosos** (ou *Greedy Algorithms*) são estratégias de resolução de problemas que, a cada passo, escolhem a **opção local ótima**, na esperança de que essa escolha leve à **solução global ótima**.

Essa técnica não volta atrás ou reconsidera decisões anteriores. É rápida e simples, mas **nem sempre** garante a melhor solução em todos os problemas.

---

## ✅ Quando usar?

* Quando o problema possui a **propriedade de subestrutura ótima**, ou seja, a solução ótima do problema pode ser construída a partir de soluções ótimas de seus subproblemas.
* Quando há a **propriedade de escolha gulosa**: a escolha local ótima leva à solução global ótima.
* Problemas clássicos que podem ser resolvidos com algoritmos gulosos:

  * Problema da **mochila fracionária**.
  * Problema do **caminho de custo mínimo**.
  * Problema de **atividades** (seleção de atividades).
  * Algoritmo de **Kruskal** e **Prim** para árvores geradoras mínimas.
  * Algoritmo de **Huffman** para compressão de dados.

---

## ✅ Como funciona?

1. Analisar o problema e identificar se é possível aplicar uma estratégia gulosa.
2. No passo de decisão, escolher a **melhor opção local** disponível.
3. Repetir o processo até atingir a solução completa.
4. Não há retrocesso ou verificação de alternativas descartadas.

---

## ✅ Estruturas fundamentais

* Listas ou filas de elementos ordenados conforme algum critério de prioridade.
* Estruturas que permitam encontrar a próxima melhor escolha com eficiência (e.g., heap, sorted list).

---

## ✅ Complexidade

A complexidade depende da implementação específica. Em geral:

| Aspecto | Complexidade                                                      |
| ------- | ----------------------------------------------------------------- |
| Tempo   | O(n log n) ou O(n²), dependendo do método de ordenação ou seleção |
| Espaço  | O(1) a O(n), dependendo do armazenamento intermediário            |

---

## ✅ Vantagens

* ✔️ **Simples e rápida** de implementar.
* ✔️ Muito eficiente em diversos problemas.
* ✔️ Requer menos memória do que abordagens baseadas em programação dinâmica ou busca exaustiva.

---

## ❌ Desvantagens

* ❌ **Nem sempre** encontra a solução ótima.
* ❌ Pode falhar em problemas que requerem considerar múltiplas combinações (e.g., mochila 0/1).
* ❌ Exige uma análise prévia para verificar se a abordagem gulosa é adequada.

---

## ✅ Exemplo Clássico: Problema do Troco

Dado um conjunto de moedas e um valor, o objetivo é encontrar o número mínimo de moedas que somem ao valor.

### ✅ Passos:

1. Ordenar as moedas do maior para o menor valor.
2. Selecionar a maior moeda que caiba no valor restante.
3. Repetir até atingir o valor desejado.

---

## ✅ Quando o algoritmo guloso **não funciona**?

Em alguns sistemas de moedas ou problemas, a escolha gulosa pode não fornecer a solução ótima. Exemplo clássico: se houver moedas de 1, 3 e 4, e quisermos fazer 6, a escolha gulosa pode pegar \[4, 1, 1], mas a solução ótima seria \[3, 3].

---

## ✅ Resumo

* Técnica que escolhe a melhor opção **local** em cada passo.
* **Nem sempre** garante a solução ótima global.
* Simples, rápida e eficiente quando bem aplicada.
Perfeito! Aqui vai o **resumo do Capítulo 9 — Programação Dinâmica**, estruturado em Markdown, como você vem fazendo nos capítulos anteriores.

---

# 📖 Programação Dinâmica (Dynamic Programming - DP)

## ✅ Definição

**Programação Dinâmica** é uma técnica de otimização que resolve problemas complexos ao dividi-los em **subproblemas menores** e armazenando os resultados dessas subsoluções para evitar cálculos repetidos.

Ela é especialmente útil para problemas que possuem:

* **Subestrutura ótima**: uma solução ótima pode ser construída a partir das soluções ótimas de seus subproblemas.
* **Subproblemas sobrepostos**: os mesmos subproblemas ocorrem repetidamente.

---

## ✅ Quando usar?

* Problemas de **otimização**, onde se busca o valor máximo ou mínimo.
* Problemas com **subproblemas sobrepostos** e **subestrutura ótima**.
* Exemplos clássicos: cálculo de Fibonacci, problema da mochila, sequência comum mais longa, corte de hastes.

---

## ✅ Como funciona?

1. Identifique a **estrutura recursiva** do problema.
2. Armazene os resultados intermediários, utilizando:

   * **Memoização**: abordagem top-down com cache.
   * **Tabulação**: abordagem bottom-up, utilizando uma tabela.
3. Utilize os resultados armazenados para construir a solução final.

---

## ✅ Estruturas fundamentais

* **Array ou matriz**: para armazenar subsoluções.
* **Função recursiva ou loop**: para resolver os subproblemas.

---

## ✅ Complexidade

| Aspecto | Complexidade                                              |
| ------- | --------------------------------------------------------- |
| Tempo   | Reduzida de exponencial para polinomial (em muitos casos) |
| Espaço  | O(n) a O(n²), dependendo do número de subproblemas        |

---

## ✅ Vantagens

* ✔️ Evita cálculos repetidos.
* ✔️ Soluciona problemas que seriam intratáveis com força bruta.
* ✔️ Técnica base para resolver muitos problemas clássicos de algoritmos.

---

## ❌ Desvantagens

* ❌ Pode consumir muita memória, dependendo do problema.
* ❌ Nem todo problema se adapta bem a essa técnica.

---

## ✅ Quando NÃO usar?

* Problemas sem subproblemas sobrepostos.
* Quando a solução direta ou recursiva for mais eficiente em termos de espaço.

---

## ✅ Exemplos clássicos de problemas que usam Programação Dinâmica

* Fibonacci.
* Problema da Mochila (Knapsack Problem).
* Sequência Comum Mais Longa (LCS).
* Corte de Hastes (Rod Cutting).
* Subconjunto com Soma Alvo (Subset Sum).
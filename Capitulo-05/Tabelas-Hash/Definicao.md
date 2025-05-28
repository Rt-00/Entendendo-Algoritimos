# 📦 Tabelas Hash (Hash Tables)

## ✅ O que são Tabelas Hash?

Tabelas Hash, também conhecidas como **Mapas de Dispersão** ou **Dicionários**, são **estruturas de dados** que armazenam pares **chave-valor**. Elas utilizam uma **função hash** para transformar a chave em um **índice**, onde o valor correspondente será armazenado.

A principal vantagem das tabelas hash é que elas oferecem um tempo de acesso **muito rápido** (em média **O(1)**) para inserção, remoção e busca.

---

## ✅ Principais Características

- 📌 Armazenam **pares chave-valor**.
- 📌 Utilizam uma **função hash** para determinar onde armazenar ou buscar o valor.
- 📌 **Acesso rápido** aos elementos.
- 📌 Possuem problemas com **colisões**, que devem ser tratados com técnicas como:
  - **Encadeamento** (listas ligadas em cada posição).
  - **Endereçamento aberto** (procurar a próxima posição livre).

---

## ✅ Fator de Carga (Load Factor)

O **fator de carga** de uma tabela hash é uma medida que representa a relação entre o número de elementos armazenados e o tamanho da tabela.

$\text{Fator de carga} = \frac{\text{número de elementos}}{\text{tamanho da tabela}}$

### Por que é importante?

- ✅ Um fator de carga **muito alto** aumenta a chance de **colisões**, degradando a performance para **O(n)**.
- ✅ Um fator de carga **muito baixo** significa desperdício de espaço de memória.
- ✅ A maioria das implementações ajusta o tamanho da tabela automaticamente quando o fator de carga ultrapassa um certo **limite** (~0.7), realizando uma **reestruturação** ou **rehashing**.

Exemplo: o **Java HashMap** por padrão aumenta a capacidade quando o fator de carga atinge **0.75**.

---

## ✅ Complexidade

| Operação | Complexidade Média |
|----------|-------------------|
| Inserção | O(1)              |
| Remoção  | O(1)              |
| Busca    | O(1)              |

> **Obs.:** No pior caso, devido a colisões excessivas, a complexidade pode chegar a **O(n)**.

---

## ✅ Aplicações Práticas

- ✅ Implementação de **dicionários** em linguagens como Python (`dict`), Java (`HashMap`), C++ (`unordered_map`).
- ✅ Verificação rápida de **existência** de elementos.
- ✅ Estruturas importantes para:
  - **Caches**.
  - **Índices de bancos de dados**.
  - **Compiladores** (tabelas de símbolos).
  - **Implementação de sets** (conjuntos).

---

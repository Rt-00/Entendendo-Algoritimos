# 📖 K-Nearest Neighbors (K-NN) - K-Visinhos Mais Próximos

## ✅ Definição

O **K-Nearest Neighbors (K-NN)** é um algoritmo de classificação e regressão baseado na similaridade entre os dados. Ao receber uma nova amostra, o K-NN procura os **K pontos de dados mais próximos** (vizinhos) no conjunto de treinamento e, com base nesses, **prediz a classe** ou valor da nova amostra.

---

## ✅ Quando usar?

* Quando é necessário fazer classificações ou previsões **não-paramétricas**, ou seja, sem assumir uma distribuição prévia.
* Ideal para problemas onde a **proximidade ou similaridade** entre instâncias é relevante.
* Funciona bem para bases de dados **pequenas ou moderadas**.

---

## ✅ Como funciona?

1. **Escolher o valor de K**: o número de vizinhos a serem considerados.
2. **Calcular a distância** entre a amostra de teste e todas as amostras do conjunto de treinamento.
   Distâncias comuns:

   * Euclidiana
   * Manhattan
   * Minkowski
3. **Selecionar os K vizinhos** com menor distância.
4. **Classificação**: a classe mais frequente entre os vizinhos.
5. **Regressão**: média ou ponderação dos valores dos vizinhos.

---

## ✅ Estruturas fundamentais

* **Distância**: Função que calcula a diferença ou semelhança.
* **Lista de vizinhos**: estrutura para armazenar os K vizinhos mais próximos.

---

## ✅ Complexidade

| Aspecto       | Complexidade                                                  |
| ------------- | ------------------------------------------------------------- |
| Tempo (busca) | O(n \* d), onde n = número de pontos, d = número de dimensões |
| Espaço        | O(n \* d)                                                     |

---

## ✅ Vantagens

* ✔️ Simples de implementar.
* ✔️ Não precisa de treinamento explícito.
* ✔️ Funciona bem para classes bem separadas.

---

## ❌ Desvantagens

* ❌ Custo computacional alto com grandes volumes de dados.
* ❌ Sensível à escolha de K.
* ❌ Pode ser afetado por dados irrelevantes ou ruído.

---

## ✅ Aplicações práticas

* Sistemas de recomendação.
* Diagnósticos médicos.
* Reconhecimento de padrões.
* Detecção de fraudes.

---

## ✅ Escolha do valor de K

* **K pequeno** → mais sensível ao ruído.
* **K grande** → mais robusto, mas pode incluir classes irrelevantes.

---

## ✅ Dicas

* Normalizar os dados antes de usar K-NN.
* Testar diferentes métricas de distância.
* Usar técnicas de otimização como KD-Tree para reduzir complexidade.
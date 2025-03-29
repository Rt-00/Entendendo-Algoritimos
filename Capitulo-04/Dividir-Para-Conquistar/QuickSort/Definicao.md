# ⚡ Quicksort (Ordenação Rápida)  

## 📖 O que é?  
O **Quicksort** é um algoritmo de ordenação eficiente que utiliza a técnica de **Dividir para Conquistar**. Ele escolhe um elemento como **pivô**, particiona a lista em dois subarrays (menores e maiores que o pivô) e ordena cada parte recursivamente.  

---

## 🔍 **Como funciona?**  
O **Quicksort** segue três etapas principais:  

1. **Escolher um pivô**: Pode ser qualquer elemento da lista (geralmente o primeiro, o último, um aleatório ou a mediana).  
2. **Particionar**: Reorganiza os elementos da lista de modo que os menores que o pivô fiquem à esquerda e os maiores, à direita.  
3. **Recursão**: Aplica o mesmo processo recursivamente nas sublistas da esquerda e da direita.  

---

## ⏳ **Complexidade de Tempo**  

| Caso            | Complexidade |
|-----------------|--------------|
| **Melhor caso** | O(n log n)   |
| **Caso médio**  | O(n log n)   |
| **Pior caso**   | O(n²)        |

O pior caso ocorre quando o pivô escolhido é sempre o maior ou menor elemento, resultando em partições desbalanceadas.  

---
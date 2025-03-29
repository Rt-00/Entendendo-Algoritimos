# 📌 Dividir para Conquistar (Divide and Conquer) ⚔️

## 📖 O que é?

A técnica **Dividir para Conquistar** (**Divide and Conquer**) é um paradigma de design de algoritmos que resolve problemas complexos ao dividi-los em subproblemas menores, resolvendo-os de forma independente e combinando suas soluções para obter o resultado final.

---

## 🔍 **Como funciona?**

A abordagem segue três passos principais:

1. **Dividir** 🪓: O problema principal é **quebrado** em subproblemas menores e mais simples.
2. **Conquistar** 🏆: Cada subproblema é **resolvido recursivamente** (ou iterativamente, dependendo da implementação).
3. **Combinar** 🔗: As soluções dos subproblemas são **combinadas** para resolver o problema original.

---

## ⏳ **Complexidade de Tempo**

A eficiência de um algoritmo **Dividir para Conquistar** depende da forma como ele divide os problemas e combina as soluções.  
Em muitos casos, a complexidade segue a **Recorrência de Mestre (Master Theorem)** e pode ser **O(n log n)** ou melhor.

---

## 📌 **Exemplos de Algoritmos que Usam essa Técnica**

✅ **Busca Binária** – Divide o espaço de busca ao meio a cada iteração.  
✅ **Merge Sort** – Divide a lista em metades, ordena e depois combina.  
✅ **Quick Sort** – Escolhe um pivô, particiona a lista e ordena as partes separadamente.  
✅ **Multiplicação de Matrizes de Strassen** – Divide as matrizes em submatrizes menores.  
✅ **Algoritmo de Karatsuba** – Multiplica números grandes de maneira eficiente.

---

## 🎯 Vantagens

✅ Reduz a complexidade de certos problemas.  
✅ Frequentemente resulta em algoritmos eficientes, como O(n log n).  
✅ Pode ser aplicado em diversos domínios, como ordenação, busca e computação paralela.

## ⚠ Desvantagens

❌ Pode consumir mais memória devido ao uso de recursão.  
❌ Nem sempre é a melhor abordagem para problemas pequenos ou específicos.

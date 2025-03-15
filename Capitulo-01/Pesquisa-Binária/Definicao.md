# 📌 Pesquisa Binária

A Pesquisa binária é um algoritmo eficiente para encontrar um elemento em uma lista ordenada. Ele segue a abordagem de "dividir e conquistar", reduzindo o espaço de pesquisa pela metade a cada iteração.

## 🚀 Como funciona?

1. **Ordenação**: O algoritmo só funciona em listas ordenadas.
2. **Definição dos Limites**: São definidos os índices `esquerda` e `direita` da lista.
3. **Cálculo do Meio**: O índice médio é calculado como `meio = (esquerda + direita) / 2`.
4. **Comparação**:
   - Se o elemento do meio for o alvo, a pesquisa termina.
   - Se o alvo for menor que o elemento do meio, a pesquisa continua na metade esquerda.
   - Se o alvo for maior, a pesquisa continua na metade direita.
5. **Repetição**: O processo se repete até encontrar o elemento ou até que o intervalo de pesquisa se torne inválido.

## 📝 Exemplo

Dado um array ordenado `[1, 3, 5, 7, 9, 11]`, e queremos encontrar o número `7`:

1. **Passo 1**: `meio = 5` → `5 < 7`, então procuramos na metade direita `[7, 9, 11]`
2. **Passo 2**: `meio = 9` → `9 > 7`, então procuramos na metade esquerda `[7]`
3. **Passo 3**: `meio = 7` → Encontramos o elemento! ✅

## ⏳ Complexidade

- **Melhor caso**: O elemento está no meio da lista → `O(1)`.
- **Pior caso**: O elemento não está presente ou está nos extremos → `O(log n)`.
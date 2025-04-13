# 📚 EXERCÍCIOS SOBRE ESTRUTURA DE DADOS - PILHA

Este repositório contém uma coleção de exercícios práticos que simulam situações do mundo real usando a estrutura de dados **Pilha (Stack)**. Cada exercício aborda um contexto diferente, com o objetivo de consolidar o entendimento sobre operações fundamentais de pilhas: **push (inserir)**, **pop (remover)** e **top (consultar o elemento do topo)**.

## ✅ Exercícios

### 1. Histórico de Navegação (Voltar Páginas)

- **📘 Contexto real:** Simulação do funcionamento de um navegador de internet.
- **💡 Descrição:**  
  Implemente um sistema simples de histórico de navegação onde o usuário pode:
  - Visitar uma nova página (**push**)
  - Voltar para a página anterior (**pop**)
  - Ver qual é a página atual (**top**)

- **🧪 Exemplo de uso:**  
  Visitei `google.com` → `youtube.com` → `gmail.com`  
  Clico em "voltar" → Página atual: `youtube.com`.

---

### 2. Desfazer Ações em um Editor de Texto

- **📘 Contexto real:** Funcionalidade de "Desfazer" presente em editores de texto.
- **💡 Descrição:**  
  Simule um editor de texto onde o usuário pode:
  - Digitar palavras (**push**)
  - Desfazer a última palavra (**pop**)
  - Ver a última palavra digitada (**top**)

- **🧪 Exemplo:**  
  Digitei: `Olá` → `mundo` → `Java`  
  Desfiz → Resultado: `Olá mundo`.

---

### 3. Empilhamento de Pratos

- **📘 Contexto real:** Organização de pratos em uma cozinha.
- **💡 Descrição:**  
  Implemente uma pilha de pratos onde:
  - Cada prato é colocado no topo da pilha (**push**)
  - O prato do topo é retirado (**pop**)
  - A pilha segue o princípio LIFO (Last In, First Out)

- **🧪 Simulação:**  
  Ações de "colocar prato" e "retirar prato" até a pilha estar vazia.

---

### 4. Controlo de Chamadas Telefônicas Recentes

- **📘 Contexto real:** Registro de chamadas em celulares.
- **💡 Descrição:**  
  Implemente um sistema de chamadas onde:
  - Cada nova chamada é registrada (**push**)
  - O usuário pode ver a última chamada feita (**top**)
  - O usuário pode remover a última chamada (**pop**)
  - As chamadas são exibidas da mais recente para a mais antiga

- **🧪 Exemplo:**  
  Liguei para `João` → `Maria`  
  Topo mostra: `Maria`  
  Removi (`pop`) → Topo mostra: `João`.

---

## 🛠️ Tecnologias

- Linguagem de Programação: TypeScript
- Estrutura de Dados: Pilha (Stack)

---

## 📂 Organização

Cada exercício está organizado em pastas ou arquivos separados. Verifique o diretório do projeto para detalhes da implementação.

---

## 📌 Objetivo

O objetivo desses exercícios é praticar a manipulação de pilhas em diferentes contextos práticos, desenvolvendo uma melhor compreensão dessa estrutura de dados essencial na programação.

---

## 🚀 Como contribuir

1. Faça um fork do projeto.
2. Crie uma branch: `git checkout -b minha-solucao`.
3. Adicione suas soluções.
4. Faça um commit: `git commit -m 'Minha solução para os exercícios'`.
5. Envie um push: `git push origin minha-solucao`.
6. Abra um Pull Request.

---

## 👨‍💻 Autor

Kaike Bartolomeu

---


# 📄 Skeleton Loading – DevCarlxs

Este projeto demonstra um **efeito de Skeleton Loading**, uma técnica moderna usada para melhorar a experiência do usuário durante carregamentos de conteúdo.
Ele simula cartões de perfis sendo carregados e, após alguns segundos, exibe os dados reais.

## 🚀 Demonstração

Ao clicar no botão **"Carregar Conteúdo"**, skeletons animados aparecem, e depois de 2 segundos são substituídos pelos cards com informações dos usuários.

<img width="1431" height="907" alt="image" src="https://github.com/user-attachments/assets/abcd7d1a-44b1-4851-ad32-5dce9b583f20" />


---

## 🧠 Objetivo

O projeto foi criado para praticar e demonstrar:

* Manipulação do DOM com JavaScript
* Uso de *Skeleton Loaders*
* Estilização moderna com gradientes, animações e design responsivo
* Simulação de carregamento assíncrono (*fake loader*)

---

## 📦 Tecnologias utilizadas

* **HTML5**
* **CSS3**

  * Gradientes
  * Animações com `@keyframes`
  * Skeleton shimmer effect
* **JavaScript Vanilla**

  * `setTimeout`
  * `map()`
  * Injeção de HTML dinâmica

---

## 📁 Estrutura do projeto

```
/
|-- index.html
|-- css/
|     └── style.css
|-- js/
|     └── script.js
|-- imgs/
      ├── dbz.jpg
      └── demonslayer.jpg
```

---

## 🖥️ Como funciona

1. O usuário clica no botão **Carregar Conteúdo**
2. Os skeletons são exibidos
3. Após 2 segundos, eles são substituídos pelos cartões reais de usuários
4. O botão muda para **Recarregar**

---

## 📜 Código principal

### 🔹 Função que gera o skeleton

```js
function createSkeleton(){
    return `
        <div class="card">
            <div class="skeleton skeleton-card"></div>
            <div class="skeleton-content">
                <div class="skeleton skeleton-title"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text short"></div>
            </div>
        </div>`;
}
```

### 🔹 Função que simula o carregamento

```js
function loadData(){
    loadBtn.disabled = true;
    loadBtn.textContent = 'Carregando...';

    cardsContainer.innerHTML = users.map(createSkeleton).join('');

    setTimeout(() => {
        cardsContainer.innerHTML = users.map(createUser).join('');
        loadBtn.disabled = false;
        loadBtn.textContent = 'Recarregar';
    }, 2000);
}
```

---

## 🎨 Visual

* Tema com **gradiente profundo roxo/azul**
* Cards com detalhes em verde e dourado
* Skeleton com efeito *shimmer* elegante

---

## 📌 Possíveis melhorias

* Carregar dados reais via API
* Transições mais suaves na troca skeleton → conteúdo
* Layout responsivo para mobile com grid
* Animações adicionais no hover

---

## 🧑‍💻 Autor

**DevCarlxs**
Projeto demonstrativo focado em efeito visual e UX.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


pode me dar isso em html ?

<h2>Mithril Map</h2>
Mithril Map é um aplicativo que ajuda os usuários a acompanhar sua jornada de leitura dos livros da série "O Senhor dos Anéis" de J.R.R. Tolkien. O aplicativo permite que os usuários marquem os capítulos lidos, acompanhem seu progresso e visualizem uma lista dos capítulos lidos.


Tecnologias Utilizadas:

<ul>
  <li>React: Biblioteca JavaScript para construir interfaces de usuário. </li>
</ul>

React Router: Biblioteca para roteamento no React. 
RxJS: Biblioteca para programação reativa usando Observables. 
Firebase: Plataforma para desenvolvimento de aplicativos móveis e web que fornece serviços como autenticação e banco de dados em tempo real. 
Cookies: Utilizados para armazenar o progresso de leitura localmente no navegador.


Funcionalidades:

Gerenciamento de Capítulos Lidos Os usuários podem marcar capítulos como lidos. 
O progresso de leitura é armazenado tanto localmente (usando Cookies) quanto no Firebase. 
Um botão de "Desfazer" permite que o usuário desmarque o último capítulo marcado como lido. 
Integração com Firebase Autenticação: Usuários podem se autenticar usando o Firebase Auth. 
Banco de Dados: O progresso de leitura dos usuários é salvo no Firestore. 
Sincronização: O progresso de leitura é sincronizado entre o armazenamento local (Cookies) e o Firestore, garantindo que os dados estejam atualizados em diferentes dispositivos. 
Programação Reativa com RxJS Utilização de Observables para gerenciar o estado da aplicação e comunicar mudanças entre componentes. 
Uso de Cookies: armazenamento local do progresso de leitura para fornecer persistência de dados entre sessões do navegador.

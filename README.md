# Mithril Map

<h2>React + Vite</h2>
Mithril Map é um aplicativo que ajuda os usuários a acompanhar sua jornada de leitura dos livros da série "O Senhor dos Anéis" de J.R.R. Tolkien. O aplicativo permite que os usuários marquem os capítulos lidos, acompanhem seu progresso e visualizem uma lista dos capítulos lidos.

<img width="1857" alt="Captura de Tela 2024-06-20 às 15 41 51" src="https://github.com/raqueldebiase/mithrilmap/assets/94414829/e20bbc36-826d-4631-a71d-8195b3472a3d">


Tecnologias Utilizadas:

<ul>
  <li>React: Biblioteca JavaScript para construir interfaces de usuário. </li>
  <li>React Router: Biblioteca para roteamento no React. </li>
  <li>RxJS: Biblioteca para programação reativa usando Observables. </li>
  <li>Firebase: Plataforma para desenvolvimento de aplicativos móveis e web que fornece serviços como autenticação e banco de dados em tempo real. </li>
  <li>Cookies: Utilizados para armazenar o progresso de leitura localmente no navegador.</li>
</ul>


Funcionalidades:

<ul>
  <li>Gerenciamento de Capítulos Lidos Os usuários podem marcar capítulos como lidos. </li>
  <li>O progresso de leitura é armazenado tanto localmente (usando Cookies) quanto no Firebase. </li>
  <li>Um botão de "Desfazer" permite que o usuário desmarque o último capítulo marcado como lido. </li>
  <li>Integração com Firebase Autenticação: Usuários podem se autenticar usando o Firebase Auth.</li>
  <li>Banco de Dados: O progresso de leitura dos usuários é salvo no Firestore. </li>
  <li>Sincronização: O progresso de leitura é sincronizado entre o armazenamento local (Cookies) e o Firestore, garantindo que os dados estejam atualizados em diferentes dispositivos. </li>
  <li>Programação Reativa com RxJS Utilização de Observables para gerenciar o estado da aplicação e comunicar mudanças entre componentes. </li>
  <li>Uso de Cookies: armazenamento local do progresso de leitura para fornecer persistência de dados entre sessões do navegador.</li>
</ul>








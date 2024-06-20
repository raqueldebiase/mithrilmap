# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<h1>Mithril Map</h1>
        <p>
            Mithril Map é um aplicativo que ajuda os usuários a acompanhar sua jornada de leitura dos livros da série 
            "O Senhor dos Anéis" de J.R.R. Tolkien. O aplicativo permite que os usuários marquem os capítulos lidos, 
            acompanhem seu progresso e visualizem uma lista dos capítulos lidos.
        </p>

        <h2>Tecnologias Utilizadas</h2>
        <ul>
            <li><strong>React</strong>: Biblioteca JavaScript para construir interfaces de usuário.</li>
            <li><strong>React Router</strong>: Biblioteca para roteamento no React.</li>
            <li><strong>RxJS</strong>: Biblioteca para programação reativa usando Observables.</li>
            <li><strong>Firebase</strong>: Plataforma para desenvolvimento de aplicativos móveis e web que fornece serviços como autenticação e banco de dados em tempo real.</li>
            <li><strong>Cookies</strong>: Utilizados para armazenar o progresso de leitura localmente no navegador.</li>
        </ul>

        <h2>Funcionalidades</h2>
        <h3>Gerenciamento de Capítulos Lidos</h3>
        <ul>
            <li>Os usuários podem marcar capítulos como lidos.</li>
            <li>O progresso de leitura é armazenado tanto localmente (usando Cookies) quanto no Firebase.</li>
            <li>Um botão de "Desfazer" permite que o usuário desmarque o último capítulo marcado como lido.</li>
        </ul>

        <h3>Integração com Firebase</h3>
        <ul>
            <li><strong>Autenticação</strong>: Usuários podem se autenticar usando o Firebase Auth.</li>
            <li><strong>Banco de Dados</strong>: O progresso de leitura dos usuários é salvo no Firestore.</li>
            <li><strong>Sincronização</strong>: O progresso de leitura é sincronizado entre o armazenamento local (Cookies) e o Firestore, garantindo que os dados estejam atualizados em diferentes dispositivos.</li>
        </ul>

        <h3>Programação Reativa com RxJS</h3>
        <ul>
            <li>Utilização de Observables para gerenciar o estado da aplicação e comunicar mudanças entre componentes.</li>
        </ul>

        <h3>Uso de Cookies</h3>
        <ul>
            <li>Armazenamento local do progresso de leitura para fornecer persistência de dados entre sessões do navegador.</li>
        </ul>

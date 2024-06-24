<h1>Mithril Map</h1>
<h3>Tolkien Reading Journey Tracker</h3>


This project is a React application designed to track reading progress through Tolkien's works, following the level II reading approach.

<img width="1519" alt="Captura de Tela 2024-06-24 às 10 48 45" src="https://github.com/raqueldebiase/mithrilmap/assets/94414829/f842aa52-7ed3-4c47-8d4c-e9fc31cdcaa1">

React was extensively used to create a component-based application, embracing componentization to modularize code and promote reusability. Hooks such as useState and useEffect were instrumental in managing local state and side effects efficiently within functional components, while the Context API facilitated global state management for features like authentication and reading progress. React Router was employed for seamless page navigation based on URLs. Styling was accomplished using CSS Modules, enhancing encapsulation of styles and mitigating global conflicts. The shift to functional components reflects React's modern approach, prioritizing simplicity and scalability in application development.

Firebase Authentication was integrated for straightforward and secure user authentication, enabling users to log in and authenticate with ease. Additionally, Firebase Firestore served as the NoSQL database to store and synchronize real-time data across different application components, such as reading progress through chapters. Firebase integration also enabled the use of Cloud Functions to implement custom backend logic, automating or handling business operations asynchronously as needed. These Firebase features provided a robust and scalable infrastructure for developing and deploying the application, ensuring a consistent and reliable user experience.

<img width="1357" alt="Captura de Tela 2024-06-24 às 10 49 02" src="https://github.com/raqueldebiase/mithrilmap/assets/94414829/cdd18f5e-0b8f-44d5-9c56-4c618cdc8d3b">

Features: 

<ul>
  <li>Authentication: Users can authenticate to track their reading progress.</li>
  <li>Reading Progress: Records which chapters the user has read.</li>
  <li>Reset Progress: Allows users to reset their reading progress.</li>
  <li>Responsive Design: Supports various screen sizes using responsive CSS techniques.</li>
</ul>


Technologies Used:

<ul>
  <li>React</li>
  <li>Firebase Authentication</li>
  <li>CSS (with Flexbox and Media Queries)</li>
</ul>



import React from 'react';
import { Link } from 'react-router-dom'; // Importa o Link do react-router-dom
import styles from './BookList.module.css';

const BookList = () => {
  return (
    <div className={styles.bookListPage}>
      <div className={`${styles.bookList} container`}>
      <div className={styles.bookListHeader}>
        <h2>Book list</h2>
        <p>You can find here a list of the books to read, along with other materials used to assist the lecture, such as maps, tables, genealogical trees, and nomenclatures.</p>
      </div>
        <nav>
          <ul>
            <li><Link to='/book/1'>The Hobbit, J. R. R. Tolkien.</Link></li>
            <li><Link to='/book/1'>The Lord of the Rings, </Link></li>
            <li><Link to='/book/1'>The Silmarillion, 	J. R. R. Tolkien.</Link></li>
            <li><Link to='/book/2'>Unfinished Tales of Númenor and Middle-earth, J. R. R. Tolkien.</Link></li>
            <li><Link to='/book/1'>The Children of Húrin, J. R. R. Tolkien.</Link></li>
            <li><Link to='/book/1'>Beren and Lúthien, J. R. R. Tolkien.</Link></li>
            <li><Link to='/book/1'>The Fall of Gondolin, J. R. R. Tolkien.</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default BookList;

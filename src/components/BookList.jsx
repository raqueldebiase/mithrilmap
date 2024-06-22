import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './BookList.module.css';
import linkExterno from '../assets/link-external.svg';

const books = [
  { id: 1, title: "The Hobbit", author: "J. R. R. Tolkien", link: "https://a.co/d/0bILwtsA"},
  { id: 2, title: "The Lord of the Rings", author: "J. R. R. Tolkien", link: "https://a.co/d/006Uo1Ai" },
  { id: 3, title: "The Silmarillion", author: "J. R. R. Tolkien", link: "https://a.co/d/0iw717KH" },
  { id: 4, title: "Unfinished Tales of Númenor and Middle-earth", author: "J. R. R. Tolkien", link: "https://a.co/d/01UPDaOe" },
  { id: 5, title: "The Children of Húrin", author: "J. R. R. Tolkien", link:"https://a.co/d/065vv5ca"},
  { id: 6, title: "Beren and Lúthien", author: "J. R. R. Tolkien", link:"https://a.co/d/0c5Cd84a" },
  { id: 7, title: "The Fall of Gondolin", author: "J. R. R. Tolkien", link: "https://a.co/d/06707D0A" },
  { id: 8, title: "O mundo do senhor dos anéis", author: "Ives Gandra Martins Filho", link: "https://www.amazon.com.br/mundo-senhor-dos-an%C3%A9is/dp/8533623097" },
  { id: 9, title: "Atlas Of Tolkiens Middle Earth", author: "Karen Wynn Fonstad", link: "https://a.co/d/02G5PLT1" },
];

const BookList = () => {
  return (
    <div className={styles.bookListPage}>
      <div className={`${styles.bookList} container`}>
        <div className={styles.bookListHeader}>
          <h2>Book list</h2>
          <p>You can find here a list of the books to read, along with other materials used to assist the lecture, such as maps, atlas, tables, genealogical trees, and nomenclatures.</p>
        </div>
        <nav>
          <ul>
            {books.map(book => (
              <li key={book.id}>
                <Link to={`/book/${book.id}`}>
                  {book.title}, {book.author}
                </Link>
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  <img src={linkExterno} className={styles.linkToExt} alt="External link icon" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BookList;

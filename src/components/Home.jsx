import React, { useState } from 'react';
import styles from './Home.module.css';
import Modal from './Modal';

const chapters = [
  { id: 1, title: 'O Silmarillon: Ainulindalë' },
  { id: 2, title: 'O Silmarillon: Valaquenta' },
  { id: 3, title: 'O Silmarillon: Quenta Silmarillion (até o fim do capítulo XVIII)' },
  { id: 4, title: 'Beren e Lúthien: ler o livro completo' },
  { id: 5, title: 'O Silmarillon: ler o capítulo XX' },
  { id: 6, title: 'Os Filhos de Húrin: ler o livro completo OU O Silmarillon: ler o capítulo XXI' },
  { id: 7, title: 'Contos Inacabados: ler o Capítulo I da primeira parte dos Contos Inacabados “De Tuor e da sua chegada a Gondolin' },
  { id: 8, title: 'O Silmarillon: prosseguir com a leitura do livro O Silmarillon na parte “Quenta Silmarillion”, capítulos XXIII e XXIV' },
  { id: 9, title: 'Contos Inacabados (II parte): ler os capítulos:  I – Uma descrição da ilha de Númenor, II – Aldarion e Erendis, III – A linhagem de Elros: Reis de Númenor.' },
  { id: 10, title: 'O Silmarillon: ler por completo o “Akallabêth”' },
  { id: 11, title: 'Contos Inacabados: ler na segunda parte o capítulo IV “A História de Galadriel e Celeborn”' },
  { id: 12, title: 'O Silmarillon: ler “Dos Anéis do Poder e da Terceira Era” até o 30º parágrafo.' },
  { id: 13, title: 'Contos Inacabados: ler “Desastre dos Campos de Lis”.' },
  { id: 14, title: 'O Senhor dos Anéis, O Retorno do Rei, o Apêndice “A”: ler os apêndices “Anais dos Reis e Governantes”, até o fim do tópico IV “Gondor e os herdeiros de anárion”.' },
  { id: 15, title: 'Contos Inacabados: ler o capítulo “Cirion e Eorl e a amizade entre Gondor e Rohan”' },
  { id: 16, title: 'O Senhor dos Anéis, O Retorno do Rei: ler por completo o segundo tópico “A casa de Eorl”.' },
  { id: 17, title: 'O Senhor dos Anéis, O Retorno do Rei, no Apêndice “A”: ler o tópico  “parte da história de Arwen e Aragorn”.' },
  { id: 18, title: 'Contos Inacabados: ler a quarta parte na seguinte ordem: “Os Istari”, “Os Palantiri”, “Os Druedan”,' },
  { id: 19, title: 'O Senhor dos Anéis, O Retorno do Rei, no Apêndice “A”: ler o tópico “O Povo de Durin”.' },
  { id: 20, title: 'Contos Inacabados, terceira parte: ler “A Busca de Erebor”.' },
  { id: 21, title: 'O Hobbit: ler o livro por completo' },
  { id: 22, title: 'O Senhor dos Anéis: A Sociedade do Anel: ler o livro por completo' },
  { id: 23, title: 'Contos Inacabados: ler o capítulo "A Caçada ao Anel".' },
  { id: 24, title: 'O Senhor dos Anéis: As Duas Torres: ler o primeiro capítulo.' },
  { id: 25, title: 'Contos Inacabados: ler o capítulo “As Batalhas dos Vaus do Isen”.' },
  { id: 26, title: 'O Senhor dos Anéis, as Duas Torres: ler do segundo capítulo até o final do livro.' },
  { id: 27, title: 'O Senhor dos Anéis, O Retorno do Rei: ler o livro por completo.' },
  { id: 28, title: 'O Silmarillion: ler “Dos Anéis do Poder e da Terceira Era”, partindo do 31º parágrafo.' },
];

const Home = () => {
  const [readChapters, setReadChapters] = useState([]);
  const [showModal, setShowModal] = useState(false); // Estado para controlar a exibição do modal

  const toggleChapter = (chapterID) => {
    setReadChapters(prevState =>
      prevState.includes(chapterID)
        ? prevState.filter(id => id !== chapterID)
        : [...prevState, chapterID]
    );
  };

  // Verifica se todos os capítulos foram lidos e exibe o modal se sim
  const handleProgressBarComplete = () => {
    if (readChapters.length === chapters.length) {
      setShowModal(true);
    }
  };

  return (
    <div className={`${styles.home} container`}>
      <div className={styles.evolution}>
        <h2>The Evolution of your journey</h2>
        <ProgressBar total={chapters.length} completed={readChapters.length} onComplete={handleProgressBarComplete} />
      </div>
      <div className={styles.chapters}>
        <ChapterList chapters={chapters} readChapters={readChapters} toggleChapter={toggleChapter} />
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} />} {/* Renderiza o modal se showModal for true */}
    </div>
  );
};
const ProgressBar = ({ total, completed, onComplete }) => {
  const percentage = (completed / total) * 100;

  // Chama a função onComplete quando a barra estiver completa
  if (percentage >= 100) {
    onComplete();
  }

  return (
    <div className={styles.progressContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

const ChapterList = ({ chapters, readChapters, toggleChapter }) => {
  const unreadChapters = chapters.filter(chapter => !readChapters.includes(chapter.id));

  return (
    <div className={styles.chapterList}>
      {unreadChapters.map(chapter => (
        <ChapterItem
          key={chapter.id}
          chapter={chapter}
          isRead={readChapters.includes(chapter.id)}
          toggleChapter={() => toggleChapter(chapter.id)}
        />
      ))}
    </div>
  );
};

const ChapterItem = ({ chapter, isRead, toggleChapter }) => {
  const handleClick = () => {
    toggleChapter(chapter.id);
    const element = document.getElementById(`chapter-${chapter.id}`);
    element.style.transition = 'transform 0.3s ease';
    element.style.transform = 'translateX(100%)';
    element.addEventListener('transitionend', () => {
      element.parentNode.removeChild(element);
    });
  };

  return (
    <div
      id={`chapter-${chapter.id}`}
      className={`${styles.chapterItem} ${isRead && styles.read}`}
      onClick={handleClick}
    >
      {chapter.title}
    </div>
  );
};

export default Home;
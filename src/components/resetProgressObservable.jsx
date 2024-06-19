import { BehaviorSubject } from 'rxjs';

// Crie um BehaviorSubject para armazenar o estado resetProgress
const resetProgressSubject = new BehaviorSubject(false);

// Crie uma função para alterar o estado resetProgress
export const setResetProgress = (value) => {
  resetProgressSubject.next(value);
};

// Exporte o BehaviorSubject como um observable para que os componentes possam se inscrever nele
export const resetProgressObservable = resetProgressSubject.asObservable();


// BehaviorSubject para armazenar os capítulos lidos
const readChaptersList = new BehaviorSubject([]);

// Função para adicionar um capítulo lido
export const sendChapters = (chapters) => {
  readChaptersList.next(chapters);
};

// Exporte o BehaviorSubject como um observable
export const readChaptersObservable = readChaptersList.asObservable();

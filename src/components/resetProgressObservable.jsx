import { BehaviorSubject } from 'rxjs';

// Crie um BehaviorSubject para armazenar o estado resetProgress
const resetProgressSubject = new BehaviorSubject(false);

// Crie uma função para alterar o estado resetProgress
export const setResetProgress = (value) => {
  resetProgressSubject.next(value);
};

// Exporte o BehaviorSubject como um observable para que os componentes possam se inscrever nele
export const resetProgressObservable = resetProgressSubject.asObservable();

import { useState } from 'react';

const useFirebaseErrorHandling = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const getFriendlyErrorMessage = (error) => {
    switch (error.code) {
      case 'auth/invalid-email':
        return 'Invalid email address format.';
      case 'auth/user-disabled':
        return 'This user account has been disabled.';
      case 'auth/user-not-found':
        return 'No user found with this email.';
      case 'auth/wrong-password':
        return 'Incorrect password.';
      case 'auth/email-already-in-use':
        return 'Email is already in use by another account.';
      case 'auth/weak-password':
        return 'Password is too weak.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  };

  const handleError = (error) => {
    console.log('Error code:', error.code);
    const message = getFriendlyErrorMessage(error);
    setErrorMessage(message);
  };

  return { errorMessage, handleError };
};

export default useFirebaseErrorHandling;

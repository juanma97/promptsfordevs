import { useState, useEffect, createContext, useContext } from "react";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  GithubAuthProvider,
  sendPasswordResetEmail,
  onAuthStateChanged, 
  signOut 
} from "firebase/auth";
import { app, setUserAnalytics } from "../firebaseConfig";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserAnalytics(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  const loginWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      setUser(result.user);
    } catch (error) {
      if (error.code === 'auth/account-exists-with-different-credential') {
        alert('Ya existe una cuenta con el mismo email pero con diferente proveedor de autenticación');
      } else {
        console.error("Error al iniciar sesión con Github:", error);
      }
    }
  };

  // const loginWithEmail = async (email, password) => {
  //   try {
  //     setAuthError(null);
  //     const result = await signInWithEmailAndPassword(auth, email, password);
  //     setUser(result.user);
  //   } catch (error) {
  //     setAuthError(
  //       error.code === 'auth/user-not-found' ? 'Usuario no encontrado' :
  //       error.code === 'auth/wrong-password' ? 'Contraseña incorrecta' :
  //       'Error al iniciar sesión'
  //     );
  //     throw error;
  //   }
  // };

  // const registerWithEmail = async (email, password) => {
  //   try {
  //     setAuthError(null);
  //     const result = await createUserWithEmailAndPassword(auth, email, password);
  //     setUser(result.user);
  //   } catch (error) {
  //     setAuthError(
  //       error.code === 'auth/email-already-in-use' ? 'El email ya está en uso' :
  //       error.code === 'auth/weak-password' ? 'La contraseña debe tener al menos 6 caracteres' :
  //       'Error al registrar usuario'
  //     );
  //     throw error;
  //   }
  // };

  const resetPassword = async (email) => {
    try {
      setAuthError(null);
      await sendPasswordResetEmail(auth, email);
      return true;
    } catch (error) {
      setAuthError('Error al enviar el email de recuperación');
      throw error;
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loginWithGoogle, 
      loginWithGithub,
      resetPassword,
      logout, 
      loading,
      authError 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";

const AuthContext = createContext<any>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    setUser({
      uid: userCred.user.uid,
      email: userCred.user.email,
      displayName: userCred.user.displayName,
    });
    setLoading(false);
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(`user: ${JSON.stringify(user)}`);
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
        setLoading(false);
      } else {
        setUser(null);
      }
    });

    setLoading(false);

    return unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, loading }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

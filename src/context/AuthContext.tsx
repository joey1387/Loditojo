import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type User = {
  fullName: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {

    const savedUser = localStorage.getItem("user");
    const loggedIn = localStorage.getItem("loggedIn");

    if (savedUser && loggedIn === "true") {
      setUser(JSON.parse(savedUser));
    }

  }, []);

  const login = (user: User) => {

    localStorage.setItem("loggedIn", "true");

    setUser(user);

  };

  const logout = () => {

    localStorage.removeItem("loggedIn");

    setUser(null);

  };

  return (

    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>

  );

};

export const useAuth = () => {

  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;

};
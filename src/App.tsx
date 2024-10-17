import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";

interface IThemeContext {
  theme: boolean;
  toggleTheme: () => void;
}

export const themeProvider = createContext<IThemeContext | undefined>(
  undefined
);

function App() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };
  return (
    <themeProvider.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme ? "dark" : "light"} `}>
        <Header />
        <div className="container">
          <Main />
        </div>
      </div>
    </themeProvider.Provider>
  );
}

export default App;

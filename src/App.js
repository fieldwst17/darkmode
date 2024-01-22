import './App.css';
import Title from './component/Title';
import Content from './component/Content';
import { createContext, useState } from 'react';

// เก็บข้อมูลในแอปว่าตอนนี้ใช้โหมดอะไรอยู่
export const ThemeContext = createContext()

function App() {
  const [theme,setTheme] = useState("light")
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div>
        <Title/>
        <Content/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App

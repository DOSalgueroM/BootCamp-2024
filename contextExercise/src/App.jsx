import React, { useState, createContext, useContext } from 'react';
 

const languages = ['JavaScript', 'Python'];

const LanguageContext = createContext();
export default function App() {
  
  const [favoriteLanguage, setFavoriteLanguage] = useState(languages[0]);

  
  const toggleLanguage = () => {
    setFavoriteLanguage(prevLanguage =>
      prevLanguage === languages[0] ? languages[1] : languages[0]
    );
  };

  return (
    <LanguageContext.Provider value={{ favoriteLanguage, toggleLanguage }}>
      <MainSection />
    </LanguageContext.Provider>
  );
}


function MainSection() {
    const { favoriteLanguage, toggleLanguage } = useContext(LanguageContext);
 return (

  
   <div>
     <p id="favoriteLanguage">favorite programing language: {favoriteLanguage}</p>
     <button id="changeFavorite" onClick={toggleLanguage}>toggle language</button>
   </div>
 )
}


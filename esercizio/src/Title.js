import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const strings = {
    it: {
        WELCOME: "Benvenuto! Cosa posso fare per te?"
    },
    en: {
        WELCOME: "Welcome! what can i do for you?"
    }
}
export default function Title(){
    const language = useContext(LanguageContext)


    return(
          <h1> { strings[language].WELCOME }</h1 >
 )
  
}





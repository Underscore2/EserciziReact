import React from "react";
import { LanguageContext } from "./LanguageContext";

const strings = {
    it: {
        WELCOME: "Benvenuto! Cosa posso fare per te?"
    },
    en: {
        WELCOME: "Welcome! what can i do for you?"
    }
}
class Title extends React.Component {
    render() {


        return (
            <LanguageContext.Consumer>
                {((language) => {

                    return (
                        <h1>{strings[language].WELCOME}</h1>

                    )
                })}
            </LanguageContext.Consumer>
        )
    }
}

export default Title
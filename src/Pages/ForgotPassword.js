import React, {useState} from "react";
import {dataLayerForgotPassword} from '../events-DataLayer/eventsDataLayer.js'


export default function ForgotPassword(){

    const [getEmail, setGetEmail] = useState('')

    const handleChange = (event) => {
        setGetEmail(event.target.value);
      };

    const dataLayer = (email) => {
        setGetEmail(email)
        dataLayerForgotPassword(email)
    };

    return(
        <>
            <table>
                <tr>
                    <td>
                        <label>E-mail: </label>
                    </td>
                    <td align="left">
                        <input type="text" name="email" 
                        value={getEmail}
                        onChange={handleChange}/>
                    </td>
                </tr>
            </table>
            <button id="register" onClick={() => dataLayer(getEmail)}>Cadastrar</button>
        </>
    )
}
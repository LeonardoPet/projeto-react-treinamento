import React,{useState} from "react";
import {dataLayerCadastro} from '../events-DataLayer/eventsDataLayer.js'
import {dataLayerNovoCadastro} from '../events-DataLayer/eventsDataLayer.js'



export default function Register(){

    const [getEmail, setGetEmail] = useState('')

    const handleChange = (event) => {
        setGetEmail(event.target.value);
      };

    const dataLayer = (email) => {
        setGetEmail(email)
        dataLayerCadastro(email)
        dataLayerNovoCadastro()
    };


    return(
        <>
            <form >
                <fieldset>
                <legend>Registro</legend>
                    <table cellSpacing="10">
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="nome">Nome: </label>
                                </td>
                                <td align="left">
                                    <input type="text" name="email" />
                                </td>
                            </tr>
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
                            <tr>
                                <td>
                                    <label htmlFor="login">Login de usuário: </label>
                                </td>
                                <td align="left">
                                    <input type="text" name="login" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="pass">Senha: </label>
                                </td>
                                <td align="left">
                                    <input type="password" name="pass" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="passconfirm">Confirme a senha: </label>
                                </td>
                                <td align="left">
                                    <input type="password" name="passconfirm" />
                                </td>
                            </tr>
                        </tbody>
                     </table> 
                </fieldset>
                <input type="reset" value="Limpar"/>
            </form>
            <button id="register" onClick={() => dataLayer(getEmail)}>Cadastrar</button>     
        </>
    )   
}
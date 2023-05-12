import React from "react";
import { Link } from 'react-router-dom';
import {dataLayerLogin} from '../events-DataLayer/eventsDataLayer.js'

export default function Login(){

    const dataLayer = () => {
        dataLayerLogin()
    };

    return(   
    <>
        <form >
            <fieldset>
                <legend>Login</legend>
                <table>
                    <tbody>
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
                    </tbody>   
                </table>
            </fieldset>
        <br />    
        </form>
        <button id="login" onClick={() => dataLayer()}>Login</button>
        <Link to="/forgotPassword">Esqueceu a Senha?</Link>
    </>
    )   
}
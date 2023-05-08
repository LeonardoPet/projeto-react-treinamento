import React from "react";
import { Link } from 'react-router-dom';

export default function Login(){
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
        <button>Login</button>
        <Link to="/forgotPassword">Esqueceu a Senha?</Link>
    </>
    )   
}
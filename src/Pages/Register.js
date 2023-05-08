import React from "react";

export default function Register(){
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
                                    <input type="text" name="email" />
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
            <button>Cadastrar</button>     
        </>
    )   
}
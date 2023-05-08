import React from "react";

export default function ForgotPassword(){
    return(
        <>
            <table>
                <tr>
                    <td>
                        <label>E-mail: </label>
                    </td>
                    <td align="left">
                        <input type="text" name="email" />
                    </td>
                </tr>
            </table>
            <button>Recuperar Senha</button>
        </>
    )
}
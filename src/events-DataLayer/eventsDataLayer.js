// 
const dataLayerCadastro = () => { 
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'Registration_Completed',
        'email': ''
    })
}
export {dataLayerCadastro}

// 
const dataLayerLogin = () => { 
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'Login'
    })
}
export {dataLayerLogin}

// 
const dataLayerForgotPassword = () => { 
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'ForgotPassword',
        'email': ''
    })
}
export {dataLayerForgotPassword}

// 
const dataLayerWatch = () => { 
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'Watch',
        'anime_name': ''
    })
}
export {dataLayerWatch}

// 
const dataLayerNovoCadastro = () => { 
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'NewRegister'
    })
}
export {dataLayerNovoCadastro}

// 
const dataLayerTeste5 = () => { 
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': '',
        'buttonText': ''
    })
}
export {dataLayerTeste5}

//
const dataLayerTeste6 = () => { 
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': '',
        'buttonText': ''
    })
}
export {dataLayerTeste6}
// Data Layer Event - Registration
export function dataLayerCadastro(email) { 
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'Registration_Completed',
        'email': email
    })
}

// 
export function dataLayerLogin() { 
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'Login'
    })
}

// 
export function dataLayerForgotPassword(email) { 
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'ForgotPassword',
        'email': email
    })
}


// 
const dataLayerWatch = () => { 
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'Watch',
        'anime_name': ''
    })
}
export {dataLayerWatch}

// 
const dataLayerNovoCadastro = () => { 
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'NewRegister'
    })
}
export {dataLayerNovoCadastro}

// 
const dataLayerTeste5 = () => { 
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': '',
        'buttonText': ''
    })
}
export {dataLayerTeste5}

//
const dataLayerTeste6 = () => { 
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': '',
        'buttonText': ''
    })
}
export {dataLayerTeste6} 
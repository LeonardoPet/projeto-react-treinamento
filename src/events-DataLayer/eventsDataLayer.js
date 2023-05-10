// Data Layer Event - Registration
export function dataLayerCadastro(email) { 
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'Registration_Completed',
        'email': email
    })
}

// Data Layer Event - Login
export function dataLayerLogin() { 
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'Login'
    })
}

// Data Layer Event - Forgot Password
export function dataLayerForgotPassword(email) { 
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'ForgotPassword',
        'email': email
    })
}


// Data Layer Event - Watch
export function dataLayerWatch(anime) { 
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'Watch',
        'anime_name': anime
    })
}

// 
const dataLayerNovoCadastro = () => { 
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'NewRegister'
    })
}
export {dataLayerNovoCadastro}



let InitialState = {email: '', password: '', loggined: false};

export const LoginReducer = (state=InitialState, action) =>{
    switch(action.type){
        case 'LOGIN/EDIT_LOGIN_DATA':
            return {...state, email: action.email, password: action.password, loggined: true};
        case 'LOGIN/LOGOUT':
            return {...state, loggined: false}
        default:
            return {...state}
    }

} 

export const EditLogin = (login_data) =>({type: 'LOGIN/EDIT_LOGIN_DATA', email: login_data.email, password: login_data.password})
export const Logout = ()=>({type: 'LOGIN/LOGOUT'})
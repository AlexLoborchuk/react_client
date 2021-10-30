let initialValues = {users: [
    {
        id: 1,
        name: 'Alex',
        surname: 'Loborchuk',
        isAdmin: true,
        location: 'Khmelnytskiy',
        sex: 'man'
    },
    {
        id: 2,
        name: 'Valentine',
        surname: 'Grigorov',
        isAdmin: true,
        location: 'Khmelnytskiy',
        sex: 'man'
    },
    {
        id: 3,
        name: 'Natali',
        surname: 'Loborchuk',
        isAdmin: false,
        location: 'Khmelnytskiy',
        sex: 'woman'
    },
    {
        id: 4,
        name: 'Irina',
        surname: 'Matveeva',
        isAdmin: false,
        location: 'Khmelnytskiy',
        sex: 'woman'
    }
]}


export const AdminReducer = (state=initialValues, action)=>{
    switch(action.type){
        case 'ADMIN/DELETE_USER':
            return {...state, users: state.users.filter(user => user.id !== action.userId)}
        case 'ADMIN/ADD_NEW_USER':
            return {...state, users: [...state.users, action.user]}
            default:
            return {...state}
    }
}


export const DeleteUser = (userId) => ({type: 'ADMIN/DELETE_USER', userId: userId});
export const AddNewUser = (user) =>({type: 'ADMIN/ADD_NEW_USER', user: user});
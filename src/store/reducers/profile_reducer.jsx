
let InitialState = {
    name: 'Alexsandr', 
    surname: 'Loborchuk',
    phone: '380686463275',
    location: 'Ukraine/Khmelnytskyi', 
    description: 'Биржа копирайтинга - это достойный заработок для копирайтеров и возможность заказать текст у профессиональных авторов. Здесь вы можете реализовать свой творческий потенциал или приобрести уникальные статьи для нужд своего сайта. Рейтинг копирайтеров наглядно демонстрирует опыт и востребованность исполнителя на сервисе и позволяет заказчику быстро выбрать исполнителя на свой заказ. Простота в работе. Мы приложили много усилий, чтобы работать на нашей бирже копирайтинга было максимально легко и удобно. Интуитивно понятный интерфейс, постоянное совершенствование функционала и подробный FAQ помогут в работе начинающим и обеспечат комфорт постоянным пользователям.',
    isEditing: false,
    photo: '', 
    created: false
    };

export const ProfileReducer = (state=InitialState, action) =>{
    switch(action.type){
        case 'PROFILE/EDIT_PROFILE_DATA':
            return {...state,
                name: action.profile.name, 
                surname: action.profile.surname,
                phone: action.profile.phone,
                location: action.profile.location,
                description: action.profile.description,
                created: true
                };
        case 'PROFILE/CHANGE_EDIT_MODE':
            return {...state, isEditing: action.edit}
        default:
            return {...state}
    }

} 

export const EditProfile = (profile_data) =>({type: 'PROFILE/EDIT_PROFILE_DATA', profile: profile_data})
export const SetEditMode = (edit) =>({type: 'PROFILE/CHANGE_EDIT_MODE', edit})
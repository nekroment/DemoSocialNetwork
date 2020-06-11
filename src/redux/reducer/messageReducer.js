const SEND_MESSAGE='SEND_MESSAGE'

let initialState = {
    message: [
        { id: 1, user: 'me', message: 'Rabotaet?' },
        { id: 2, user: 'Jarik', message: 'Her ego znaet' },
        { id: 3, user: 'me', message: 'Nujno proverit' },
        { id: 4, user: 'Jarik', message: 'Davaj' }],
    dialog: [
        { id: 1, avatar: 'https://eduodessa.files.wordpress.com/2017/06/photo-833032.jpg?w=300&crop', name: 'Jarik' },
        { id: 2, avatar: 'https://eduodessa.files.wordpress.com/2017/06/photo-833032.jpg?w=300&crop', name: 'Vitia' },
        { id: 3, avatar: 'https://eduodessa.files.wordpress.com/2017/06/photo-833032.jpg?w=300&crop', name: 'Kostia' },
        { id: 4, avatar: 'https://eduodessa.files.wordpress.com/2017/06/photo-833032.jpg?w=300&crop', name: 'Nastia' }]
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: state.message.length + 1,
                user: action.user,
                message: action.newMessageBody
            }
            let stateCopy = { ...state }
            stateCopy.message = [...state.message]
            stateCopy.message.push(newMessage);
            return stateCopy
        }
        default:
            return state
    }

}

export let SendMessageActionCreator = (user, newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        user,
        newMessageBody
    }
}

export default messageReducer
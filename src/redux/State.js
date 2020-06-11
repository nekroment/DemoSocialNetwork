// import profileReducer from "./reducer/profileReducer"
// import messageReducer from "./reducer/messageReducer"
// import sideBarReducer from "./reducer/sideBarReducer"

// let store = {
//   _state:  {
//     profilePage: {
//       post: [
//         { id: 1, post: 'Idi Na Huj' },
//         { id: 2, post: 'Sam idi' },
//         { id: 3, post: 'Net ty' },
//         { id: 4, post: '...' }],
//       newPostText: ''
//     },
//     messagePage: {
//       message: [
//         { id: 1, user: 'me', message: 'Rabotaet?' },
//         { id: 2, user: 'Jarik', message: 'Her ego znaet' },
//         { id: 3, user: 'me', message: 'Nujno proverit' },
//         { id: 4, user: 'Jarik', message: 'Davaj' }],
//       dialog: [
//         { id: 1, avatar: 'https://eduodessa.files.wordpress.com/2017/06/photo-833032.jpg?w=300&crop', name: 'Jarik' },
//         { id: 2, avatar: 'https://eduodessa.files.wordpress.com/2017/06/photo-833032.jpg?w=300&crop', name: 'Vitia' },
//         { id: 3, avatar: 'https://eduodessa.files.wordpress.com/2017/06/photo-833032.jpg?w=300&crop', name: 'Kostia' },
//         { id: 4, avatar: 'https://eduodessa.files.wordpress.com/2017/06/photo-833032.jpg?w=300&crop', name: 'Nastia' }],
//       newMessageText: ''
//     },
//     sideBarPage: {
//       friends: [
//         { id: 1, avatar: 'https://eduodessa.files.wordpress.com/2017/06/photo-833032.jpg?w=300&crop', name: 'Jarik' },
//         { id: 2, avatar: 'https://eduodessa.files.wordpress.com/2017/06/photo-833032.jpg?w=300&crop', name: 'Vitia' },
//         { id: 3, avatar: 'https://eduodessa.files.wordpress.com/2017/06/photo-833032.jpg?w=300&crop', name: 'Nastia' }
//       ]
//     }
//   },
//   getState(){
//     return this._state
//   },
//   rerenderEntireTree(){},
//   subscribe(observer){
//     this.rerenderEntireTree = observer
//   },
//   dispatch(action) {
//     this._state.profilePage=profileReducer(this._state.profilePage,action);
//     this._state.messagePage=messageReducer(this._state.messagePage,action);
//     this._state.sideBarPage=sideBarReducer(this._state.sideBarPage,action);
//     this.rerenderEntireTree()
//   }
// }

// export default store
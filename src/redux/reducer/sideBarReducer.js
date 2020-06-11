let initialState={
    friends: [
      { id: 1, avatar: 'https://eduodessa.files.wordpress.com/2017/06/photo-833032.jpg?w=300&crop', name: 'Jarik' },
      { id: 2, avatar: 'https://eduodessa.files.wordpress.com/2017/06/photo-833032.jpg?w=300&crop', name: 'Vitia' },
      { id: 3, avatar: 'https://eduodessa.files.wordpress.com/2017/06/photo-833032.jpg?w=300&crop', name: 'Nastia' }
    ]
  }

const sideBarReducer=(state=initialState,action)=>{
    return state;
}

export default sideBarReducer
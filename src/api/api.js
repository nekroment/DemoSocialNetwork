import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "57b7d59e-6a10-46cd-bb60-8a8d94c296a0"
    }
})

export const usersAPI={
    getUsers(currentPage, pageSize){
        return (
            instance
                .get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    
        )
    },
    Unfollow(id){
        return (
            instance
                .delete(`follow/${id}`)
        )
    },
    Follow(id){
        return (
            instance
                .post(`follow/${id}`, null)
        )
    }
}

export const authAPI = {
    authMe() {
        return (
            instance.get(`/auth/me`)
        )
    },
    Login(email,password,rememberMe=false){
        return(
            instance.post('/auth/login',{email,password,rememberMe})
        )
    },
    LogOut(){
        return(
            instance.delete('/auth/login')
        )
    }
}


export const profileAPI={
    getProfile(userId){
        return (
            instance
                .get(`profile/${userId}`)
        )
    },
    getStatus(userId){
        return(
            instance.get(`profile/status/${userId}`)
        )
    },
    updateStatus(status){
        return(
            instance.put(`profile/status`,{status})
        )
    }
}
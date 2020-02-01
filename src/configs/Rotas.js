import HomeView from '../views/homeView/Home'
import UserView from '../views/userView/User'

export default [
    {        
        id: 1, 
        path: '/', 
        label: 'Home',
        view: HomeView
    },
    {        
        id: 2, 
        path: '/user', 
        label: 'User',
        view: UserView
    }
]
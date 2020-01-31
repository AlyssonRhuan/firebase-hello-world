import HomeView from '../views/Home'
import UserView from '../views/User'

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
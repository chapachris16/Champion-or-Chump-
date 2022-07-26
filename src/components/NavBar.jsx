import { Link } from "react-router-dom"
import * as usersService from '../utilities/users-service'
export default function NavBar({user, setUser}){
    // Add the following function
    function handleLogOut() {
        // Delegate to the users-service
        usersService.logOut()
        // Update the state will also cause a re-render
        setUser(null)
    }
    return (
        <nav>
            <Link to='/posts'>Posts</Link>
            &nbsp; | &nbsp;
            <Link to='/posts/create'>Create Posts</Link>
            &nbsp; | &nbsp;
            Welcome, {user.name}
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}
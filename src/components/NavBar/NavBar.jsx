import { Link } from "react-router-dom"
import * as usersService from '../../utilities/users-service'
import { Navbar, Container } from "react-bootstrap"
import './NavBar.css'
export default function NavBar({user, setUser}){
    // Add the following function
    function handleLogOut() {
        // Delegate to the users-service
        usersService.logOut()
        // Update the state will also cause a re-render
        setUser(null)
    }
    return (
        <Navbar className="nav" bg='secondary'expand='lg'>
            <Container>
              Welcome, {user.name}
            &nbsp; | &nbsp;<Link className="link" to='/posts'>Posts</Link>
            &nbsp; | &nbsp;
            <Link className='link'to='/posts/create'>Create Posts</Link>
            &nbsp; | &nbsp;
          
            <Link className='link'to="" onClick={handleLogOut}>Log Out</Link>
            </Container>
        </Navbar>
    )
}
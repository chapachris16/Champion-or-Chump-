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
            <div className='siteName'>The Social Corner</div> &nbsp;| &nbsp; &nbsp;
            Welcome, {user.name} &nbsp; &nbsp;
            &nbsp; | &nbsp;<Link className="link" to='/posts'>All Posts</Link>
            &nbsp; | &nbsp;<Link className="link" to='/posts/gaming'>Gaming Posts</Link>
            &nbsp; | &nbsp;<Link className="link" to='/posts/cars'>Car Posts</Link>
            &nbsp; | &nbsp;<Link className="link" to='/posts/life'>Life Posts</Link>
            &nbsp; | &nbsp;
            <Link className='link'to='/posts/create'>Create Posts</Link>
            &nbsp; | &nbsp;
          
            <Link className='link'to="" onClick={handleLogOut}>Log Out</Link>
            </Container>
        </Navbar>
    )
}
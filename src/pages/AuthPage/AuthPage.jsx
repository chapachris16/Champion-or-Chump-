import LoginForm from "../../components/LogInForm"
import SignUpForm from "../../components/SignUpForm"

export default function AuthPage({setUser}) {
    return (
        <main>
            <h1>AuthPage</h1>
            <SignUpForm setUser={setUser}/>
            <LoginForm setUser={setUser}/>
        </main>
    )
}
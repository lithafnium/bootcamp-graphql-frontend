import React, {useState, useEffect} from 'react'; 
import {Container, Header, Search, Content, BookCard, BookAdd, addButton, LoginContainer} from './styles'

import {useMutation} from '@apollo/react-hooks'
import {LOGIN} from './graphql'; 


const Login = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [login] = useMutation(LOGIN, {
        variables: {
            email, 
            password
        },  
        onCompleted({ login: {token}}){
            localStorage.setItem('token', token);
            window.location.href = "/";
        }
            //localStorage.setItem('token', token),
        
    })

    useEffect(() => {
        localStorage.clear(); 
    }, [])

   
    

    return(
        <LoginContainer>        
            <BookAdd>
                <h2>Login</h2>
                <p>Email</p>
                <Search placeholder = "Email" onChange = {(e) => setEmail(e.target.value)}></Search>
                <p>Password</p>
                <Search placeholder = "Password" onChange = {(e) => setPassword(e.target.value)}></Search>
                <button style = {{
                    backgroundColor: "#4285F4",
                    color: "white", 
                    fontSize: "1.05rem",
                    padding: "10px 30px 10px 30px" ,
                    border: "none",
                    borderRadius: "3px",
                    display: "block"}} onClick = {login}>Login</button>
        </BookAdd>
        </LoginContainer>

    )
}

export default Login;
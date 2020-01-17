import styled from "styled-components"; 

export const Container = styled.div`
    padding: 40px;
    font-family: "Lucida Console", Monaco, monospace;
    text-align: center; 
    transition: 0.3s; 
`

export const Header = styled.div`
    display: flex; 
    align-Items: center;
    justify-content: center;
`

export const Search = styled.input`
    width: 500px;
    padding: 10px 10px 5px 10px;
    background-color: #fff;
    border: none;
    border-bottom: 2px solid gray;
    margin-bottom: 20px; 
`
export const Content = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    justify-content: center; 
    transition: 0.3s; 
`

export const BookCard = styled.div`
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    background-color: #fff;
    padding: 20px;
    margin: 20px 40px 20px 0px;
    display: block;
    width: 300px;
    border-radius: 3px;
    transition: 0.3s; 
`

export const BookAdd = styled.div`
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    background-color: #fff;
    padding: 30px;
    margin: 20px 40px 20px 20px;
    display: block;
    border-radius: 3px;
    width: fit-content;
`

export const LoginContainer = styled.div`
    font-family: "Lucida Console", Monaco, monospace;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	display: flex;
	align-items: center;
    justify-content: center; 
`

// export const addButton = styled.button`
//     background: #4285F4;
//     width: 500px; 
// `
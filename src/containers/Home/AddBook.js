import React, {useState, useEffect} from 'react'
import {useQuery, useMutation} from '@apollo/react-hooks'
import {GET_BOOKS, ADD_BOOK } from './graphql'
import {Container, Header, Search, Content, BookCard, BookAdd, addButton} from './styles'

const AddBook = () => {

    const[title, setTitle] = useState(""); 
    const[publisherId, setPublisher] = useState(""); 
    const[authorId, setAuthor] = useState(""); 

    const [addBook] = useMutation(ADD_BOOK, 
        {
            variables: {
                addBookInput:{
                    title: {title},
                    language: "en",
                    authorId: "b366a6ed-1088-48ba-b7ea-b5fca49c26d1",
                    publisherId: "c60ec51d-73e1-4dae-9473-276903cc442e"
                }
            }
        },
        {refetchQueries: () => ({query: GET_BOOKS})},
        {
        update: (client, { data: { addBook } }) => {
        try {
            const data = client.readQuery({ query: GET_BOOKS })
            data.books = [...data.books, addBook]
            client.writeQuery({ query: GET_BOOKS, data })
        } catch (error) {
            // do nothing or display error state

        }
    }
    })
    

    return(
        <BookAdd>
            <h2>Add Book:</h2>
            <p style = {{margin: "0px",  marginRight: "20px"}}>Book Title:</p>
            <Search type = "text"></Search>
            <p style = {{margin: "0px",  marginRight: "20px"}}>Book Author:</p>
            <Search type = "text"></Search>
            <p style = {{margin: "0px",  marginRight: "20px"}}>Book Publisher:</p>
            <Search type = "text"></Search>
            <button style = {{
                    backgroundColor: "#4285F4",
                    color: "white", 
                    fontSize: "1.05rem",
                    padding: "10px 30px 10px 30px" ,
                    border: "none",
                    borderRadius: "3px",
                    display: "block"}}>Add</button>

        </BookAdd>
    ); 

}

export default AddBook
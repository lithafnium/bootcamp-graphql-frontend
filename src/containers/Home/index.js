import React, {useState, useEffect} from 'react'
import {useQuery} from '@apollo/react-hooks'
import {GET_BOOKS, ADD_BOOK, LOGIN } from './graphql'
import {Container, Header, Search, Content, BookCard} from './styles'
import AddBook from './AddBook'
import Login from './Login'

const Home = () => {
    const {loading, error, data } = useQuery(GET_BOOKS); 
    const [search, searchBook] = useState("");
    const [allBooks, setBooks] = useState([]); 
   
    if (loading) return <h2>Loading</h2>
    if(error) {
        console.log(error); 
        return <h2>error</h2> 
    }
    let books = []; 
    let renderB = books; 
    
    data.allBooks.forEach((b) => books.push(b)); 
    if(allBooks.length === 0 && search.length === 0){
        console.log("allbooks")
        renderB = books; 
    } else renderB = allBooks; 
  
    let colors = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"]; 

    function filterSearches(e){
        searchBook(e.target.value)
        let newList = []; 
        if (e.target.value !== "") {
            newList = books.filter(item => {
                const lc = item.title.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            })
        } else {
            newList = books; 
        }
        newList = [...new Set(newList)]
        setBooks(newList); 
    } 

    return(
        <Container>
            
            {/* <AddBook/> */}
            <Header>
                <p style = {{margin: "0px",  marginRight: "20px"}}>Search Book:</p>
                <Search type = "text"value={search} onChange={e => filterSearches(e)}></Search>
            </Header>
            <h1>Books</h1>

            <Content>
                {renderB.map(({id, title, publisher, author}, index) => 
                    <BookCard style = 
                        {{borderLeft: "5px solid" + colors[index%4] }}>
                        <h2 key = {id}> Title: {title}</h2>
                        <p>Publisher: {publisher.company}</p>
                        <p>Author: {author.firstName} {author.lastName}</p>
                    </BookCard>
                )}
            </Content>
        </Container>
    );
}

export default Home

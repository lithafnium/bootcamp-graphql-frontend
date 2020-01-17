import gql from 'graphql-tag'

export const LOGIN = gql`
    mutation login($email:String!, $password:String!){
        login(email:$email, password:$password){
            token
          	user{
              firstName
              lastName
            }
        }
    }
`

export const GET_BOOKS = gql`
 	query getBooks{
        allBooks{
            id
            title
            publisher{
                company
            }
            author{
                firstName
                lastName
            }
        }
    }
    `
//export default GET_BOOKS
export const ADD_BOOK = gql`
    mutation addBook($addBookInput:CreateBookInput!){
        createBook(input:$addBookInput){
            id
            title
            language
            author{
                firstName
                lastName
                age
            }
        }
    }
`

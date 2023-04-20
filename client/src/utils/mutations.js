// importing graph ql with the from Apollo - Reference activity 15
import { gql } from '@apollo/client';


// mutation to be imported to other from for User Login
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token user {_id username
}
}
}
`;

// mutation to be imported to other files for adding a user

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token user {_id username
}
}
}
`;

// mutation to be imported to other files for saving a book

export const SAVE_BOOK = gql`
mutation saveBook($input: BookInput) {
    saveBook(input: $input) {_id username bookCount savedBooks {
        bookId
        authors
        description
        title
        image
        link
}
}
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {id username bookCount savedBooks {
        bookId
        authors
        description
        title
        image
        link
}
}
}
`;
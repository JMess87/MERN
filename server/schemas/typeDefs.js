const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    # Add a queryable field to retrieve an array of Book objects
    savedBooks: [Book]
}

type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

input BookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    # Because we have the context functionality in our resolvers.js Query function in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    saveBook(input: BookInput): User
    removeBook(bookId: String!): User
}
`

module.exports = typeDefs;
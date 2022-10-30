const { gql } = require('apollo-server-express');

module.exports = gql`
    type User {
        id: ID
        username: String
        email: String
        firstName: String
        lastName: String
        password: String
        createdAt: String
    }
    input RegisterInput {
        username: String
        email: String
        firstName: String
        lastName: String
        password: String
    }

    type Query {
        getUserById(ID: ID!): User
        getUsers: [User]
    }

    type Mutation {
        register(registerInput: RegisterInput!): User!
        deleteAll: Int
    }
`;

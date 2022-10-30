const UserResolver = require('./UserResolver');

module.exports = {
    Query: {
        ...UserResolver.Query,
    },
    Mutation: {
        ...UserResolver.Mutation,
    },
};

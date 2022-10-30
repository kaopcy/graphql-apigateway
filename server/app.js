const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
// /* -------------------------------- constants ------------------------------- */
const PORT = process.env.SERVER_PORT || 3000;
const MONGODB = 'mongodb://localhost:27017/mongo';

// /* ------------------------------- import libs ------------------------------ */
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

// /* ----------------------------- import modules ----------------------------- */
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const router = require('./router');

// /* ------------------------------- middleware ------------------------------- */
const app = express();
app.use(express.json());
app.use(router);

// /* ----------------------------- initial server ----------------------------- */
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

(async () => {
    try {
        await server.start();
        server.applyMiddleware({ app });
        await mongoose.connect(MONGODB);
        await app.listen(PORT, () => {
            console.log(`server running at port ${PORT} ${server.graphqlPath}`);
        });
    } catch (error) {
        console.log(error);
    }
})();

// module.exports = {
//     app,
// };

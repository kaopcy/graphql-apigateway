const UserModel = require('../models/User');

module.exports = {
    Query: {
        getUserById: async (_, { ID }) => {
            if (!ID) return;
            return await UserModel.findById(ID);
        },
        getUsers: async () => {
            return await UserModel.find().sort();
        },
    },
    Mutation: {
        register: async (_, { registerInput }) => {
            const response = await UserModel.create({
                username: registerInput.username,
                firstName: registerInput.firstName,
                lastName: registerInput.lastName,
                password: registerInput.password,
                email: registerInput.email,
                createdAt: '12312312',
            });
            await response.save();
            console.log(response);

            return {
                id: response.id,
                ...response._doc,
            };
        },
        deleteAll: async () => {
            const response = await UserModel.deleteMany({});
            console.log(response);
            return response.deletedCount;
        },
    },
};

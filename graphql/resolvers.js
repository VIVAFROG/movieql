const nicolas = {
    name: "Nicolas",
    age: 10,
    gender: "female"
};

const resolvers = {
    Query: {
        person: () => nicolas
    }
};

export default resolvers
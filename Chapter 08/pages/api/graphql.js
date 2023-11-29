import { ApolloServer, gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book!]!
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!): Book!
    updateBook(id: ID!, title: String, author: String): Book
    deleteBook(id: ID!): Book
  }
`;

const books = [
  { id: '1', title: 'Book 1', author: 'Author 1' },
  { id: '2', title: 'Book 2', author: 'Author 2' },
];

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => book.id === args.id),
  },
  Mutation: {
    addBook: (parent, args) => {
      const newBook = { id: String(books.length + 1), ...args };
      books.push(newBook);
      return newBook;
    },
    updateBook: (parent, args) => {
      const index = books.findIndex((book) => book.id === args.id);
      if (index >= 0) {
        const updatedBook = { ...books[index], ...args };
        books[index] = updatedBook;
        return updatedBook;
      }
      return null;
    },
    deleteBook: (parent, args) => {
      const index = books.findIndex((book) => book.id === args.id);
      if (index >= 0) {
        const deletedBook = books[index];
        books.splice(index, 1);
        return deletedBook;
      }
      return null;
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

let handler;

async function getHandler() {
  if (!handler) {
    await apolloServer.start();
    handler = apolloServer.createHandler({ path: '/api/graphql' });
  }
  return handler;
}

export default async function graphqlHandler(req, res) {
  const apolloHandler = await getHandler();
  return apolloHandler(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Listing {
    id: ID!
    title: String!
    image: String!
    address: String!
    price: Int!
    numOfGuests: Int!
    numOfBeds: Int!
    numOfBaths: Int!
    rating: Int!
  }

  type Person {
    id: ID!
    name: String!
    age: Int!
  }

  type Query {
    listings: [Listing!]!
    persons: [Person!]!
  }

  type Mutation {
    deleteListing(id: ID): Listing!
    addPerson(id: String, name: String, age: Int): Person!
  }
`;

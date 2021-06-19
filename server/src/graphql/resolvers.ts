import { IResolvers } from "apollo-server-express";
import { listings } from "../listings";
import { persons } from "../persons";

export const resolvers: IResolvers = {
  Query: {
    listings: () => {
      return listings;
    },
    persons: () => {
      return persons;
    },
  },
  Mutation: {
    deleteListing: (_root: undefined, { id }: { id: string }) => {
      for (let i = 0; i < listings.length; i++) {
        if (listings[i].id === id) {
          return listings.splice(i, 1)[0];
        }
      }

      throw new Error("failed to delete listing");
    },
    addPerson: (
      _root: undefined,
      { id, name, age }: { id: string; name: string; age: number }
    ) => {
      if (id && name && age) {
        persons.push({
          id,
          name,
          age,
        });
        return persons[persons.length - 1];
      } else {
        throw new Error("failed to create person");
      }
    },
  },
};

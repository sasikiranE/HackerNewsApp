import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    getStories: (_, { type }, { dataSources }) => {
      return dataSources.storyAPI.getStories(type);
    },
  },
};

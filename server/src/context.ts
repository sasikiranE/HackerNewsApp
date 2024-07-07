import { StoryAPI } from "./datasources/story-api";

export type DataSourceContext = {
  dataSources: {
    storyAPI: StoryAPI;
  };
};

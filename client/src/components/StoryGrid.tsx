import { gql, useQuery } from "@apollo/client";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { Story, StoryType } from "../__generated__/graphql";
import StoryCard from "./StoryCard";

const STORIES = gql(`
    query GetStories($type: StoryType) {
      getStories(type: $type) {
        id
        by
        title
        kids
        time
        score
        url
      }
    }
  `);

const StoryGrid = () => {
  const { loading, error, data } = useQuery(STORIES, {
    variables: { type: StoryType.New }, // Here, 'type' is the variable name and 'top' is the value
  });
  if (loading) return <Spinner></Spinner>;
  if (error) return `Error! ${error.message}`;
  return (
    <SimpleGrid columns={1} spacing={10} padding="10px">
      {data?.getStories?.map((story: Story) => (
        <StoryCard story={story} />
      ))}
    </SimpleGrid>
  );
};

export default StoryGrid;

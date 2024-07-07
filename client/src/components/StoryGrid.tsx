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

const StoryGrid: React.FC<{ type: string }> = ({ type }) => {
  const { loading, error, data } = useQuery(STORIES, {
    variables: { type: type }, // Here, 'type' is the variable name and 'top' is the value
  });
  if (loading) return <Spinner></Spinner>;
  if (error) return `Error! ${error.message}`;
  return (
    <SimpleGrid columns={1} spacing={2} padding="10px">
      {data?.getStories?.map((story: Story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </SimpleGrid>
  );
};

export default StoryGrid;

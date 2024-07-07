import { gql } from "./__generated__";
import { useQuery } from "@apollo/client";
import { StoryType } from "./__generated__/graphql";
import { Button, Spinner } from "@chakra-ui/react";

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

function App() {
  const { loading, error, data } = useQuery(STORIES, {
    variables: { type: StoryType.Top }, // Here, 'type' is the variable name and 'top' is the value
  });
  if (loading) return <Spinner></Spinner>;
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <Button color={"blue"}>Top Stories : </Button>
      <ul>
        {data?.getStories?.map((story) => (
          <li key={story.id}>{JSON.stringify(story)}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

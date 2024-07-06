import { gql } from "./__generated__";
import { useQuery } from "@apollo/client";
import { StoryType } from "./__generated__/graphql";

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
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <h1>Top Stories : </h1>
      <ul>
        {data?.getStories?.map((story) => (
          <li key={story.id}>{JSON.stringify(story)}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

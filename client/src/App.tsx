import { useState } from "react";
import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import StoryGrid from "./components/StoryGrid";
import { StoryType } from "./__generated__/graphql";

export const storyTypes = [
  StoryType.Best,
  StoryType.Ask,
  StoryType.Job,
  StoryType.New,
  StoryType.Show,
  StoryType.Top,
];

function App() {
  const [selectedStoryType, setSelectedStoryType] = useState<string>(
    StoryType.Best
  );
  return (
    <>
      <Grid templateAreas={`"nav" "main"`}>
        <GridItem bg={useColorModeValue("gray.100", "gray.700")} area={"nav"}>
          <NavBar
            types={storyTypes}
            onSelectType={(type) => setSelectedStoryType(type)}
            selectedType={selectedStoryType}
          />
        </GridItem>
        <GridItem area={"main"}>
          <StoryGrid type={selectedStoryType} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

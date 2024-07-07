import {
  Grid,
  GridItem,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import StoryGrid from "./components/StoryGrid";

function App() {
  return (
    <>
      <Grid templateAreas={`"nav" "main"`}>
        <GridItem bg={useColorModeValue("gray.100", "gray.900")} area={"nav"}>
          <NavBar />
        </GridItem>
        <GridItem area={"main"}>
          <StoryGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

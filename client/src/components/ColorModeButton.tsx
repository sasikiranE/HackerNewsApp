import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, HStack, useColorMode, Text } from "@chakra-ui/react";

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <HStack>
        <Text>Toggle theme</Text>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </HStack>
    </>
  );
};

export default ColorModeButton;

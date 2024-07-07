import { Badge, Box, Heading, Text } from "@chakra-ui/react";
import type { Story } from "../__generated__/graphql";

const StoryCard: React.FC<{ story: Story }> = ({ story }) => {
  const { title, score, by, kids, url, time } = story;
  const formattedTime = time ? new Date(time * 1000).toLocaleDateString() : "";

  const handleClick = () => {
    if (url) {
      window.open(url, "_blank"); // Opens URL in a new tab
    }
  };

  return (
    <Box boxShadow="dark-lg" borderRadius="lg" overflow="hidden" p="4" mb="4">
      <Heading as="h3" size="md" mb="2">
        {title}{" "}
        {url && (
          <Text
            onClick={handleClick}
            cursor="pointer"
            as="span"
            fontSize="sm"
            color="gray.400"
          >
            ({url})
          </Text>
        )}
      </Heading>
      {by && time && (
        <Text fontSize="sm" color="gray.500" mb="2">
          by {by} | {formattedTime}
        </Text>
      )}
      {
        <Text fontSize="sm" mb="2">
          Score: {score === null ? 0 : score}
        </Text>
      }
      <Badge colorScheme="green">
        {kids === null ? 0 : kids?.length} Comments
      </Badge>
    </Box>
  );
};

export default StoryCard;

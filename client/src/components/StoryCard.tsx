import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import type { Story } from "../__generated__/graphql";

const StoryCard: React.FC<{ story: Story }> = ({ story }) => {
  const { id, title, score, by, kids, url } = story;
  return (
    <Card boxShadow="lg" rounded="md">
      <CardHeader>{title}</CardHeader>
    </Card>
  );
};

export default StoryCard;

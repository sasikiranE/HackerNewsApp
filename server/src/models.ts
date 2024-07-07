/*

    id: Int!
    "The username of the story's author."
    by: String
    "The title of the story."
    title: String
    "The ids of the story's comments, in ranked display order."
    kids: [Int]
    "Creation date of the story, in Unix Time."
    time: Int
    "The story's score."
    score: Int
    "The URL of the story."
    url: String
*/

export type StoryModel = {
  id: number;
  by: string;
  title: string;
  kids: number[];
  time: number;
  score: number;
  url: string;
};

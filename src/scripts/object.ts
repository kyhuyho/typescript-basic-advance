/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
const student1: {
  name: string;
  age: number;
  school: string;
  score: number;
  hobbies?: string;
} = {
  name: "Heros",
  age: 21,
  school: "DHBKDN",
  score: 100,
  // hobbies: "badminton",
};
const student2: {
  name: "Heros";
  age: number;
} = {
  name: "Heros",
  age: 21,
};
// special
const student8: Record<string, any> = {
  name: "Heros",
};

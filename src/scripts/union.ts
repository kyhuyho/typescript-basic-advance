/* eslint-disable @typescript-eslint/no-unused-vars */
const information: (string | number | boolean)[] = [
  "badminton",
  "soccer",
  "tennis",
  100,
  false,
];
const students2: {
  name: string;
  age: number;
  score: number | string;
  extra?:
    | {
        name: string;
      }
    | {
        school: string;
      };
}[] = [
  {
    name: "Heros",
    age: 21,
    score: 10,
    extra: {
      name: "ABC",
    },
  },
  {
    name: "Huy",
    age: 21,
    score: "100",
    extra: {
      school: "DHBKDN",
      name: "CDE",
    },
  },
];

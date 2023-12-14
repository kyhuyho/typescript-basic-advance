/* eslint-disable @typescript-eslint/no-unused-vars */
const students3: {
  name: string;
  age: number;
  score: number | string;
  extra?: {
    name: string;
  } & {
    school: string;
  };
}[] = [
  {
    name: "Heros",
    age: 21,
    score: 10,
    extra: {
      name: "ABC",
      school: "BKDN",
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

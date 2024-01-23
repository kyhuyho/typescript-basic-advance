/* eslint-disable @typescript-eslint/ban-types */
function identity<A>(arg: A): A {
  return arg;
}
identity<number>(2);
identity<string>("2");
function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}
pair(1, 2);
pair("10", true);
pair(10, [1, 2, 3, 4]);

function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}
logLength("123");
// logLength(1); error
const student = {
  name: "Heros",
  age: 21,
  school: "DHBKDN",
  year: 2002,
};
function logObjValue<O extends {}, K extends keyof O>(obj: O, key: K): void {
  console.log(obj[key]);
}
logObjValue(student, "year");

/* eslint-disable @typescript-eslint/no-unused-vars */
// ternary operator
const number = 100;
const isTrue = number >= 100 ? true : false;
// type ConditionalType = SomeType extends OtherType ? TrueType : FalseType
type Check<T> = T extends string ? "string" : "non-string";
export type IsString = Check<string>;
export type IsNonString = Check<number>;
function logObject(x: number, y: string) {}
type Z = Parameters<typeof logObject>;
type X = Extract<string | string[], string[]>; // string[]
type Y = Exclude<string | string[], string[]>; // string

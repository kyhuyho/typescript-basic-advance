/* eslint-disable @typescript-eslint/no-unused-vars */
// ternary operator
const number = 100;
const isTrue = number >= 100 ? true : false;
// type ConditionalType = SomeType extends OtherType ? TrueType : FalseType
type Check<T> = T extends string ? "string" : "non-string";
export type IsString = Check<string>;
export type IsNonString = Check<number>;
// Parameters: trả ra 1 mảng các tham số trong function
function logObject(x: number, y: string) {}
type Z = Parameters<typeof logObject>;
// Extract
type X = Extract<string | string[], string[]>; // string[]
// Extract
type Y = Extract<string | string[], string[]>; // string
// ReturnType: return type của function
function sum(a: number, b: number): number {
  return a + b;
}
function logMyName(): string {
  return "Heros";
}
type SumF = ReturnType<typeof sum>;
type LogMyNameF = ReturnType<typeof logMyName>;

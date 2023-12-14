/* eslint-disable @typescript-eslint/no-unused-vars */
{
  let information: readonly [
    count: number,
    username: string,
    isAdmin: boolean
  ] = [100, "200", true];
  information = [1, "ss", false];
  // information = ["1", "ss", false]; error
  // information.push(100); error
}

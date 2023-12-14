// typeof: sử dụng vào biến để kiểm tra type của 1 biến đó
console.log(typeof 5);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function checkTypeOf(value: any) {
  if (typeof value === "number") {
    return 100 + value;
  }
  return null;
}
checkTypeOf(20);
// in
type A = {
  x: number;
};
type B = {
  y: string;
};
type C = A | B;
function checkInfo(info: C) {
  if ("x" in info) {
    console.log(info.x);
  }
  if ("y" in info) {
    {
      console.log(info.y);
    }
  }
}
checkInfo({
  x: 2,
});

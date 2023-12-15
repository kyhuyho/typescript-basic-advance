{
  // Khi chúng ta sử dụng dấu : để khai báo type thì cái type nó sẽ mạnh hơn cái value
  // const numericId: string = 123;
  // as const: chỉ đọc ko cho thêm xóa sửa
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scores = [1, 2, 3, 4, 5] as const;
  console.log(scores);
  // scores2.push(6); error
  // as type: nghĩa là chúng ta đang nói dối vs TS
  type User = {
    id: number;
    name: {
      first: string;
      last: string;
    };
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const newUser = {} as User;
  console.log(newUser);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const count = 100 as unknown as string;
  console.log(count);
  // const count2 = 100 as string; error

  // satisfies: sử dụng thì cái value sẽ hơn type
  // const routes: Record<string, any> = {
  //   "/": "homepage",
  //   "/about": "About page",
  //   "/dashboard": "Dashboard page",
  // };

  const routes = {
    "/": "homepage",
    "/about": "About page",
    "/dashboard": "Dashboard page",
  } satisfies Record<string, any>;
  // console.log(routes["/heros"]); error
}

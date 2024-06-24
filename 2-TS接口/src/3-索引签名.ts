export default {};

// 索引签名: [props: string]: any

interface IFullName {
  firstName: string;
  lastName: string;
  age: number;
}

// 注意我们一旦定义了某个接口，就确定了属性的个数和类型，在使用的时候必须保证一模一样

// 少一个或者少多个的情况（使用可选属性）
// interface IFullName {
//   firstName: string;
//   lastName: string;
//   age?: number;
// }
// let goddess1: IFullName = { firstName: '邱', lastName: '淑贞'};

// 多一个或者多多个
// 方式一 用变量接收(不推荐)
let info = { firstName: '邱', lastName: '淑贞', age: 20, abc: 'abc' };
let goddess2: IFullName = info;

// 方式二 使用类型断言
let goddess3: IFullName = <IFullName>{
  firstName: '邱',
  lastName: '淑贞',
  age: 20,
  abc: 'abc',
};
let goddess4: IFullName = {
  firstName: '邱',
  lastName: '淑贞',
  age: 20,
  abc: 'abc',
} as IFullName;

// 方式三 使用索引签名
interface IFullName {
  firstName: string;
  lastName: string;
  age: number;
  [props: string]: any;
}
let goddess5: IFullName = {
  firstName: '邱',
  lastName: '淑贞',
  age: 20,
  abc: 'abc',
  123: 'a'
};
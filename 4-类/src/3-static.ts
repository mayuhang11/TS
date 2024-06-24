export default {};

// static
class Fn {
  static age = 18;
  static say() {
     // static声明的函数中this指向Fn 而在constructor中的this指向被创建出来的实例
    console.log('我今年' + this.age + '岁了');
  }
}

Fn.say();


// 单例模式（某些场景下可能只允许创建一个实例对象）
class User {
  private constructor(){}

  private static _user: User | undefined

  static createUser() {
    if(this._user) {
      return this._user
    }else {
      this._user = new User()
      return this._user
    }
  }
}

const u1 = User.createUser()
const u2 = User.createUser()
console.log(u1 === u2);

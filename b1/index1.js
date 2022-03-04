class Animal {
    constructor(name) {
      this.name = name;
    }
  }

  class Rabbit extends Animal { // báo vs JS là Rabbit là class con của Animal thông qua keyword Extend
    constructor(name) {
      super(name); // dùng super() để tạo lket từ class Rabbit tới class Animal
      // dùng super() để biết Animal class mà Rabbit class muốn extend
      // context của Rabbit class mới có thể đc tạo ra chứa mọi thứ của Animal class
      this.name = name;
      this.created = Date.now();
    }
  }

  let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
  alert(rabbit.name);

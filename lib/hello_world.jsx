import "js/nodejs.jsx";

class HelloWorld {

  function hello(arg : string) :string {
    return "hello " + arg;
  }

  function helloAsync(arg : string, cb:(string)->void) :void {
    process.nextTick(()->{
      cb("hello " + arg);
    });
  }

  function sum(a1 : int, a2 : int) : int {
    return a1 + a2;
  }
}

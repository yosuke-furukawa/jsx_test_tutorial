import "hello_world.jsx";
import "test-case.jsx";

class _Test extends TestCase {

  function testHello() : void {
    var helloWorld = new HelloWorld();
    var answer = helloWorld.hello("test");
    this.expect(answer).toBe("hello test");
  }

  function testHelloAsync() : void {
    this.async((async : AsyncContext)->{
      var helloWorld = new HelloWorld();
      helloWorld.helloAsync("test", function(answer){
        this.expect(answer).toBe("hello test");
        async.done();
      });
    }, 10000);
  }

  function testSum() : void {
      var helloWorld = new HelloWorld();
      var answer = helloWorld.sum(1, 2);
      this.expect(answer).toBe(3);
      this.expect(answer, "expect 3").toBe(3);
      this.expect(answer).toBeGT(2);
      this.expect(answer).toBeLT(4);
      this.expect(answer).toBeGE(3);
      this.expect(answer).toBeLE(3);
  }

  function testRegex() : void {
    var helloWorld = new HelloWorld();
    var answer = helloWorld.hello("test");
    this.expect(answer).toMatch(/^hello te.*t$/);
    this.expect(answer).notToMatch(/^te.*t hello$/);
  }

  function testArray() : void {
    this.expect([1,2,3]).toEqual([1,2,3]);
    this.expect(["a",2,3]).toEqual(["a",2,3]);
  }

  function testMap() : void {
    this.expect(this.equals({"a":"b"}, {"a":"b"})).toBe(true);
  }

  function testPass() : void {
    try {
      throw new Error("avoid fail");
      this.fail("Should not be reached here");
    } catch (e : Error) {
      this.pass("Success!");
    }
  }


  override function setUp() : void {
    log "SET UP call before test : " + this._currentName;
  }

  override function tearDown() : void {
    log "TEAR DOWN call after test" + this._currentName;
  }
}

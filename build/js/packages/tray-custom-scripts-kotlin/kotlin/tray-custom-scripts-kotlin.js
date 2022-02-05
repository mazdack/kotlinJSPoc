(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['tray-custom-scripts-kotlin'] = factory(typeof this['tray-custom-scripts-kotlin'] === 'undefined' ? {} : this['tray-custom-scripts-kotlin']);
}(this, function (_) {
  'use strict';
  NodeJsOutput_0.prototype = Object.create(BaseOutput.prototype);
  NodeJsOutput_0.prototype.constructor = NodeJsOutput_0;
  BufferedOutput_0.prototype = Object.create(BaseOutput.prototype);
  BufferedOutput_0.prototype.constructor = BufferedOutput_0;
  BufferedOutputToConsoleLog_0.prototype = Object.create(BufferedOutput_0.prototype);
  BufferedOutputToConsoleLog_0.prototype.constructor = BufferedOutputToConsoleLog_0;
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = {
    simpleName: 'Unit',
    kind: 'object',
    interfaces: []
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  var output;
  function BaseOutput() {
  }
  BaseOutput.prototype.println_sv8swh_k$ = function () {
    this.print_qi8yb4_k$('\n');
  };
  BaseOutput.prototype.println_qi8yb4_k$ = function (message) {
    this.print_qi8yb4_k$(message);
    this.println_sv8swh_k$();
  };
  BaseOutput.$metadata$ = {
    simpleName: 'BaseOutput',
    kind: 'class',
    interfaces: []
  };
  function NodeJsOutput_0(outputStream) {
    BaseOutput.call(this);
    this._outputStream = outputStream;
  }
  NodeJsOutput_0.prototype.print_qi8yb4_k$ = function (message) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = String(message);
      break $l$block;
    }
    var messageString = tmp$ret$0;
    this._outputStream.write(messageString);
  };
  NodeJsOutput_0.$metadata$ = {
    simpleName: 'NodeJsOutput',
    kind: 'class',
    interfaces: []
  };
  function BufferedOutputToConsoleLog_0() {
    BufferedOutput_0.call(this);
  }
  BufferedOutputToConsoleLog_0.prototype.print_qi8yb4_k$ = function (message) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = String(message);
      break $l$block;
    }
    var s = tmp$ret$0;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_nativeLastIndexOf_0 = s;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp0_nativeLastIndexOf_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1.lastIndexOf('\n', 0);
      break $l$block_1;
    }
    var i = tmp$ret$2;
    if (i >= 0) {
      var tmp0_this = this;
      var tmp = tmp0_this._get_buffer__0_k$();
      var tmp$ret$4;
      $l$block_3: {
        var tmp1_substring_0 = s;
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = tmp1_substring_0;
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3.substring(0, i);
        break $l$block_3;
      }
      tmp0_this._set_buffer__a4enbm_k$(tmp + tmp$ret$4);
      this.flush_sv8swh_k$();
      var tmp$ret$6;
      $l$block_5: {
        var tmp2_substring_0 = s;
        var tmp3_substring_0 = i + 1 | 0;
        var tmp$ret$5;
        $l$block_4: {
          tmp$ret$5 = tmp2_substring_0;
          break $l$block_4;
        }
        tmp$ret$6 = tmp$ret$5.substring(tmp3_substring_0);
        break $l$block_5;
      }
      s = tmp$ret$6;
    }var tmp1_this = this;
    tmp1_this._set_buffer__a4enbm_k$(tmp1_this._get_buffer__0_k$() + s);
  };
  BufferedOutputToConsoleLog_0.prototype.flush_sv8swh_k$ = function () {
    console.log(this._get_buffer__0_k$());
    this._set_buffer__a4enbm_k$('');
  };
  BufferedOutputToConsoleLog_0.$metadata$ = {
    simpleName: 'BufferedOutputToConsoleLog',
    kind: 'class',
    interfaces: []
  };
  function BufferedOutput_0() {
    BaseOutput.call(this);
    this._buffer = '';
  }
  BufferedOutput_0.prototype._set_buffer__a4enbm_k$ = function (_set___) {
    this._buffer = _set___;
  };
  BufferedOutput_0.prototype._get_buffer__0_k$ = function () {
    return this._buffer;
  };
  BufferedOutput_0.prototype.print_qi8yb4_k$ = function (message) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._buffer;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = String(message);
      break $l$block;
    }
    tmp._buffer = tmp_0 + tmp$ret$0;
  };
  BufferedOutput_0.$metadata$ = {
    simpleName: 'BufferedOutput',
    kind: 'class',
    interfaces: []
  };
  function println(message) {
    output.println_qi8yb4_k$(message);
  }
  function output$init$() {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        var isNode_2 = typeof process !== 'undefined' && process.versions && !!process.versions.node;
        tmp$ret$0 = isNode_2 ? new NodeJsOutput_0(process.stdout) : new BufferedOutputToConsoleLog_0();
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function test(input) {
    println('hello world');
    println('' + 'input is ' + input);
    return 'output';
  }
  function step(input) {
    println('hello world');
    println('' + 'step input is ' + input);
    return 'step output';
  }
  function main() {
    println(greeting('tray-custom-scripts-kotlin'));
  }
  function greeting(name) {
    return '' + 'Hello, ' + name;
  }
  output = output$init$();
  _.test = test;
  _.step = step;
  main();
  return _;
}));

//# sourceMappingURL=tray-custom-scripts-kotlin.js.map
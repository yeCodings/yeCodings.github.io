(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{454:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"_1-同步和异步的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-同步和异步的区别"}},[t._v("#")]),t._v(" 1. 同步和异步的区别？")]),t._v(" "),s("blockquote",[s("p",[t._v("同步，可以理解为在执行完一个函数或方法之后，一直等待系统返回值或消息，这时程序是处于阻塞的，\n只有接收到返回的值或消息后才往下执行其他的命令。")])]),t._v(" "),s("blockquote",[s("p",[t._v("异步，执行完函数或方法后，不必阻塞性地等待返回值或消息，只需要向系统委托一个异步过程，那么\n当系统接收到返回值或消息时，系统会自动触发委托的异步过程，从而完成一个完整的流程。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("同步指的是当一个进程在执行某个请求的时候，如果这个请求需要等待一段时间才能返回，那么这个\n进程会一直等待下去，直到消息返回为止再继续向下执行。\n\n异步指的是当一个进程在执行某个请求的时候，如果这个请求需要等待一段时间才能返回，这个时候\n进程会继续往下执行，不会阻塞等待消息的返回，当消息返回时系统再通知进程进行处理。\n")])])]),s("h3",{attrs:{id:"_2-什么是浏览器的同源政策"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是浏览器的同源政策"}},[t._v("#")]),t._v(" 2.  什么是浏览器的同源政策？")]),t._v(" "),s("blockquote",[s("p",[t._v("我对浏览器的同源政策的理解是，一个域下的 js 脚本在未经允许的情况下，不能够访问另一个域的\n内容。这里的同源的指的是两个域的协议、域名、端口号必须相同，否则则不属于同一个域。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("同源政策主要限制了三个方面\n\n第一个是当前域下的 js 脚本不能够访问其他域下的 cookie、localStorage 和 indexDB。\n\n第二个是当前域下的 js 脚本不能够操作访问操作其他域下的 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOM")]),t._v("。\n\n第三个是当前域下 ajax 无法发送跨域请求。\n\n同源政策的目的主要是为了保证用户的信息安全，它只是对 js 脚本的一种限制，并不是对浏览器的\n限制，对于一般的 img、或者script 脚本请求都不会有跨域的限制，这是因为这些操作都不会通过\n响应结果来进行可能出现安全问题的操作。\n")])])]),s("h3",{attrs:{id:"_3-如何解决跨域问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何解决跨域问题"}},[t._v("#")]),t._v(" 3. 如何解决跨域问题？")]),t._v(" "),s("p",[t._v("相关知识点：")]),t._v(" "),s("blockquote",[s("p",[t._v("1.通过 jsonp 跨域")])]),t._v(" "),s("blockquote",[s("p",[t._v("2.document.domain + iframe 跨域")])]),t._v(" "),s("blockquote",[s("p",[t._v("3.location.hash + iframe")])]),t._v(" "),s("blockquote",[s("p",[t._v("4.window.name + iframe 跨域")])]),t._v(" "),s("blockquote",[s("p",[t._v("5.postMessage 跨域")])]),t._v(" "),s("blockquote",[s("p",[t._v("6.跨域资源共享（CORS)")])]),t._v(" "),s("blockquote",[s("p",[t._v("7.nginx 代理跨域")])]),t._v(" "),s("blockquote",[s("p",[t._v("8.nodejs 中间件代理跨域")])]),t._v(" "),s("blockquote",[s("p",[t._v("9.WebSocket 协议跨域")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("）将 document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domain 设置为主域名，来实现相同子域名的跨域操作，这个时候主域名下的\n   cookie 就能够被子域名所访问。同时如果文档中含有主域名相同，子域名不同的 iframe 的话，\n   我们也可以对这个 iframe 进行操作。\n\n  如果是想要解决不同跨域窗口间的通信问题，比如说一个页面想要和页面的中的不同源的 iframe 进\n  行通信的问题，我们可以使用 location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash 或者 window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name 或者 postMessage 来解决。\n\n（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("）使用 location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash 的方法，我们可以在主页面动态的修改 iframe 窗口的 hash 值，然后\n  在 iframe 窗口里实现监听函数来实现这样一个单向的通信。因为在 iframe 是没有办法访问到不\n  同源的父级窗口的，所以我们不能直接修改父级窗口的 hash 值来实现通信，我们可以在 iframe \n  中再加入一个 iframe ，这个 iframe 的内容是和父级页面同源的，所以我们可以 window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent 来修改最顶级页面的 src，以此来实现双向通信。\n\n（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("）使用 window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name 的方法，主要是基于同一个窗口中设置了 window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name 后不同源的页面\n  也可以访问，所以不同源的子页面可以首先在 window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name 中写入数据，然后跳转到一个和父级\n  同源的页面。这个时候级页面就可以访问同源的子页面中 window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name 中的数据了，这种方式的\n  好处是可以传输的数据量大。\n\n（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("）使用 postMessage 来解决的方法，这是一个 h5 中新增的一个 api。通过它我们可以实现多\n  窗口间的信息传递，通过获取到指定窗口的引用，然后调用 postMessage 来发送信息，在窗口中\n  我们通过对 message 信息的监听来接收信息，以此来实现不同源间的信息交换。\n\n  如果是像解决 ajax 无法提交跨域请求的问题，我们可以使用 jsonp、cors、websocket 协议、\n  服务器代理来解决问题。\n\n（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("）使用 jsonp 来实现跨域请求，它的主要原理是通过动态构建 script  标签来实现跨域请求，\n  因为浏览器对 script 标签的引入没有跨域的访问限制 。通过在请求的 url 后指定一个回调函数，\n  然后服务器在返回数据的时候，构建一个 json 数据的包装，这个包装就是回调函数，然后返回给前\n  端，前端接收到数据后，因为请求的是脚本文件，所以会直接执行，这样我们先前定义好的回调函数就\n  可以被调用，从而实现了跨域请求的处理。这种方式只能用于 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" 请求。\n\n（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("）使用 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CORS")]),t._v(" 的方式，"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CORS")]),t._v(" 是一个 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("W3C")]),t._v(" 标准，全称是"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"跨域资源共享"')]),t._v("。"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CORS")]),t._v(" 需要浏览器和服务\n  器同时支持。目前，所有浏览器都支持该功能，因此我们只需要在服务器端配置就行。浏览器将 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CORS")]),t._v("\n  请求分成两类：简单请求和非简单请求。对于简单请求，浏览器直接发出 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CORS")]),t._v(" 请求。具体来说，就是\n  会在头信息之中，增加一个 Origin 字段。Origin 字段用来说明本次请求来自哪个源。服务器根据\n  这个值，决定是否同意这次请求。对于如果 Origin 指定的源，不在许可范围内，服务器会返回一个\n  正常的 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),t._v(" 回应。浏览器发现，这个回应的头信息没有包含 Access"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Allow"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Origin\n  字段，就知道出错了，从而抛出一个错误，ajax 不会收到响应信息。如果成功的话会包含一\n   Access"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 开头的字段。\n\n  非简单请求，浏览器会先发出一次预检请求，来判断该域名是否在服务器的白名单中，如果收到肯定\n  回复后才会发起请求。\n\n（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("）使用 websocket 协议，这个协议没有同源限制。\n\n（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("）使用服务器来代理跨域的访问请求，就是有跨域的请求操作时发送请求给后端，让后端代为请求，\n  然后最后将获取的结果发返回。\n")])])]),s("h3",{attrs:{id:"_4-模块化开发怎么做"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-模块化开发怎么做"}},[t._v("#")]),t._v(" 4. 模块化开发怎么做？")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("我对模块的理解是，一个模块是实现一个特定功能的一组方法。在最开始的时候，js 只实现一些简单\n的功能，所以并没有模块的概念，但随着程序越来越复杂，代码的模块化开发变得越来越重要。\n\n由于函数具有独立作用域的特点，最原始的写法是使用函数来作为模块，几个函数作为一个模块，但是\n这种方式容易造成全局变量的污染，并且模块间没有联系。\n\n后面提出了对象写法，通过将函数作为一个对象的方法来实现，这样解决了直接使用函数作为模块的一\n些缺点，但是这种办法会暴露所有的所有的模块成员，外部代码可以修改内部属性的值。\n\n现在最常用的是立即执行函数的写法，通过利用闭包来实现模块私有作用域的建立，同时不会对全局\n作用域造成污染。\n")])])]),s("h3",{attrs:{id:"_5-js-的几种模块规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-js-的几种模块规范"}},[t._v("#")]),t._v(" 5. js 的几种模块规范？")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("js 中现在比较成熟的有四种模块加载方案。\n\n第一种是 CommonJS 方案，它通过 require 来引入模块，通过 module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports 定义模块的输出\n接口。这种模块加载方案是服务器端的解决方案，它是以同步的方式来引入模块的，因为在服务端文件都\n存储在本地磁盘，所以读取非常快，所以以同步的方式加载没有问题。但如果是在浏览器端，由于模块的\n加载是使用网络请求，因此使用异步加载的方式更加合适。\n\n第二种是 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AMD")]),t._v(" 方案，这种方案采用异步加载的方式来加载模块，模块的加载不影响后面语句的执行，所\n有依赖这个模块的语句都定义在一个回调函数里，等到加载完成后再执行回调函数。require"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js 实现\n了 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AMD")]),t._v(" 规范。\n\n第三种是 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CMD")]),t._v(" 方案，这种方案和 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AMD")]),t._v(" 方案都是为了解决异步模块加载的问题，sea"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js 实现了 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CMD")]),t._v("\n 规范。它和 require"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js的区别在于模块定义时对依赖的处理不同和对依赖模块的执行时机的处理不同。\n\n第四种方案是 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ES6")]),t._v(" 提出的方案，使用 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" 和 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" 的形式来导入导出模块。这种方案和上面\n三种方案都不同。\n")])])]),s("h3",{attrs:{id:"_6-amd-和-cmd-规范的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-amd-和-cmd-规范的区别"}},[t._v("#")]),t._v(" 6. AMD 和 CMD 规范的区别？")]),t._v(" "),s("p",[t._v("它们之间的主要区别有两个方面。")]),t._v(" "),s("blockquote",[s("p",[t._v("（1）第一个方面是在模块定义时对依赖的处理不同。AMD 推崇依赖前置，在定义模块的时候就要声明其\n依赖的模块。而 CMD 推崇 就近依赖，只有在用到某个模块的时候再去 require。")])]),t._v(" "),s("blockquote",[s("p",[t._v("（2）第二个方面是对依赖模块的执行时机处理不同。首先 AMD 和 CMD 对于模块的加载方式都是异步\n加载，不过它们的区别在于 模块的执行时机，AMD 在依赖模块加载完成后就直接执行依赖模块，依赖模\n块的执行顺序和我们书写的顺序不一定一致。而 CMD 在依赖模块加载完成后并不执行，只是下载而已，\n等到所有的依赖模块都加载好后，进入回调函数逻辑，遇到 require 语句 的时候才执行对应的模块，\n这样模块的执行顺序就和我们书写的顺序保持一致了。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CMD")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("require"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此处略去 100 行")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 依赖可以就近书写")]),t._v("\n  b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AMD 默认推荐")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 依赖必须一开始就写好")]),t._v("\n  a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此处略去 100 行")]),t._v("\n  b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_7-数组和对象有哪些原生方法-列举一下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-数组和对象有哪些原生方法-列举一下"}},[t._v("#")]),t._v(" 7. 数组和对象有哪些原生方法，列举一下？")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("数组和字符串的转换方法：toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("、toLocalString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("、join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 其中 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 方法可以指定\n转换为字符串时的分隔符。\n\n数组尾部操作的方法 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 和 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("，push 方法可以传入多个参数。\n\n数组首部操作的方法 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shift")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 和 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unshift")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 重排序的方法 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reverse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 和 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("，sort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 方\n法可以传入一个函数来进行比较，传入前后两个值，如果返回值为正数，则交换两个参数的位置。\n\n数组连接的方法 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ，返回的是拼接好的数组，不影响原数组。\n\n数组截取办法 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("，用于截取数组中的一部分返回，不影响原数组。\n\n数组插入方法 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("，影响原数组查找特定项的索引的方法，indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 和 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lastIndexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 迭\n代方法 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("every")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("、some")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("、filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("、map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 和 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 方法\n\n数组归并方法 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 和 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduceRight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 方法\n")])])]),s("h3",{attrs:{id:"_8-简单介绍一下-v8-引擎的垃圾回收机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-简单介绍一下-v8-引擎的垃圾回收机制"}},[t._v("#")]),t._v(" 8. 简单介绍一下 V8 引擎的垃圾回收机制")]),t._v(" "),s("blockquote",[s("p",[t._v('垃圾回收 是一个术语，在 计算机编程中用于描述查找和删除那些不再被其他对象引用 (en-US)的对象\n处理过程。换句话说，垃圾回收是删除任何其他对象未使用的对象的过程。垃圾收集通常缩写为 "GC"，\n是JavaScript中使用的内存管理系统的基本组成部分。')])]),t._v(" "),s("p",[t._v("为何需要垃圾回收")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("在Chrome中，"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("V8")]),t._v("被限制了内存的使用（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("位约"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("4G"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("1464MB ， "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("位约"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("7G"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("732MB），为什么要限\n制呢？\n\n表层原因："),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("V8")]),t._v("最初为浏览器而设计，不太可能遇到用大量内存的场景\n\n深层原因："),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("V8")]),t._v("的垃圾回收机制的限制（如果清理大量的内存垃圾是很耗时间，这样回引起JavaScript线\n程暂停执行的时间，那么性能和应用直线下降）"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nv8 的垃圾回收机制基于分代回收机制，这个机制又基于世代假说，这个假说有两个特点，一是新生的对象\n容易早死，另一个是不死的对象会活得更久。基于这个假说，v8 引擎将内存分为了新生代和老生代。\n\n新创建的对象或者只经历过一次的垃圾回收的对象被称为新生代。经历过多次垃圾回收的对象被称为老生\n代。\n\n新生代被分为 From 和 To 两个空间，To 一般是闲置的。当 From 空间满了的时候会执行Scavenge\n 算法进行垃圾回收。当我们执行垃圾回收算法的时候应用逻辑将会停止，等垃圾回收结束后再继续执行。\n 这个算法分为三步：\n\n（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("）首先检查 From 空间的存活对象，如果对象存活则判断对象是否满足晋升到老生代的条件，如果满\n足条件则晋升到老生代。如果不满足条件则移动 To 空间。\n\n（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("）如果对象不存活，则释放对象的空间。\n\n（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("）最后将 From 空间和 To 空间角色进行交换。\n\n新生代对象晋升到老生代有两个条件：\n\n（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("）第一个是判断是对象否已经经过一次 Scavenge 回收。若经历过，则将对象从 From 空间复制到\n老生代中；若没有经历，则复制到 To 空间。\n\n（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("）第二个是 To 空间的内存使用占比是否超过限制。当对象从 From 空间复制到 To 空间时，若 \n  To 空间使用超过 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("，则对象直接晋升到老生代中。设置 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" 的原因主要是因为算法结束后，两个\n  空间结束后会交换位置，如果 To 空间的内存太小，会影响后续的内存分配。\n\n老生代采用了标记清除法和标记压缩法。标记清除法首先会对内存中存活的对象进行标记，标记结束后清\n除掉那些没有标记的对象。由于标记清除后会造成很多的内存碎片，不便于后面的内存分配。所以了解决\n内存碎片的问题引入了标记压缩法。\n\n由于在进行垃圾回收的时候会暂停应用的逻辑，对于新生代方法由于内存小，每次停顿的时间不会太长，\n但对于老生代来说每次垃圾回收的时间长，停顿会造成很大的影响。 为了解决这个问题 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("V8")]),t._v(" 引入了增量\n标记的方法，将一次停顿进行的过程分为了多步，每次执行完一小步就让运行逻辑执行一会，就这样交替\n运行。\n")])])]),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management#garbage_collection",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情参考javaScript内存管理"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"_9-哪些操作会造成内存泄漏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-哪些操作会造成内存泄漏"}},[t._v("#")]),t._v(" 9. 哪些操作会造成内存泄漏？")]),t._v(" "),s("blockquote",[s("p",[t._v("1.意外的全局变量")])]),t._v(" "),s("blockquote",[s("p",[t._v("2.被遗忘的计时器或回调函数")])]),t._v(" "),s("blockquote",[s("p",[t._v("3.脱离 DOM 的引用")])]),t._v(" "),s("blockquote",[s("p",[t._v("4.闭包")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("第一种情况是我们由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存\n中无法被回收。\n\n第二种情况是我们设置了 setInterval 定时器，而忘记取消它，如果循环函数有对外部变量的引用\n的话，那么这个变量会被一直留在内存中，而无法被回收。\n\n第三种情况是我们获取一个 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOM")]),t._v(" 元素的引用，而后面这个元素被删除，由于我们一直保留了对这个元\n素的引用，所以它也无法被回收。\n\n第四种情况是不合理的使用闭包，从而导致某些变量一直被留在内存当中。\n")])])]),s("h3",{attrs:{id:"_10-需求-实现一个页面操作不会整页刷新的网站-并且能在浏览器前进、后退时正确响应。给出你的技术实现方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-需求-实现一个页面操作不会整页刷新的网站-并且能在浏览器前进、后退时正确响应。给出你的技术实现方案"}},[t._v("#")]),t._v(" 10. 需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("通过使用 pushState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" ajax 实现浏览器无刷新前进后退，当一次 ajax 调用成功后我们将一条\nstate 记录加入到 history对象中。一条 state 记录包含了 url、title 和 content 属性，\n在 popstate 事件中可以获取到这个 state 对象，我们可以使用 content 来传递数据。最后我\n们通过对 window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onpopstate 事件监听来响应浏览器的前进后退操作。\n\n使用 pushState 来实现有两个问题，一个是打开首页时没有记录，我们可以使用 replaceState 来\n将首页的记录替换，另一个问题是当一个页面刷新的时候，仍然会向服务器端请求数据，因此如果请求的\n url 需要后端的配合将其重定向到一个页面。\n")])])]),s("h3",{attrs:{id:"_11-移动端的点击事件的有延迟-时间是多久-为什么会有-怎么解决这个延时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-移动端的点击事件的有延迟-时间是多久-为什么会有-怎么解决这个延时"}},[t._v("#")]),t._v(" 11. 移动端的点击事件的有延迟，时间是多久，为什么会有？怎么解决这个延时?")]),t._v(" "),s("p",[t._v("有三种办法来解决这个问题：")]),t._v(" "),s("blockquote",[s("p",[t._v("1.通过 meta 标签禁用网页的缩放。")])]),t._v(" "),s("blockquote",[s("p",[t._v("2.通过 meta 标签将网页的 viewport 设置为 ideal viewport。")])]),t._v(" "),s("blockquote",[s("p",[t._v("3.调用一些 js 库，比如 FastClick")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("移动端点击有 300ms 的延迟是因为移动端会有双击缩放的这个操作，因此浏览器在 click 之后要等\n待 300ms，看用户有没有下一次点击，来判断这次操作是不是双击。\n\nclick 延时问题还可能引起点击穿透的问题，就是如果我们在一个元素上注册了 touchStart 的监听\n事件，这个事件会将这个元素隐藏掉，我们发现当这个元素隐藏后，触发了这个元素下的一个元素的点击\n事件，这就是点击穿透。\n")])])]),s("h3",{attrs:{id:"_12-什么是-前端路由-什么时候适合使用-前端路由-前端路由-有哪些优点和缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-什么是-前端路由-什么时候适合使用-前端路由-前端路由-有哪些优点和缺点"}},[t._v("#")]),t._v(" 12.  什么是“前端路由”？什么时候适合使用“前端路由”？“前端路由”有哪些优点和缺点？")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("）什么是前端路由？\n\n前端路由就是把不同路由对应不同的内容或页面的任务交给前端来做，之前是通过服务端根据 url 的不同返回不同的页面实现的。\n\n（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("）什么时候使用前端路由？\n\n在单页面应用，大部分页面结构不变，只改变部分内容的使用\n\n（"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("）前端路由有什么优点和缺点？\n\n优点：用户体验好，不需要每次都从服务器全部获取，快速展现给用户\n\n缺点：单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置\n\n前端路由一共有两种实现方式，一种是通过 hash 的方式，一种是通过使用 pushState 的方式。\n")])])]),s("h3",{attrs:{id:"_13-介绍一下-js-的节流与防抖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-介绍一下-js-的节流与防抖"}},[t._v("#")]),t._v(" 13. 介绍一下 js 的节流与防抖？")]),t._v(" "),s("blockquote",[s("p",[t._v("函数防抖是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。")])]),t._v(" "),s("blockquote",[s("p",[t._v("函数节流是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。")])]),t._v(" "),s("p",[t._v("代码实现：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数防抖： 在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数节流： 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数防抖的实现")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("debounce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" wait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      args "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果此时存在定时器的话，则取消之前的定时器重新记时")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置定时器，使事件间隔指定事件后执行")]),t._v("\n    timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" wait"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数节流的实现;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("throttle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" preTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      args "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      nowTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果两次时间间隔超过了指定时间，则执行函数。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nowTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" preTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" delay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      preTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"_14"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14"}},[t._v("#")]),t._v(" 14.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n")])])]),s("h3",{attrs:{id:"_15"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_15"}},[t._v("#")]),t._v(" 15.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n")])])]),s("h3",{attrs:{id:"_16"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_16"}},[t._v("#")]),t._v(" 16.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n")])])]),s("h3",{attrs:{id:"_17"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_17"}},[t._v("#")]),t._v(" 17.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n")])])]),s("h3",{attrs:{id:"_18"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_18"}},[t._v("#")]),t._v(" 18.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n")])])]),s("h3",{attrs:{id:"_19"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_19"}},[t._v("#")]),t._v(" 19.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n")])])]),s("h3",{attrs:{id:"_20"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_20"}},[t._v("#")]),t._v(" 20.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
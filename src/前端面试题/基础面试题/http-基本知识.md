# http-基本知识

## 1. 现代浏览器为何要禁用第三方 cookie

- 为了用户的安全 (安全和隐私是浏览器永恒的话题)
- 第三方 cookie 会记录用户的行为和数据, 方便做广告
- 有些浏览器默认禁止, Chrome 增加了 SameSite (谷歌有广告)



## 2. 实现心跳检验 - 用于断线重连

```javascript
function Heartbeaet() {
    let timer = 0
    function fn() {
        console.log('hello')
        timer = setTimeout(fn, 1000) // “心跳” 经量避免使用 setInterval
    }
    timer = setTimeout(fn, 1000)
    
    return () => {
        console.log('销毁成功')
        clearTimeout(timer) // 组件销毁
    }
}
```



## 3. https 与 http 的区别

- http：明文传输，信息不安全。用的是80端口, 应用层
- https：有 SSL 证书，信息安全。用的443端口, 传输层



## 4. 常见的HTTP协议请求头有哪些？

常见的 HTTP 请求头有：

- **Accept**: 接收的数据类型
- **Accept-Language**: 接收的语言
- **Accept-Encoding**: 客户端的编码方式, 通常指压缩方式
- **Connection**: 长连接还是短链接
- **Host**: 客户端的主机和端口号
- **Referer**: 请求来源网站
- **Cache-Control**: 缓存设置（重点）
- **Cookie**: 存储用户信息
- **Origin**: 表明来这哪个站点



## 5. 常见的HTTP协议响应头有哪些？

常见 HTTP 响应头有

- **Cache-Control**：对应请求中 Cache-control
- **Content-Type**: text/html; charset=UTF-8, 诉客户端，资源文件的类型，还有字符编码，客户端通过 utf-8 对资源进行解码，然后对资源进行 html 解析
- **Content-Encoding**: 告诉客户端, 服务端发送的资源采用的什么样的压缩方式 gzip、deflate
- **Date**: 服务端发送资源时的服务器时间
- **Server**: 服务器和相对应的版本
- **Connection**: 长连接还是短链接





## 6. HTTP 1.0 与 HTTP 2.0 的区别？

HTTP 1.0：

- 浏览器与服务器只保持短暂的连接，浏览器的每次请求都需要与服务器建立一个TCP连接



HTTP 1.1：

- 引入了持久连接，即TCP连接默认不关闭，可以被多个请求复用
- 在同一个TCP连接里面，客户端可以同时发送多个请求
- 虽然允许复用TCP连接，但是同一个TCP连接里面，所有的数据通信是按次序进行的，服务器只有处理完一个请求，才会接着处理下一个请求。如果前面的处理特别慢，后面就会有许多请求排队等着
- 新增了一些请求方法
- 新增了一些请求头和响应头



HTTP 2.0：

- 采用二进制格式而非文本格式
- 完全多路复用，而非有序并阻塞的、只需一个连接即可实现并行
- 使用报头压缩，降低开销
- 服务器推送



## 7. HTTP 状态码有哪些?

|      | 类别                             | 原因短语                   |
| ---- | -------------------------------- | -------------------------- |
| 1XX  | Informational（信息性状态码）    | 接受的请求正在处理         |
| 2XX  | Success（成功状态码）            | 请求正常处理完毕           |
| 3XX  | Redirection（重定向状态码）      | 需要进行附加操作以完成请求 |
| 4XX  | Client Error（客户端错误状态码） | 服务器无法处理请求         |
| 5XX  | Server Error（服务器错误状态码） | 服务器处理请求出错         |





## 8. get 和 post 两种传参的区别?

### 安全性角度 (可不说, 等面试官问)

通常来说, post 比 get 更安全, 因为 post 请求参数是放在 body 里面的嘛, 但是 post body 中的数据也可以从开发者工具中看到, 所以也不能说安全吧

而且 get post 也都可以在 body 中放数据的, 只是因为浏览器限制, get 才无法放在 body 中, 我自己就试过使用 postman 在 get 的 body 中传数据, 后台服务也是可以收到的



### 数据量角度 (可不说, 等面试官问)

常见的 get 和 post 区别还有GET传输的数据比较少，post 传输数据多；在 HTTP 规范中并没有 URL 的长度和传输的数据大小进行限制，但是在实际开发时，由于浏览器和服务器均对 URL 的长度进行了限制，因此表现出了 GET传输数据少的缺点

而对于 post 请求，由于数据放在请求体中，虽然理论上不会受到限制，但是实际开发中各个服务器也会对POST的数据大小进行一定的限制；比如 nginx 默认上传图片的大小是 2mb

因此不管GET还是POST，数据传输大小都会有限制，只是POST的传输大小相对于GET来说比较大



### 从缓存角度

get 会缓存, 我们发送一个 get 请求, 后面相同的请求会 304 进行缓存下来

而 post 不会, 因为 post 请求大多用于数据提交, 需要数据到达服务器才进行操作



### 从幂等性角度

一般情况下

get 请求无论请求多少次也不会有副作用, 也可以说是不会对资源产生影响, 因此我们说 get 请求具有幂等性

post 不止会去修改数据, 或者说是去影响资源变化, 所以我们说 post 有明显的 非幂等性

当然, 这是规范的说法, 因为 get 也是可以去修改资源, post 也是可以去查询资源



### 从 TCP 的角度

get 请求会产生一个 TCP 数据包, get 请求发送 header 和 data 给服务端, 服务端返回一个 200, 请求成功

post 请求会产生两个 TCP 数据包, post 请求发送 header 给服务端, 服务端返回 100, 告诉客户端我已经准备接收数据, post 在发送一个 data 给服务端, 服务端返回 200, 请求成功 (当然啦这是只有特殊的浏览器才会这样, 一般浏览器不会这样)



[如何回答面试官问的 GET 和 POST 区别这道送命题](https://zhuanlan.zhihu.com/p/151440663)



## 9. Request Headers 与 Response Headers

1) 请求(客户端->服务端[request])

- GET(请求的方式) `/newcoder/hello.html(请求的目标资源)` `HTTP/1.1(请求采用的协议和版本号)`

- Accept: */*(客户端能接收的资源类型)
- Accept-Language: en-us(客户端接收的语言类型)
- Connection: Keep-Alive(维护客户端和服务端的连接关系)
- Host: localhost:8080(连接的目标主机和端口号)
- Referer: `http://localhost/links.asp`(告诉服务器我来自于哪里)
- User-Agent: Mozilla/4.0(客户端版本号的名字)
- Accept-Encoding: gzip, deflate(客户端能接收的压缩数据的类型)
- If-Modified-Since: Tue, 11 Jul 2000 18:23:51 GMT(缓存时间) 
- Cookie(客户端暂存服务端的信息)
- Date: Tue, 11 Jul 2000    18:23:51 GMT(客户端请求服务端的时间) 



2. 响应(服务端->客户端[response])

- HTTP/1.1(响应采用的协议和版本号) 200(状态码) OK(描述信息)
- Location: [http://www.baidu.com](https://gw-c.nowcoder.com/api/sparta/jump/link?link=http%3A%2F%2Fwww.baidu.com)(服务端需要客户端访问的页面路径) 
- Server: apache tomcat(服务端的Web服务端名)
- Content-Encoding: gzip(服务端能够发送压缩编码类型) 
- Content-Length: 80(服务端发送的压缩数据的长度) 
- Content-Language: zh-cn(服务端发送的语言类型) 
- Content-Type: text/html; charset=GB2312(服务端发送的类型及采用的编码方式)
- Last-Modified: Tue, 11 Jul 2000 18:23:51 GMT(服务端对该资源最后修改的时间)
- Refresh: 1;url=[http://www.it315.org](https://gw-c.nowcoder.com/api/sparta/jump/link?link=http%3A%2F%2Fwww.it315.org)(服务端要求客户端1秒钟后，刷新，然后访问指定的页面路径)
- Content-Disposition: attachment filename=aaa.zip(服务端要求客户端以下载文件的方式打开该文件)
- Transfer-Encoding: chunked(分块传递数据到客户端）  
- Set-Cookie:SS=Q0=5Lb_nQ;path=/search(服务端发送到客户端的暂存数据)
- Expires: -1//3种(服务端禁止客户端缓存页面数据)
- Cache-Control: no-(服务端禁止客户端缓存页面数据)  
- Pragma: no-(服务端禁止客户端缓存页面数据) 
- Connection: close(1.0)/(1.1)Keep-Alive(维护客户端和服务端的连接关系)
- Date: Tue, 11 Jul 2000 18:23:51 GMT(服务端响应客户端的时间)   

​    

> 在服务器响应客户端的时候，带上 `Access-Control-Allow-Origin` 头信息，解决跨域的一种方法



## 常见 HTTP 请求有哪些？他们的区别是什么?

1. get 请求, 常用于获取数据、查询资源
2. post 请求, 常用来提交数据, 上传文件等
3. head 请求, 类似于 get 请求, 只不过返回实体, 用于获取/查询资源信息
4. delete 请求, 用于请求服务器删除数据
5. put 请求, 从客户端向服务端传送的数据, 从而改变数据








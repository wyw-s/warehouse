## 1、nodejs启动报错；

> 在测试上执行`npm run serve`时报错；

<img src="assets/1594656712548.png" alt="1594656712548" style="zoom:50%;" />

```
主要原因就是：3000端口被占用了
```

## 2、解决；

- 查看端口;

  ```
  执行命令：`netstat -tunlp|grep 3000`查看端口被哪一个进程所占用；
  ```

  ![1594656900946](assets/1594656900946.png)

- 中止被占用的进程；

  ```
  执行命令：`kill -s 9 17235`
  ```

  ![1594656974877](assets/1594656974877.png)

## 3、重新启动；

![1594657233290](assets/1594657233290.png)

  

  
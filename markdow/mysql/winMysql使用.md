1. 启动；

   ```
   net start mysql
   ```

2. 关闭；

   ```
   net stop mysql
   ```

3. 登录；

   ```
   mysql -uroot -p
   ```

4. 修改密码；

   ```
   ALTER USER '用户名'@'localhost' IDENTIFIED WITH mysql_native_password BY '新密码';
   
   flush privileges;   --刷新MySQL的系统权限相关表
   ```

5. 退出；

   ```
   exit;
   ```

   
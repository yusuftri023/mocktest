# mocktest

Tugas mocktest binar academy

# Pertanyaan Mock Technical Test:

1. Apakah Kegunaan JSON pada REST API?
   JSON atau Javascript Object Notation adalah format penulisan key-value pair yang dimiliki
   oleh Javascript dan yang kemudian diadopsi sebagai format standar untuk mengirimkan data
   dalam web. Karena JSON merupakan format pengiriman data yang sangat ringat jika dibandingkan
   dengan pendahulunya (XML) sehingga penggunaan JSON pada REST API sangatlah membantu dalam
   hal keringanan beban data ketika melakukan pengiriman data.
2. Jelaskan bagaimana REST API bekerja
   REST API adalah API yang menggunakan permintaan yang berisi HTTP method (contoh: GET,POST,PUT,DELETE)
   untuk mengirimkan data, permintaan akan dikirimkan ke sebuah endpoint (contoh: localhost/users)
   yang disediakan oleh server, bila permintaan valid dan dapat dipenuhi oleh server, server akan
   mengirimkan respon berupa data yang disediakan oleh endpoint tersebut (dapat berupa JSON atau XML)
   ke client/frontend.

# Deskripsi fitur API:

1. link website : https://busy-teal-scorpion-robe.cyclic.app/
   untuk demo login dapat memakai email demo@gmail.com dan password 123456
2. Memakai postman :
   a. Endpoint POST: /register
   Masukkan 3 variable user_name, email, password(harus berupa nomor dengan 6 digit) di request body(JSON)
   Contoh response berhasil :
   {
   status: "success",
   code: 201,
   message: "Registrasi berhasil",
   data: {
   id : 1,
   username: "yusuf",
   email: "demo@gmail.com",
   }
   }
   b. Endpoint POST: /login
   Masukkan 3 variable email, password(harus berupa nomor dengan 6 digit) di request body(JSON)
   Catatan untuk JWT token tidak perlu dimasukkan ke header authorization karena sudah
   automatis tersimpan ke cookies postman atau browser anda
   Contoh response berhasil :
   {
   status: "success",
   code: 201,
   message: "Anda berhasil login",
   token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJVc2VyIiwiZW1haWwiOiJkZW1vQGdtYWlsLmNvbSIsImlhdCI6MTcwMTQyMTg5OCwiZXhwIjoxNzAxNDIzNjk4fQ.DaY716p7izqVw_o8ND79OoscBqLWMFr491GJ8p16fRI
   }
   c. Endpoint GET: /whoami
   Tidak perlu request body, endpoint ini akan automatis membaca cookies dalam bentuk JWT
   Contoh response berhasil :
   {
   "status":"success",
   "message":{
   "user":{
   "id":3,
   "username":"User",
   "email":"demo@gmail.com",
   "iat":1701421898,
   "exp":1701423698
   }
   }
   }
   d. Endpoint GET: /logout
   Akses ke Endpoint yang terlindungi authorization middleware akan terhenti karena
   di endpoint ini cookies JWT anda akan terhapus dari browser/postman
   e. Endpoint GET: /users/task
   Masukkan 1 variable email di request body(postman)
   contoh response berhasil:
   {
   "status":"success",
   "code":200,
   "message":"query complete",
   "data":[
   {
   "username":"User",
   "Task":[
   {
   "id":1,
   "task_name":"setrika baju","task_status":"In Progress","created":"1970-01-01T17:58:57.000Z"},{"id":2,"task_name":"Ngepel Lantai","task_status":"Completed","created":"1970-01-01T17:59:19.000Z"}]}]}
   f. Endpoint POST: /users/task
   Masukkan 3 variable email, task_name, task_status di request body(JSON)
   contoh response berhasil:
   {"status":"success","code":201,"message":"New task added","data":{"id":3,"task_name":"Ngoding Mock Task","task_status":"Completed","poster_id":3,"created":"1970-01-01T09:31:56.000Z"}}
3. Memakai browser :
   a. Endpoint GET: /register
   Akses halaman page register(memakai view engine EJS)
   b. Endpoint POST: /register
   Masukkan 3 variable user_name, email, password(harus berupa nomor dengan 6 digit) di form yang disediakan
   Contoh response berhasil :
   {
   status: "success",
   code: 201,
   message: "Registrasi berhasil",
   data: {
   id : 1,
   username: "yusuf",
   email: "demo@gmail.com",
   }
   }
   c. Endpoint GET: /login
   Akses halaman page login(memakai view engine EJS)
   d. Endpoint POST: /login
   Masukkan 3 variable email, password(harus berupa nomor dengan 6 digit) di form yang disediakan
   Catatan untuk JWT token tidak perlu dimasukkan ke header authorization karena sudah
   automatis tersimpan ke cookies postman atau browser anda
   Contoh response berhasil :
   {
   status: "success",
   code: 201,
   message: "Anda berhasil login",
   token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJVc2VyIiwiZW1haWwiOiJkZW1vQGdtYWlsLmNvbSIsImlhdCI6MTcwMTQyMTg5OCwiZXhwIjoxNzAxNDIzNjk4fQ.DaY716p7izqVw_o8ND79OoscBqLWMFr491GJ8p16fRI
   }
   e. Endpoint GET: /whoami
   Tidak perlu request body, endpoint ini akan automatis membaca cookies dalam bentuk JWT
   Contoh response berhasil :
   {
   "status":"success",
   "message":{
   "user":{
   "id":3,
   "username":"User",
   "email":"demo@gmail.com",
   "iat":1701421898,
   "exp":1701423698
   }
   }
   }
   f. Endpoint GET: /dashboard
   Akses halaman page dashboard(memakai view engine EJS) yang berisi To do list yang telah
   ditambahkan di Route /users/task sebelumnya
   g. Endpoint GET: /logout
   Akses ke Endpoint yang terlindungi authorization middleware akan terhenti karena
   di endpoint ini cookies JWT anda akan terhapus dari browser/postman

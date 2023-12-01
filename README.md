# mocktest

Tugas mocktest binar academy

# Pertanyaan Mock Technical Test:

## 1. Apakah Kegunaan JSON pada REST API?

JSON atau Javascript Object Notation adalah format penulisan key-value pair yang dimiliki</br>
oleh Javascript dan yang kemudian diadopsi sebagai format standar untuk mengirimkan data</br>
dalam web. Karena JSON merupakan format pengiriman data yang sangat ringat jika dibandingkan</br>
dengan pendahulunya (XML) sehingga penggunaan JSON pada REST API sangatlah membantu dalam</br>
hal keringanan beban data ketika melakukan pengiriman data.</br>

## 2. Jelaskan bagaimana REST API bekerja

REST API adalah API yang menggunakan permintaan yang berisi HTTP method (contoh: GET,POST,PUT,DELETE)</br>
untuk mengirimkan data, permintaan akan dikirimkan ke sebuah endpoint (contoh: localhost/users)</br>
yang disediakan oleh server, bila permintaan valid dan dapat dipenuhi oleh server, server akan</br>
mengirimkan respon berupa data yang disediakan oleh endpoint tersebut (dapat berupa JSON atau XML)</br>
ke client/frontend.

# Deskripsi fitur API:

## 1. link website : https://busy-teal-scorpion-robe.cyclic.app/

untuk demo login dapat memakai email demo@gmail.com dan password 123456

## 2. Memakai postman :

### a. Endpoint POST: /register

Masukkan 3 variable user_name, email, password(harus berupa nomor dengan 6 digit) di request body(JSON)</br>
Berfungsi untuk register user. Contoh response berhasil :</br>
{</br>
status: "success",</br>
code: 201,</br>
message: "Registrasi berhasil",</br>
data: {</br>
id : 1,</br>
username: "yusuf",</br>
email: "demo@gmail.com",</br>
}</br>
}

### b. Endpoint POST: /login

Masukkan 3 variable email, password(harus berupa nomor dengan 6 digit) di request body(JSON) </br>
Catatan untuk JWT token tidak perlu dimasukkan ke header authorization karena sudah </br>
automatis tersimpan ke cookies postman atau browser anda </br>
Berfungsi untuk meng authentikasi user. Contoh response berhasil : </br>
{</br>
status: "success",</br>
code: 201,</br>
message: "Anda berhasil login",</br>
token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJVc2VyIiwiZW1haWwiOiJkZW1vQGdtYWlsLmNvbSIsImlhdCI6MTcwMTQyMTg5OCwiZXhwIjoxNzAxNDIzNjk4fQ.DaY716p7izqVw_o8ND79OoscBqLWMFr491GJ8p16fRI</br>
}

### c. Endpoint GET: /whoami

Tidak perlu request body, endpoint ini akan automatis membaca cookies dalam bentuk JWT</br>
Berfungsi untuk melihat identitas user. Contoh response berhasil :</br>
{</br>
"status":"success",</br>
"message":{</br>
"user":{</br>
"id":3,</br>
"username":"User",</br>
"email":"demo@gmail.com",</br>
"iat":1701421898,</br>
"exp":1701423698</br>
}</br>
}</br>
}

### d. Endpoint GET: /logout

Akses ke Endpoint yang terlindungi authorization middleware akan terhenti karena </br>
di endpoint ini cookies JWT anda akan terhapus dari browser/postman </br>
contoh response berhasil:
{"status":"success","message":"You're now logged out"}

### e. Endpoint GET: /users/task

Masukkan 1 variable email di request body(postman) </br>
Berfungsi untuk melihat semua task yang ada pada user. contoh response berhasil: </br>
{</br>
"status":"success", </br>
"code":200, </br>
"message":"query complete", </br>
"data":[ </br>
{</br>
"username":"User",</br>
"Task":[</br>
{</br>
"id":1,</br>
"task_name":"setrika baju","task_status":"In Progress","created":"1970-01-01T17:58:57.000Z"},{"id":2,"task_name":"Ngepel Lantai","task_status":"Completed","created":"1970-01-01T17:59:19.000Z"}]}]}

### f. Endpoint POST: /users/task

Masukkan 3 variable email, task_name, task_status di request body(JSON)</br>
Berfungsi untuk membuat task baru untuk user. Contoh response berhasil:</br>
{"status":"success","code":201,"message":"New task added","data":{"id":3,"task_name":"Ngoding Mock Task","task_status":"Completed","poster_id":3,"created":"1970-01-01T09:31:56.000Z"}}

### g. Endpoint PUT: /users/task/{task_id}

Masukkan 1 variable task_id melalui path parameter dan 1 variable task_status di request body(JSON)</br>
Berfungsi untuk mengupdate status dalam task .contoh response berhasil:</br>
{"status":"success","code":200,"message":"Task status updated","data":{"id":6,"task_name":"Koreksi error coding","task_status":"Completed","poster_id":3,"created":"1970-01-01T10:17:18.000Z"}}

### h. Endpoint DELETE: /users/task/{task_id}

Masukkan 1 variable task_id melalui path parameter
Berfungsi untuk menghapus sebuah task yang dimiliki user. contoh response berhasil: </br>
{"status":"success","code":200,"message":"Task deleted"}

## 3. Memakai browser :

### a. Endpoint GET: /register

Akses halaman page register(memakai view engine EJS)

### b. Endpoint POST: /register

Masukkan 3 variable user_name, email, password(harus berupa nomor dengan 6 digit) di form yang disediakan</br>
Contoh response berhasil :</br>
{</br>
status: "success",</br>
code: 201,</br>
message: "Registrasi berhasil",</br>
data: {</br>
id : 1,</br>
username: "yusuf",</br>
email: "demo@gmail.com",</br>
}</br>
}

### c. Endpoint GET: /login

Akses halaman page login(memakai view engine EJS)

### d. Endpoint POST: /login

Masukkan 3 variable email, password(harus berupa nomor dengan 6 digit) di form yang disediakan</br>
Catatan untuk JWT token tidak perlu dimasukkan ke header authorization karena sudah</br>
automatis tersimpan ke cookies postman atau browser anda</br>
Contoh response berhasil :</br>
{</br>
status: "success",</br>
code: 201,</br>
message: "Anda berhasil login",</br>
token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJVc2VyIiwiZW1haWwiOiJkZW1vQGdtYWlsLmNvbSIsImlhdCI6MTcwMTQyMTg5OCwiZXhwIjoxNzAxNDIzNjk4fQ.DaY716p7izqVw_o8ND79OoscBqLWMFr491GJ8p16fRI
}

### e. Endpoint GET: /whoami

Tidak perlu request body, endpoint ini akan automatis membaca cookies dalam bentuk JWT</br>
Contoh response berhasil :</br>
{</br>
"status":"success",</br>
"message":{</br>
"user":{</br>
"id":3,</br>
"username":"User",</br>
"email":"demo@gmail.com",</br>
"iat":1701421898,</br>
"exp":1701423698</br>
}</br>
}</br>
}</br>

### f. Endpoint GET: /dashboard

Akses halaman page dashboard(memakai view engine EJS) yang berisi To do list yang telah
ditambahkan di Route /users/task sebelumnya

### g. Endpoint GET: /logout

Akses ke Endpoint yang terlindungi authorization middleware akan terhenti karena</br>
di endpoint ini cookies JWT anda akan terhapus dari browser/postman </br>
{"status":"success","message":"You're now logged out"}

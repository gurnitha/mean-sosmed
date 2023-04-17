# Membuat aplikasi SOSIAL MEDIA menggunakan MEAN (MongoDb, Experss, Angular, dan Node)

[Github repositori](https://github.com/gurnitha/mean-sosmed)


## 1. Tentang proyek


## 2. Setup


## 3. Membuat backend

        Aktivitas:

        1. modified:   README.md
        2. push file ke Github


#### 3.1 Membuat package.json file

        Aktivitas:

        1. Membuat folder baru 'backend'
        2. Membuat package.json file di dalam backend folder 
        > npm init --yes
        3. modified:   README.md
        4. push file ke Github


#### 3.2 Menginstal beberapa paket/modules dependencies

        Aktivitas:

        1. Menginstal modules
        > npm install express body-parser connect-multiparty jwt-simple bcrypt moment mongoose
        2. Modifikasi .gitignore file
        3. Commit dan push file ke Github


#### 3.3 Menginstal beberapa paket/modules devDependencies (nodemon)

        Aktivitas:

        1. Menginstal modules
        > npm install --save-dev nodemon


#### 3.4 Modifikasi file package.json

        Aktivitas:

        1. Modifikasi file package.json


#### 3.5 Membuat folder

        Aktivitas:

        1. Membuat folder controllers, helpers, middlewares, models, routes, dan uploads
        > mkdir controllers helpers middlewares models routes uploads


#### 3.6 Membuat server dan menjalankan server

        Aktivitas:

        1. Membuat server code pada app.js file
        2. Modifikasi file package.json
        3. Memastikan semua versi module sama dengan yang digunakan oleh tutor
        4. Menjalankan mongodb (laragon saat start juga menjalankan mongod server)
        5. Menjalankan server
        > npm start

        new file:   app.js
        new file:   package-lock.json
        new file:   package.json
        
        DONE :)

        NEXT:

        Membuat request untuk menguji cara kerja server dengan backend


#### 3.7 Menguji cara kerja server dengan backend

        Aktivitas:

        1. Membuat testController
        new file:   controllers/testController.js
        
        2. Membuat route untuk mengakses testController
        new file:   routes/test.js        
        
        3. Membuat instance test route pada app.js
        modified:   app.js

        4. Testing api
        > (Get) http://localhost:4201/api/test_api

        5. Hasil: ok

        NOTE:

        1. Hasil hanya terlihat di terminal.
        2. Hal itu disebabkan krn pd testController hanya menggunakan console.log, belum menggunakan response thd request tsb.

        NEXT:

        Membuat response thd request dari server


#### 3.8 Membuat response thd request dari server

        Aktivitas:

        1. Membuat response thd request dgn status 200
        modified:   backend/controllers/testController.js        

        2. Modifikasi
        modified:   README.md


        NOTE REKAPITULASI:

        Sekarang, untuk menyelesaikannya, kita akan merangkum semua yang telah kita lakukan di video ini.

        Jadi mari kita tutup terminal terlebih dahulu dan mari kita mulai dengan controller yang pertama bernama testController.

        Hal pertama yang kita lihat pada testController ini adalah kita membuat konstanta dengan nama test_api.

        Konstanta ini pada gilirannya akan menjadi metode atau fungsi Wacken yang berisi interaksi berikut. Ini hanya mengirimkan teks kembali Halo!

        Setelah ini, kita akan mengekspor metode ini untuk dapat menggunakannya di dalam rute file kita yang disebut test.js.

        Dan dalam file ini konfigurasinya adalah pertama-tama kita membuat instance controller untuk dapat memanggil metode test_api dan menetapkan rute dengan metode.

        Setelah ini, konfigurasi rute ini akan diteruskan ke app.js kita dan membuat turunannya dan menempatkannya untuk digunakan dan menetapkannya sebagai awalan.

        Jadi kita telah berhasil membuat server dan melakukan request. Request tersebut kemudian mendapat respons dari controller yang dikirim melalui route. Status response yang diberikan adalah 200 yang berarti sukses.

        NEXT:

        Kita akan mulai membuat frontend.


## 4. Membuat Fontend 

        Aktivitas:

        1. Modified README.md file

        NEXT:

        Membuat frontend dengan Angular


#### 4.1 Uninstal, instal Angular CLI dan membuat frontend

        Aktivitas:

        1. Uninstall Angular CLI
        >  npm uninstall -g @angular/cli  
        >  npm cache clean --force
        >  npm cache verify  

        2. Install Angular CLI
        >  npm install -g @angular/cli  
        >  ng version

        3. Create frontend
        >  ng new frontend

        4. Jalankan frontend
        >  cd frontend
        >  ng serve
        >  buka browser:  http://localhost:4200/

        modified:   .gitignore
        modified:   README.md
        new file:   frontend/.editorconfig
        new file:   frontend/.vscode/extensions.json
        new file:   frontend/.vscode/launch.json
        new file:   frontend/.vscode/tasks.json
        new file:   frontend/angular.json
        new file:   frontend/package-lock.json
        new file:   frontend/package.json
        new file:   frontend/src/app/app-routing.module.ts
        new file:   frontend/src/app/app.component.css
        new file:   frontend/src/app/app.component.html
        new file:   frontend/src/app/app.component.spec.ts
        new file:   frontend/src/app/app.component.ts
        new file:   frontend/src/app/app.module.ts
        new file:   frontend/src/assets/.gitkeep
        new file:   frontend/src/favicon.ico
        new file:   frontend/src/index.html
        new file:   frontend/src/main.ts
        new file:   frontend/src/styles.css
        new file:   frontend/tsconfig.app.json
        new file:   frontend/tsconfig.json
        new file:   frontend/tsconfig.spec.json
        
        DONE :)


#### 4.2 Membuat HALLO WORLD!

        Aktivitas:

        1. Menghapus semua isi file app.component.html dan menggantinya dengan <h1>HELLO WORLD!</h1>

        modified:   frontend/src/app/app.component.html

        2. modified:   README.md


        DONE :)


#### 4.3 Membuat route

        Aktivitas:

        1. Membuat file baru

        new file:   frontend/src/app/app.routing.ts
        : frontend/src/app/app.routing.ts

        2. Membuat route pada app.routing.ts

        Test: no error

        3. modified:   README.md

        NEXT:

        Include routing pada app.module.ts


#### 4.4 Sertakan routing pada app.module

        Aktivitas:

        1. Import routing to app.module.ts
        modified:   frontend/src/app/app.module.ts

        2. modified:   README.md

        Test: no error

        NEXT:

        Membuat home component


#### 4.5 Membuat home component

        Aktivitas:

        1. Membuat home component
        >  ng g c components/home

        modified:   README.md
        modified:   frontend/src/app/app.module.ts
        new file:   frontend/src/app/components/home/home.component.css
        new file:   frontend/src/app/components/home/home.component.html
        new file:   frontend/src/app/components/home/home.component.spec.ts
        new file:   frontend/src/app/components/home/home.component.ts

        NEXT:

        Membuat route untuk home component


#### 4.6 Membuat route untuk home component

        Aktivitas:

        1. Membuat home route pada app.routing 
        modified:   frontend/src/app/app.routing.ts

        2. Menyertakan home component pada app.component
        modified:   frontend/src/app/app.component.html

        3. modified:   README.md

        Test: berhasil

        NEXT:

        Mengisi html template pada home component


## 5. Templatin in Angular

        Aktivitas:

        1. modified:   README.md

## Data Validation

Untuk keamanan, validasi semua input dan request yang dikirim ke API

- *Asal*, Apakah reqeust datang dari client yang benar?, pastikan request hanya datang dari user yang terautentikasi dan IP address yang benar
- *Keberadaan data*, Apakah Memiliki Nilai?, Filter semua data yang bernilai, null, undefined, object dan Array kosong. Validasi berikutnya tidak berguna dilakukan jika data kosong
- *Ukuran*, Apakah data memiliki ukuran yang wajar?, Reqeust dengan data yang besar kemungkindan adalah Ddos Attack
- *Lexical content*, Apakah tipe data sesuai?
- *Syntax*, Apakah syntax nya benar?, seperti email, password, nohp
- *Semantics*, Apakah data masuk akal? misal dalam endpoint register cek apakah email sudah terdaftar atau belum

### Penerapan Data Validation

Aplikasi ini menggunakan library `express-validator` untuk menvalidasi data yang masuk ke API, sedangkan untuk validasi authorization menggunakan middleware express biasa.

Contoh penerapan bisa dilihat pada file goal.validator.js, disini menggunakan Validation chain API

## Testing Environtment

Lingkungan Testing menggunakan Jest, Supertest, dan Husky. Yang disetup untuk setiap kali kode di commit 

## Referensi

Backend Best Practice
- https://github.com/Sairyss/backend-best-practices

Cara setup typescript + express + mongoose
- https://blog.logrocket.com/how-to-set-up-node-typescript-express/
- https://mongoosejs.com/docs/typescript.html
- https://medium.com/swlh/typescript-with-mongoose-and-node-express-24073d51d2ee

Which data relationship model should we choose in MongoDB, and how to implement it using mongoose ?
- https://www.bezkoder.com/mongoose-one-to-many-relationship/

Bagaimana Cara update dokumen di mongoose dan melakukan upsert ?
- https://mongoosejs.com/docs/tutorials/findoneandupdate.html

Cara menggunakan Express Validator yang scalable 
- https://dev.to/nedsoft/a-clean-approach-to-using-express-validator-8go

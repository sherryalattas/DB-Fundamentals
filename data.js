// DB FUNDAMENTALS HUB KKPG - Initial Dataset & App Store Setup
window.INITIAL_DATA = {
  institution: "Kolej Komuniti Pasir Gudang",
  programme: "Sijil Teknologi Maklumat (STM)",
  course: "Database Fundamentals",
  tagline: "Belajar • Bina • Query • Semak",
  
  // Initial Student Demo Data
  students: [
    { id: "STM2026001", name: "Ahmad Zaki Bin Rosli", email: "zaki@kkpg.edu.my", class: "STM1A", semester: 1, xp: 420, progress: 68, confidence: "Sederhana" },
    { id: "STM2026002", name: "Siti Nurhaliza Binti Amir", email: "siti@kkpg.edu.my", class: "STM1A", semester: 1, xp: 580, progress: 85, confidence: "Baik" },
    { id: "STM2026003", name: "Muhammad Faiz Bin Osman", email: "faiz@kkpg.edu.my", class: "STM1B", semester: 1, xp: 210, progress: 40, confidence: "Lemah" },
    { id: "STM2026004", name: "Nurul Aini Binti Hassan", email: "aini@kkpg.edu.my", class: "STM1B", semester: 1, xp: 350, progress: 55, confidence: "Sederhana" },
    { id: "STM2026005", name: "Tan Wei Jie", email: "weijie@kkpg.edu.my", class: "STM1A", semester: 1, xp: 620, progress: 92, confidence: "Sangat Baik" }
  ],

  // Classes
  classes: [
    { id: "STM1A", name: "Kelas STM 1A", studentCount: 22, lecturer: "En. Razak Bin Mohd" },
    { id: "STM1B", name: "Kelas STM 1B", studentCount: 20, lecturer: "Pn. Azlina Binti Ibrahim" },
    { id: "STM2A", name: "Kelas STM 2A", studentCount: 18, lecturer: "En. Razak Bin Mohd" }
  ],

  // Badges Definition
  badges: [
    { id: "b1", name: "Database Beginner", icon: "database", description: "Melengkapkan Modul 1 & Diagnostic Test", color: "from-blue-500 to-indigo-600", xp: 50 },
    { id: "b2", name: "Primary Key Master", icon: "key", description: "Menguasai konsep Primary Key & Foreign Key", color: "from-amber-500 to-yellow-600", xp: 75 },
    { id: "b3", name: "SQL SELECT Master", icon: "terminal", description: "Menyelesaikan 10 latihan SELECT Query", color: "from-cyan-500 to-blue-600", xp: 100 },
    { id: "b4", name: "Query Troubleshooter", icon: "life-buoy", description: "Menyelesaikan 5 latihan di Error Clinic", color: "from-emerald-500 to-teal-600", xp: 100 },
    { id: "b5", name: "ERD Builder", icon: "share-2", description: "Mereka bentuk ERD mini project pertama", color: "from-purple-500 to-indigo-600", xp: 120 },
    { id: "b6", name: "Normalization Explorer", icon: "grid", description: "Menyelesaikan proses normalisasi 1NF-3NF", color: "from-rose-500 to-pink-600", xp: 150 },
    { id: "b7", name: "MySQL Workbench Ready", icon: "cpu", description: "Menyiapkan 14 langkah MySQL Workbench Lab", color: "from-sky-500 to-cyan-600", xp: 150 },
    { id: "b8", name: "Database Project Finisher", icon: "award", description: "Menyiapkan Mini Project Database Lengkap", color: "from-amber-400 to-amber-600", xp: 200 }
  ],

  // 13 Learning Modules (Scaffolding: I DO, WE DO, YOU DO)
  modules: [
    {
      id: "mod-1",
      code: "MODUL 1",
      title: "Pengenalan kepada Database dan DBMS",
      duration: "45 minit",
      level: "Asas",
      description: "Fahami perbezaan antara Data, Maklumat, Database dan Database Management System (DBMS).",
      learningObjectives: [
        "Definisikan maksud Data dan Maklumat dengan contoh sebenar.",
        "Terangkan konsep Pangkalan Data (Database) dan fungsinya.",
        "Kenal pasti peranan DBMS (Database Management System) seperti MySQL."
      ],
      ido: {
        concept: "Data ialah fakta mentah yang belum diproses (contoh: 'Ali', 19, 'STM1A'). Maklumat ialah data yang telah disusun dan memberi makna (contoh: 'Ali ialah pelajar kelas STM1A yang berumur 19 tahun'). Database ialah simpanan data terstruktur.",
        visualDiagram: "DATA MENTAH (Ali, 19) ➔ PROSES (DBMS) ➔ MAKLUMAT BERMAKNA (Profil Pelajar)",
        keyTerms: [
          { term: "Data", def: "Fakta mentah tanpa konteks." },
          { term: "Maklumat", def: "Data terproses yang bermakna." },
          { term: "Database", def: "Koleksi data terstruktur terpusat." },
          { term: "DBMS", def: "Perisian mengurus database (cth: MySQL)." }
        ]
      },
      wedo: {
        guidedDemo: "Kenal pasti contoh dalam sistem Kolej Komuniti Pasir Gudang:",
        examples: [
          { item: "Nombor pendaftaran pelajar 'STM2026001'", category: "Data" },
          { item: "Laporan Senarai Pelajar Lulus Subjek Database", category: "Maklumat" },
          { item: "Perisian MySQL Community Server", category: "DBMS" }
        ]
      },
      youdo: {
        quiz: [
          {
            id: "q1_1",
            question: "Manakah antara berikut merupakan contoh MAKLUMAT?",
            options: [
              "88",
              "Purata markah subjek Database ialah 88%",
              "STM1A",
              "2026"
            ],
            answer: 1,
            explanation: "Purata markah ialah data yang telah diproses dan memberi makna."
          },
          {
            id: "q1_2",
            question: "Apakah fungsi utama perisian DBMS?",
            options: [
              "Mereka bentuk grafik laman web",
              "Menyimpan, mengemas kini, dan mengurus pangkalan data secara selamat",
              "Membuat persembahan slaid",
              "Menulis program aplikasi desktop"
            ],
            answer: 1,
            explanation: "DBMS mengurus penyimpanan dan manipulasi data secara sistematik."
          }
        ]
      }
    },
    {
      id: "mod-2",
      code: "MODUL 2",
      title: "Relational Database Model",
      duration: "50 minit",
      level: "Asas",
      description: "Memahami konsep Jadual (Table), Baris (Row/Record), Lajur (Column/Field), dan Perhubungan (Relation).",
      learningObjectives: [
        "Terangkan struktur Relational Database Model.",
        "Kenal pasti Table, Row/Record, Column/Field.",
        "Fahami kelebihan model terhubung berbanding sistem fail fizikal."
      ],
      ido: {
        concept: "Relational Database menyusun data dalam bentuk jadual 2-dimensi yang terdiri daripada lajur (attributes/fields) dan baris (tuples/records).",
        visualDiagram: "JADUAL: Pelajar [Lajur: id_pelajar | nama | kelas] ➔ Baris 1: (1, 'Ali', 'STM1A')",
        keyTerms: [
          { term: "Relation / Table", def: "Struktur jadual 2D simpan data." },
          { term: "Tuple / Row / Record", def: "Satu baris data lengkap." },
          { term: "Attribute / Column / Field", def: "Sifat atau jenis maklumat." }
        ]
      },
      wedo: {
        guidedDemo: "Perhatikan jadual PELAJAR berikut dan tentukan bilangan Column dan Record:",
        examples: [
          { table: "pelajar (id_pelajar, nama, kelas, umur)", rowsCount: 3, colsCount: 4 }
        ]
      },
      youdo: {
        quiz: [
          {
            id: "q2_1",
            question: "Istilah lain bagi 'Baris' dalam jadual relational database ialah:",
            options: ["Attribute", "Tuple / Record", "Field", "Schema"],
            answer: 1,
            explanation: "Baris mewakili satu rekod data lengkap (Tuple/Record)."
          }
        ]
      }
    },
    {
      id: "mod-3",
      code: "MODUL 3",
      title: "Entity, Attribute dan Relationship",
      duration: "60 minit",
      level: "Sederhana",
      description: "Mengenal pasti entiti dunia sebenar, atribut penerang, dan hubungan antar entiti.",
      learningObjectives: [
        "Kenal pasti Entity (Entiti) daripada senarai keperluan sistem.",
        "Senaraikan Attribute bagi setiap entiti.",
        "Tentukan Relationship antara 2 entiti."
      ],
      ido: {
        concept: "Entiti (Entity) ialah objek dunia sebenar yang mempunyai data untuk disimpan (cth: PELAJAR, KURSUS). Atribut (Attribute) ialah sifat entiti (cth: nama, umur). Hubungan (Relationship) ialah kaitan antara 2 entiti (cth: Pelajar MENDAFTAR Kursus).",
        visualDiagram: "[ PELAJAR ] ──< MENDAFTAR >── [ KURSUS ]",
        keyTerms: [
          { term: "Entity", def: "Objek/Konsep utama (Kata NAMA)." },
          { term: "Attribute", def: "Ciri-ciri penerang entiti." },
          { term: "Relationship", def: "Hubungan antara entiti (Kata KERJA)." }
        ]
      },
      wedo: {
        guidedDemo: "Kenal pasti Entity & Attribute dalam senario KKPG:",
        examples: [
          { entity: "PENSYARAH", attributes: ["id_pensyarah", "nama_pensyarah", "email", "no_telefon"] },
          { entity: "BILIK_LAB", attributes: ["kod_lab", "nama_lab", "kapasiti"] }
        ]
      },
      youdo: {
        quiz: [
          {
            id: "q3_1",
            question: "Dalam senario 'Pensyarah MENGAJAR Subjek', apakah entitinya?",
            options: ["MENGAJAR sahaja", "Pensyarah dan Subjek", "Nama Subjek", "Nombor Bilik"],
            answer: 1,
            explanation: "Pensyarah dan Subjek ialah objek utama (Entiti)."
          }
        ]
      }
    },
    {
      id: "mod-4",
      code: "MODUL 4",
      title: "Primary Key, Foreign Key dan Constraints",
      duration: "60 minit",
      level: "Sederhana",
      description: "Menguasai pengenalpastian Primary Key (PK), Foreign Key (FK), dan syarat batasan integriti data (NOT NULL, UNIQUE).",
      learningObjectives: [
        "Takrifkan Primary Key dan syarat keunikannya.",
        "Terangkan fungsi Foreign Key untuk menghubungkan 2 jadual.",
        "Gunakan constraint NOT NULL, UNIQUE, CHECK dan DEFAULT."
      ],
      ido: {
        concept: "Primary Key (PK) mestilah UNIK dan TIDAK BOLEH NULL. Foreign Key (FK) ialah lajur dalam jadual anak yang merujuk kepada Primary Key dalam jadual induk.",
        visualDiagram: "Jadual PELAJAR [PK: id_pelajar] <─── Merujuk ─── Jadual PENDAFTARAN [FK: id_pelajar]",
        keyTerms: [
          { term: "Primary Key (PK)", def: "Pengenalan unik bagi setiap baris." },
          { term: "Foreign Key (FK)", def: "Kunci rujukan ke jadual lain." },
          { term: "Constraint NOT NULL", def: "Lajur wajib diisi." },
          { term: "Constraint UNIQUE", def: "Nilai tidak boleh berulang." }
        ]
      },
      wedo: {
        guidedDemo: "Tentukan PK dan FK bagi jadual berikut:",
        examples: [
          { table: "PELAJAR", pk: "id_pelajar", fk: "tiada" },
          { table: "PENDAFTARAN", pk: "id_daftar", fk: "id_pelajar, kod_kursus" }
        ]
      },
      youdo: {
        quiz: [
          {
            id: "q4_1",
            question: "Apakah yang akan berlaku jika anda cuba memasukkan baris baru dengan Primary Key yang sudah wujud?",
            options: [
              "Data lama dimusnahkan secara automatik",
              "Sistem MySQL akan mengeluarkan ralat 'Duplicate entry for key PRIMARY'",
              "Data dimasukkan tanpa amaran",
              "Jadual dibuang secara automatik"
            ],
            answer: 1,
            explanation: "Primary Key wajib unik. MySQL menyekat duplikasi PK."
          }
        ]
      }
    },
    {
      id: "mod-5",
      code: "MODUL 5",
      title: "Entity Relationship Diagram (ERD)",
      duration: "75 minit",
      level: "Sederhana",
      description: "Membina ERD menggunakan simbol konvensional (Entiti, Atribut, Hubungan, Kardinaliti 1:1, 1:N, N:M).",
      learningObjectives: [
        "Kenal pasti simbol piawai ERD (Segi Empat, Bujur, Diamond).",
        "Fahami jenis Kardinaliti: One-to-One (1:1), One-to-Many (1:N), Many-to-Many (N:M).",
        "Tukarkan hubungan N:M kepada Associative Entity."
      ],
      ido: {
        concept: "ERD ialah rajah grafik yang memodelkan entiti dan hubungannya. Hubungan N:M (Many-to-Many) mesti dipecahkan menjadi dua hubungan 1:N menggunakan jadual perantara (Bridge/Associative Table).",
        visualDiagram: "[ PELAJAR ] 1 ─── N < PENDAFTARAN > N ─── 1 [ KURSUS ]",
        keyTerms: [
          { term: "Segi Empat", def: "Entiti" },
          { term: "Bujur (Oval)", def: "Atribut" },
          { term: "Diamond", def: "Relationship" },
          { term: "Kardinaliti 1:N", def: "Satu entiti berhubung dengan banyak." }
        ]
      },
      wedo: {
        guidedDemo: "Tukarkan keperluan perniagaan berikut kepada ERD:",
        examples: [
          { scenario: "Satu Jabatan mempunyai ramai Pensyarah. Satu Pensyarah hanya milik satu Jabatan.", result: "Kardinaliti 1:N (Jabatan ➔ Pensyarah)" }
        ]
      },
      youdo: {
        quiz: [
          {
            id: "q5_1",
            question: "Bagaimanakah hubungan Many-to-Many (N:M) diselesaikan dalam Relational Database Model?",
            options: [
              "Dibiarkan tanpa pertukaran",
              "Dihapuskan salah satu entiti",
              "Dicipta jadual perantara (Bridge table) dengan Foreign Keys dari kedua-dua entiti",
              "Menjadikan semua atribut sebagai Primary Key"
            ],
            answer: 2,
            explanation: "Hubungan N:M memerlukan jadual perantara untuk menyimpan FK dari kedua-dua entiti."
          }
        ]
      }
    },
    {
      id: "mod-6",
      code: "MODUL 6",
      title: "Pengenalan MySQL dan MySQL Workbench",
      duration: "45 minit",
      level: "Asas",
      description: "Mengenali persekitaran perisian MySQL Workbench, SQL Editor, SCHEMAS navigator, dan Result Grid.",
      learningObjectives: [
        "Lakukan sambungan ke Local MySQL Server.",
        "Mengenal bahagian utama MySQL Workbench (Navigator, Query Editor, Result Grid, Action Output).",
        "Jalankan query pertama dan baca status pelaksanaan."
      ],
      ido: {
        concept: "MySQL Workbench ialah alatan visual GUI rasmi bagi mentadbir pangkalan data MySQL dan menjalankan SQL command.",
        visualDiagram: "[ SCHEMAS Panel ] | [ SQL Query Editor ] | [ Result Grid & Output Log ]",
        keyTerms: [
          { term: "SCHEMAS", def: "Senarai database & jadual dalam server." },
          { term: "Query Editor", def: "Ruang taip arahan SQL." },
          { term: "Result Grid", def: "Paparan jadual hasil query SELECT." },
          { term: "Action Output", def: "Log status kejayaan/ralat arahan." }
        ]
      },
      wedo: {
        guidedDemo: "Langkah asas memulakan MySQL Workbench:",
        examples: [
          { step: 1, action: "Buka MySQL Workbench dan klik Local Instance MySQL80." },
          { step: 2, action: "Taip 'SHOW DATABASES;' dan tekan butang Lightning Bolt (Execute)." }
        ]
      },
      youdo: {
        quiz: [
          {
            id: "q6_1",
            question: "Butang apakah dalam MySQL Workbench yang digunakan untuk menjalankan query SQL yang ditaip?",
            options: ["Ikon Save File", "Ikon Lightning Bolt (Kilat)", "Ikon Red Cross", "Ikon Settings"],
            answer: 1,
            explanation: "Ikon kilat (Execute) menjalankan SQL statement dalam editor."
          }
        ]
      }
    },
    {
      id: "mod-7",
      code: "MODUL 7",
      title: "SQL DDL – CREATE DATABASE dan CREATE TABLE",
      duration: "60 minit",
      level: "Sederhana",
      description: "Menulis SQL Data Definition Language (DDL) untuk membina pangkalan data dan jadual beserta constraint.",
      learningObjectives: [
        "Tulis arahan SQL CREATE DATABASE dan USE.",
        "Bina jadual menggunakan CREATE TABLE dengan jenis data sesuai (INT, VARCHAR, DATE, DECIMAL).",
        "Tetapkan constraint PRIMARY KEY, NOT NULL, UNIQUE, AUTO_INCREMENT."
      ],
      ido: {
        concept: "DDL digunakan untuk mendefinisikan struktur pangkalan data. Arahan utama: CREATE DATABASE, CREATE TABLE, ALTER TABLE, DROP TABLE.",
        visualDiagram: "CREATE DATABASE kkpg_db;\nUSE kkpg_db;\nCREATE TABLE pelajar (...);",
        keyTerms: [
          { term: "DDL", def: "Data Definition Language (Struktur)." },
          { term: "AUTO_INCREMENT", def: "Nombor siri bertambah secara automatik." },
          { term: "VARCHAR(n)", def: "Teks bercampur panjang dinamik." }
        ]
      },
      wedo: {
        guidedDemo: "Lihat sintaks membina jadual 'pelajar':",
        examples: [
          {
            sql: "CREATE TABLE pelajar (\n  id_pelajar INT AUTO_INCREMENT PRIMARY KEY,\n  nama VARCHAR(100) NOT NULL,\n  kelas VARCHAR(20),\n  umur INT\n);"
          }
        ]
      },
      youdo: {
        quiz: [
          {
            id: "q7_1",
            question: "Manakah sintaks yang BETUL untuk memilih database yang hendak digunakan?",
            options: ["SELECT database kkpg_db;", "USE kkpg_db;", "OPEN DATABASE kkpg_db;", "CONNECT kkpg_db;"],
            answer: 1,
            explanation: "Arahan 'USE nama_database;' memilih database aktif."
          }
        ]
      }
    },
    {
      id: "mod-8",
      code: "MODUL 8",
      title: "SQL DML – INSERT, UPDATE dan DELETE",
      duration: "60 minit",
      level: "Sederhana",
      description: "Manipulasi data rekod menggunakan SQL Data Manipulation Language (DML).",
      learningObjectives: [
        "Memasukkan rekod baru menggunakan INSERT INTO ... VALUES.",
        "Mengemas kini nilai rekod menggunakan UPDATE ... SET ... WHERE.",
        "Memadam rekod menggunakan DELETE FROM ... WHERE."
      ],
      ido: {
        concept: "DML merangkumi manipulasi data dalam baris jadual. PERINGATAN KESELAMATAN: Arahan UPDATE dan DELETE MESTI disertai klausa WHERE bagi mengelakkan kemaskini/pemadaman keseluruhan data!",
        visualDiagram: "INSERT ➔ Tambah Rekod Baru\nUPDATE ➔ Ubah Rekod Sedia Ada\nDELETE ➔ Buang Rekod",
        keyTerms: [
          { term: "DML", def: "Data Manipulation Language (Kandungan Data)." },
          { term: "WHERE Clause", def: "Syarat penapisan baris sasaran." }
        ]
      },
      wedo: {
        guidedDemo: "Contoh arahan DML asas:",
        examples: [
          { action: "INSERT", sql: "INSERT INTO pelajar (nama, kelas, umur) VALUES ('Ali', 'STM1A', 19);" },
          { action: "UPDATE", sql: "UPDATE pelajar SET kelas = 'STM1B' WHERE id_pelajar = 1;" },
          { action: "DELETE", sql: "DELETE FROM pelajar WHERE id_pelajar = 1;" }
        ]
      },
      youdo: {
        quiz: [
          {
            id: "q8_1",
            question: "Apakah risiko jika anda menjalankan arahan 'DELETE FROM pelajar;' tanpa klausa WHERE?",
            options: [
              "Hanya rekod pertama dipadam",
              "Sistem meminta pengesahan kata laluan",
              "SEMUA rekod dalam jadual pelajar akan dipadam serta-merta!",
              "Jadual pelajar dibuang terus dari database"
            ],
            answer: 2,
            explanation: "Tanpa WHERE, arahan DELETE atau UPDATE akan memberi kesan kepada SELURUH baris jadual."
          }
        ]
      }
    },
    {
      id: "mod-9",
      code: "MODUL 9",
      title: "SQL DQL – SELECT, WHERE, ORDER BY dan Filtering",
      duration: "75 minit",
      level: "Sederhana",
      description: "Mengambil dan menapis data daripada pangkalan data menggunakan arahan SELECT, WHERE, ORDER BY, DISTINCT, LIKE, BETWEEN, IN.",
      learningObjectives: [
        "Tulis arahan SELECT untuk mengambil lajur tertentu atau semua lajur (*).",
        "Gunakan penapis WHERE dengan operator perbandingan (=, >, <, LIKE, BETWEEN, IN).",
        "Susun hasil carian mengikut turutan menaik (ASC) atau menurun (DESC) menggunakan ORDER BY."
      ],
      ido: {
        concept: "DQL (Data Query Language) membolehkan kita mendapatkan semula data daripada pangkalan data.",
        visualDiagram: "SELECT lajur FROM jadual WHERE syarat ORDER BY lajur ASC|DESC;",
        keyTerms: [
          { term: "SELECT *", def: "Pilih semua lajur." },
          { term: "DISTINCT", def: "Buang nilai pendua dalam hasil." },
          { term: "LIKE '%teks%'", def: "Carian corak teks." },
          { term: "BETWEEN x AND y", def: "Carian julat nilai." }
        ]
      },
      wedo: {
        guidedDemo: "Contoh penapisan data SELECT:",
        examples: [
          { desc: "Pilih pelajar kelas STM1A berumur 18 tahun ke atas mengikut susunan nama:", sql: "SELECT nama, umur FROM pelajar WHERE kelas = 'STM1A' AND umur >= 18 ORDER BY nama ASC;" }
        ]
      },
      youdo: {
        quiz: [
          {
            id: "q9_1",
            question: "Manakah wild card simbol yang digunakan dalam klausa LIKE untuk mewakili sebarang bilangan karakter?",
            options: ["Symbol @", "Symbol %", "Symbol #", "Symbol &"],
            answer: 1,
            explanation: "Simbol '%' dalam LIKE merujuk kepada 0 atau lebih sebarang karakter (cth: 'A%' bermaksud bermula dengan huruf A)."
          }
        ]
      }
    },
    {
      id: "mod-10",
      code: "MODUL 10",
      title: "Aggregate Functions, GROUP BY dan HAVING",
      duration: "65 minit",
      level: "Lanjutan",
      description: "Pengiraan statistik data menggunakan fungsi agregat COUNT, SUM, AVG, MIN, MAX serta pengelompokan GROUP BY.",
      learningObjectives: [
        "Gunakan fungsi agregat COUNT(), SUM(), AVG(), MIN(), MAX().",
        "Kumpulkan data mengikut kategori menggunakan GROUP BY.",
        "Tapis hasil pengelompokan menggunakan klausa HAVING."
      ],
      ido: {
        concept: "Fungsi Agregat mengira satu nilai ringkasan daripada himpunan nilai baris. Klausa HAVING digunakan khas untuk menapis kumpulan data selepas GROUP BY (kerana WHERE tidak boleh digunakan dengan fungsi agregat).",
        visualDiagram: "SELECT kelas, COUNT(*) FROM pelajar GROUP BY kelas HAVING COUNT(*) > 5;",
        keyTerms: [
          { term: "COUNT()", def: "Kira bilangan baris/rekod." },
          { term: "AVG()", def: "Kira nilai purata." },
          { term: "GROUP BY", def: "Kumpulkan rekod berdasarkan nilai lajur." },
          { term: "HAVING", def: "Penapis syarat bagi fungsi agregat." }
        ]
      },
      wedo: {
        guidedDemo: "Contoh pengiraan kumpulan:",
        examples: [
          { desc: "Kira jumlah pelajar bagi setiap kelas:", sql: "SELECT kelas, COUNT(*) AS jumlah_pelajar FROM pelajar GROUP BY kelas;" }
        ]
      },
      youdo: {
        quiz: [
          {
            id: "q10_1",
            question: "Apakah perbezaan utama antara klausa WHERE dan HAVING?",
            options: [
              "WHERE digunakan untuk GROUP BY, HAVING untuk ORDER BY",
              "WHERE menapis baris sebelum pengelompokan, HAVING menapis hasil pengelompokan agregat",
              "Tiada perbezaan",
              "HAVING hanya boleh digunakan dengan arahan INSERT"
            ],
            answer: 1,
            explanation: "WHERE menapis rekod individu. HAVING menapis kumpulan data yang dihasilkan oleh agregat."
          }
        ]
      }
    },
    {
      id: "mod-11",
      code: "MODUL 11",
      title: "Table Relationships dan JOIN Asas",
      duration: "75 minit",
      level: "Lanjutan",
      description: "Menggabungkan data daripada pelbagai jadual yang berhubungan menggunakan INNER JOIN dan LEFT JOIN.",
      learningObjectives: [
        "Terangkan konsep perhubungan antara jadual melalui Foreign Key.",
        "Gunakan INNER JOIN untuk mengambil rekod padanan dalam kedua-dua jadual.",
        "Gunakan LEFT JOIN untuk mengambil semua rekod jadual kiri."
      ],
      ido: {
        concept: "JOIN menggabungkan baris daripada 2 atau lebih jadual berdasarkan lajur rujukan sepadan (Primary Key = Foreign Key).",
        visualDiagram: "Jadual PELAJAR ──(INNER JOIN on id_pelajar)── Jadual PENDAFTARAN",
        keyTerms: [
          { term: "INNER JOIN", def: "Kembalikan rekod jika ada padanan di kedua-dua jadual." },
          { term: "LEFT JOIN", def: "Kembalikan semua rekod jadual kiri, serta padanan dari jadual kanan." },
          { term: "ON Clause", def: "Syarat perhubungan (cth: a.id = b.id)." }
        ]
      },
      wedo: {
        guidedDemo: "Contoh query INNER JOIN:",
        examples: [
          {
            sql: "SELECT p.nama, d.kod_kursus, d.tarikh_daftar\nFROM pelajar p\nINNER JOIN pendaftaran d ON p.id_pelajar = d.id_pelajar;"
          }
        ]
      },
      youdo: {
        quiz: [
          {
            id: "q11_1",
            question: "Jika anda ingin senaraikan SEMUA pelajar walaupun mereka belum mendaftar sebarang kursus, jenis JOIN yang mana paling sesuai?",
            options: ["INNER JOIN", "LEFT JOIN (dengan Pelajar di sebelah kiri)", "RIGHT JOIN (dengan Kursus di sebelah kiri)", "CROSS JOIN"],
            answer: 1,
            explanation: "LEFT JOIN kekalkan semua baris jadual kiri (Pelajar) walaupun tiada padanan di jadual kanan (Pendaftaran)."
          }
        ]
      }
    },
    {
      id: "mod-12",
      code: "MODUL 12",
      title: "Database Normalization",
      duration: "80 minit",
      level: "Lanjutan",
      description: "Proses mengurangkan lewahan data (data redundancy) dan mengelakkan anomali (Insert, Update, Delete Anomalies) melalui 1NF, 2NF, dan 3NF.",
      learningObjectives: [
        "Mengenal pasti 3 jenis anomali data (Insertion, Updating, Deletion).",
        "Laksanakan First Normal Form (1NF) - Buang Repeating Groups.",
        "Laksanakan Second Normal Form (2NF) - Buang Partial Dependency.",
        "Laksanakan Third Normal Form (3NF) - Buang Transitive Dependency."
      ],
      ido: {
        concept: "Normalisasi ialah teknik reka bentuk berperingkat bagi mengurangkan kelewahan data.",
        visualDiagram: "UNF ➔ 1NF (Buang kumpulan berulang) ➔ 2NF (Buang Kebergantungan Separa) ➔ 3NF (Buang Kebergantungan Transitif)",
        keyTerms: [
          { term: "1NF", def: "Nilai sel atomik (tiada nilai berulang dalam 1 sel)." },
          { term: "2NF", def: "Dalam 1NF + Semua atribut bukan kunci bergantung sepenuhnya pada Primary Key." },
          { term: "3NF", def: "Dalam 2NF + Tiada kebergantungan transitif antara atribut bukan kunci." }
        ]
      },
      wedo: {
        guidedDemo: "Proses pemecahan jadual 1NF kepada 2NF:",
        examples: [
          { unnormalized: "Jadual tunggal simpan Pelajar + Kursus + Pensyarah", solution: "Pecahkan kepada Jadual PELAJAR, KURSUS, dan PENDAFTARAN." }
        ]
      },
      youdo: {
        quiz: [
          {
            id: "q12_1",
            question: "Syarat utama bagi mencapai First Normal Form (1NF) ialah:",
            options: [
              "Semua atribut mestilah mengandungi nilai atomik (tiada repeating groups)",
              "Jadual mesti mempunyai Foreign Key",
              "Semua lajur bertipe integer",
              "Terdapat sekurang-kurangnya 5 jadual"
            ],
            answer: 0,
            explanation: "1NF menghendaki setiap atribut mengandungi hanya satu nilai tunggal (atomik) setiap baris."
          }
        ]
      }
    },
    {
      id: "mod-13",
      code: "MODUL 13",
      title: "Mini Database Project",
      duration: "120 minit",
      level: "Projek Amali",
      description: "Selesaikan mini projek pangkalan data dunia sebenar secara menyeluruh daripada ERD sehingga penulisan SQL dan ujian query.",
      learningObjectives: [
        "Pilih senario perniagaan realistik.",
        "Hasilkan ERD dan skema relational terangkum.",
        "Tulis skrip SQL DDL untuk membina pangkalan data lengkap.",
        "Uji dengan kemasukan data (DML) dan query pelaporan (DQL + JOIN)."
      ],
      ido: {
        concept: "Mini Project menguji kefahaman holistik anda dalam mereka bentuk dan membangunkan pangkalan data sebenar.",
        visualDiagram: "Senario ➔ ERD ➔ DDL CREATE ➔ DML INSERT ➔ DQL SELECT & JOIN ➔ Laporan",
        keyTerms: [
          { term: "Data Dictionary", def: "Dokumen rujukan struktur jadual & data type." },
          { term: "Test Queries", def: "Query pengesahan fungsi sistem." }
        ]
      },
      wedo: {
        guidedDemo: "Langkah penyelesaian Mini Project Sistem Tempahan Bilik Lab:",
        examples: [
          { step: "Identiti Entiti: PELAJAR, BILIK, TEMPAHAN" }
        ]
      },
      youdo: {
        quiz: [
          {
            id: "q13_1",
            question: "Apakah langkah PERTAMA yang paling sesuai sebelum menulis arahan CREATE TABLE dalam Mini Project?",
            options: [
              "Terus memasukkan data latihan",
              "Memahami senario perniagaan dan mereka bentuk ERD / Skema Relational",
              "Memadam pangkalan data yang wujud",
              "Membuat persembahan slaid projek"
            ],
            answer: 1,
            explanation: "Reka bentuk ERD dan skema relational yang kukuh memastikan struktur pangkalan data stabil."
          }
        ]
      }
    }
  ],

  // MySQL Workbench 14-Step Tutorial Checklist
  workbenchSteps: [
    { step: 1, title: "Buka MySQL Workbench", desc: "Pelancaran perisian daripada menu Windows / Desktop.", sql: "-- Tiada arahan SQL", expected: "Skrin Utama MySQL Workbench dipaparkan." },
    { step: 2, title: "Connect ke Local Server", desc: "Double click pada 'Local Instance MySQL80' dan masukkan kata laluan root.", sql: "-- Tiada arahan SQL", expected: "Status Connection Successful (Hijau)." },
    { step: 3, title: "Mengenal GUI & Navigation", desc: "Perhatikan panel SCHEMAS (kiri), Query Editor (tengah), Result Grid (bawah) dan Action Output (bawah sekali).", sql: "SHOW DATABASES;", expected: "Senarai pangkalan data dipaparkan dalam Result Grid." },
    { step: 4, title: "Create Database", desc: "Tulis arahan membuat database baharu bernama kolej_db.", sql: "CREATE DATABASE kolej_db;", expected: "Action Output: 1 row(s) affected." },
    { step: 5, title: "Pilih Database Active", desc: "Setkan kolej_db sebagai pangkalan data aktif.", sql: "USE kolej_db;", expected: "Nama kolej_db dicetakkan tebal dalam SCHEMAS panel." },
    { step: 6, title: "Create Table Pelajar", desc: "Bina jadual 'pelajar' dengan lajur id_pelajar, nama, kelas, dan umur.", sql: "CREATE TABLE pelajar (\n  id_pelajar INT PRIMARY KEY AUTO_INCREMENT,\n  nama VARCHAR(100) NOT NULL,\n  kelas VARCHAR(20),\n  umur INT\n);", expected: "Action Output: 0 row(s) affected. Table pelajar dicipta." },
    { step: 7, title: "Insert Data Rekod", desc: "Masukkan 3 rekod sampel pelajar.", sql: "INSERT INTO pelajar (nama, kelas, umur) VALUES\n('Ali Bin Ahmad', 'STM1A', 19),\n('Siti Nurhaliza', 'STM1A', 18),\n('Chong Wei', 'STM1B', 20);", expected: "Action Output: 3 row(s) affected." },
    { step: 8, title: "SELECT Data", desc: "Paparkan semua rekod dalam jadual pelajar.", sql: "SELECT * FROM pelajar;", expected: "Result Grid memaparkan 3 baris rekod." },
    { step: 9, title: "Filtering dengan WHERE", desc: "Paparkan pelajar berumur lebih daripada 18 tahun.", sql: "SELECT * FROM pelajar WHERE umur > 18;", expected: "Result Grid memaparkan 2 baris rekod (Ali & Chong Wei)." },
    { step: 10, title: "ORDER BY Sorting", desc: "Susun mengikut susunan nama dari A ke Z.", sql: "SELECT * FROM pelajar ORDER BY nama ASC;", expected: "Data dipaparkan tersusun mengikut abjad." },
    { step: 11, title: "Kemaskini Rekod dengan UPDATE", desc: "Tukar kelas Siti kepada 'STM1B'.", sql: "UPDATE pelajar SET kelas = 'STM1B' WHERE nama LIKE '%Siti%';", expected: "Action Output: 1 row(s) updated." },
    { step: 12, title: "Padam Rekod dengan DELETE", desc: "Padam rekod pelajar Chong Wei.", sql: "DELETE FROM pelajar WHERE nama LIKE '%Chong%';", expected: "Action Output: 1 row(s) deleted." },
    { step: 13, title: "Bina Relationship Table", desc: "Bina jadual pendaftaran terhubung melalui Foreign Key.", sql: "CREATE TABLE pendaftaran (\n  id_daftar INT PRIMARY KEY AUTO_INCREMENT,\n  id_pelajar INT,\n  kod_kursus VARCHAR(10),\n  FOREIGN KEY (id_pelajar) REFERENCES pelajar(id_pelajar)\n);", expected: "Jadual pendaftaran dengan Foreign Key dicipta." },
    { step: 14, title: "Gabungkan Data dengan JOIN", desc: "Jalankan INNER JOIN antara jadual pelajar dan pendaftaran.", sql: "SELECT p.nama, d.kod_kursus FROM pelajar p INNER JOIN pendaftaran d ON p.id_pelajar = d.id_pelajar;", expected: "Hasil gabungan baris dipaparkan." }
  ],

  // 25 SQL Interactive Exercises
  sqlExercises: [
    { id: 1, title: "Ex 1: Papar Semua Pelajar", category: "DQL", difficulty: "Asas", prompt: "Tulis query untuk memaparkan SEMUA lajur dan baris daripada jadual 'pelajar'.", initialCode: "SELECT ", expectedQuery: "SELECT * FROM pelajar", hint: "Gunakan 'SELECT * FROM pelajar;'" },
    { id: 2, title: "Ex 2: Papar Nama dan Kelas", category: "DQL", difficulty: "Asas", prompt: "Pilih hanya lajur 'nama' dan 'kelas' daripada jadual 'pelajar'.", initialCode: "SELECT ", expectedQuery: "SELECT nama, kelas FROM pelajar", hint: "Senaraikan nama lajur dipisahkan dengan koma." },
    { id: 3, title: "Ex 3: Penapis Umur WHERE", category: "DQL", difficulty: "Asas", prompt: "Paparkan semua pelajar yang berumur melebihi 18 tahun.", initialCode: "SELECT * FROM pelajar WHERE ", expectedQuery: "SELECT * FROM pelajar WHERE umur > 18", hint: "Gunakan operator > 18 selepas klausa WHERE." },
    { id: 4, title: "Ex 4: Penapis Kelas Specific", category: "DQL", difficulty: "Asas", prompt: "Paparkan semua pelajar daripada kelas 'STM1A'.", initialCode: "SELECT * FROM pelajar WHERE ", expectedQuery: "SELECT * FROM pelajar WHERE kelas = 'STM1A'", hint: "Pastikan 'STM1A' diletakkan dalam pembuka dan penutup kata tunggal." },
    { id: 5, title: "Ex 5: Susunan Nama ORDER BY", category: "DQL", difficulty: "Asas", prompt: "Paparkan semua pelajar disusutkan mengikut 'nama' secara menaik (ASC).", initialCode: "SELECT * FROM pelajar ", expectedQuery: "SELECT * FROM pelajar ORDER BY nama ASC", hint: "Gunakan ORDER BY nama ASC di akhir query." },
    { id: 6, title: "Ex 6: Carian Awalan Nama LIKE", category: "DQL", difficulty: "Sederhana", prompt: "Cari semua pelajar yang namanya bermula dengan huruf 'A'.", initialCode: "SELECT * FROM pelajar WHERE nama LIKE ", expectedQuery: "SELECT * FROM pelajar WHERE nama LIKE 'A%'", hint: "Gunakan LIKE 'A%'." },
    { id: 7, title: "Ex 7: Julat Umur BETWEEN", category: "DQL", difficulty: "Sederhana", prompt: "Cari pelajar yang berumur antara 18 hingga 20 tahun.", initialCode: "SELECT * FROM pelajar WHERE ", expectedQuery: "SELECT * FROM pelajar WHERE umur BETWEEN 18 AND 20", hint: "Gunakan klausa BETWEEN 18 AND 20." },
    { id: 8, title: "Ex 8: Pilihan Kelas IN", category: "DQL", difficulty: "Sederhana", prompt: "Cari pelajar yang berada dalam kelas 'STM1A' ATAU 'STM1B'.", initialCode: "SELECT * FROM pelajar WHERE ", expectedQuery: "SELECT * FROM pelajar WHERE kelas IN ('STM1A', 'STM1B')", hint: "Gunakan IN ('STM1A', 'STM1B')." },
    { id: 9, title: "Ex 9: Keunikan Kelas DISTINCT", category: "DQL", difficulty: "Sederhana", prompt: "Paparkan senarai kelas yang wujud secara unik (tanpa pendua).", initialCode: "SELECT ", expectedQuery: "SELECT DISTINCT kelas FROM pelajar", hint: "Gunakan kata kunci DISTINCT kelas." },
    { id: 10, title: "Ex 10: Kira Jumlah Pelajar COUNT", category: "Functions", difficulty: "Sederhana", prompt: "Kira jumlah keseluruhan rekod pelajar dalam jadual.", initialCode: "SELECT ", expectedQuery: "SELECT COUNT(*) FROM pelajar", hint: "Gunakan fungsi agregat COUNT(*)." },
    { id: 11, title: "Ex 11: Purata Umur AVG", category: "Functions", difficulty: "Sederhana", prompt: "Kira purata umur semua pelajar.", initialCode: "SELECT ", expectedQuery: "SELECT AVG(umur) FROM pelajar", hint: "Gunakan fungsi AVG(umur)." },
    { id: 12, title: "Ex 12: Umur Maksimum MAX", category: "Functions", difficulty: "Sederhana", prompt: "Dapatkan umur terbanyak/tertua dalam jadual pelajar.", initialCode: "SELECT ", expectedQuery: "SELECT MAX(umur) FROM pelajar", hint: "Gunakan fungsi MAX(umur)." },
    { id: 13, title: "Ex 13: Jumlah Pelajar Mengikut Kelas", category: "Grouping", difficulty: "Lanjutan", prompt: "Kira jumlah pelajar mengikut setiap kumpulan kelas.", initialCode: "SELECT kelas, COUNT(*) FROM pelajar ", expectedQuery: "SELECT kelas, COUNT(*) FROM pelajar GROUP BY kelas", hint: "Gunakan GROUP BY kelas." },
    { id: 14, title: "Ex 14: Penapis Kumpulan HAVING", category: "Grouping", difficulty: "Lanjutan", prompt: "Tampilkan kelas yang mempunyai sekurang-kurangnya 2 orang pelajar.", initialCode: "SELECT kelas, COUNT(*) FROM pelajar GROUP BY kelas ", expectedQuery: "SELECT kelas, COUNT(*) FROM pelajar GROUP BY kelas HAVING COUNT(*) >= 2", hint: "Gunakan HAVING COUNT(*) >= 2 selepas GROUP BY." },
    { id: 15, title: "Ex 15: Insert Rekod Baharu", category: "DML", difficulty: "Asas", prompt: "Masukkan pelajar baharu nama 'Kamal', kelas 'STM1A', umur 19.", initialCode: "INSERT INTO pelajar ", expectedQuery: "INSERT INTO pelajar (nama, kelas, umur) VALUES ('Kamal', 'STM1A', 19)", hint: "Gunakan INSERT INTO ... VALUES (...)." },
    { id: 16, title: "Ex 16: Kemaskini Kelas UPDATE", category: "DML", difficulty: "Sederhana", prompt: "Tukar kelas pelajar ber-id 2 kepada 'STM1B'.", initialCode: "UPDATE pelajar SET ", expectedQuery: "UPDATE pelajar SET kelas = 'STM1B' WHERE id_pelajar = 2", hint: "Jangan lupa WHERE id_pelajar = 2." },
    { id: 17, title: "Ex 17: Padam Rekod DELETE", category: "DML", difficulty: "Sederhana", prompt: "Padam rekod pelajar dengan id_pelajar 5.", initialCode: "DELETE FROM pelajar ", expectedQuery: "DELETE FROM pelajar WHERE id_pelajar = 5", hint: "Gunakan DELETE FROM pelajar WHERE id_pelajar = 5." },
    { id: 18, title: "Ex 18: INNER JOIN Pelajar & Pendaftaran", category: "Relationship", difficulty: "Lanjutan", prompt: "Gabungkan nama pelajar dan kod_kursus menggunakan INNER JOIN.", initialCode: "SELECT p.nama, d.kod_kursus FROM pelajar p ", expectedQuery: "SELECT p.nama, d.kod_kursus FROM pelajar p INNER JOIN pendaftaran d ON p.id_pelajar = d.id_pelajar", hint: "Gunakan INNER JOIN pendaftaran d ON p.id_pelajar = d.id_pelajar." },
    { id: 19, title: "Ex 19: LEFT JOIN Pelajar & Pendaftaran", category: "Relationship", difficulty: "Lanjutan", prompt: "Paparkan semua pelajar dan kod kursus (jika ada) menggunakan LEFT JOIN.", initialCode: "SELECT p.nama, d.kod_kursus FROM pelajar p ", expectedQuery: "SELECT p.nama, d.kod_kursus FROM pelajar p LEFT JOIN pendaftaran d ON p.id_pelajar = d.id_pelajar", hint: "Gunakan LEFT JOIN pendaftaran d ON p.id_pelajar = d.id_pelajar." },
    { id: 20, title: "Ex 20: Create Database Simple", category: "DDL", difficulty: "Asas", prompt: "Tulis arahan membina pangkalan data bernama 'kkpg_library'.", initialCode: "CREATE ", expectedQuery: "CREATE DATABASE kkpg_library", hint: "Gunakan CREATE DATABASE kkpg_library." },
    { id: 21, title: "Ex 21: Create Table Simple", category: "DDL", difficulty: "Sederhana", prompt: "Bina jadual 'buku' dengan lajur id_buku (INT PK) dan tajuk (VARCHAR(100)).", initialCode: "CREATE TABLE buku (", expectedQuery: "CREATE TABLE buku ( id_buku INT PRIMARY KEY, tajuk VARCHAR(100) )", hint: "Tentukan jenis data bagi id_buku dan tajuk." },
    { id: 22, title: "Ex 22: Combined AND & OR", category: "DQL", difficulty: "Lanjutan", prompt: "Paparkan pelajar daripada kelas 'STM1A' berumur 19 ATAU kelas 'STM1B' berumur 20.", initialCode: "SELECT * FROM pelajar WHERE ", expectedQuery: "SELECT * FROM pelajar WHERE (kelas = 'STM1A' AND umur = 19) OR (kelas = 'STM1B' AND umur = 20)", hint: "Gunakan kurungan untuk menggabungkan syarat AND & OR." },
    { id: 23, title: "Ex 23: Minima Umur MIN", category: "Functions", difficulty: "Asas", prompt: "Cari nilai umur paling muda dalam jadual pelajar.", initialCode: "SELECT ", expectedQuery: "SELECT MIN(umur) FROM pelajar", hint: "Gunakan MIN(umur)." },
    { id: 24, title: "Ex 24: Aggregate Sum", category: "Functions", difficulty: "Sederhana", prompt: "Kira jumlah keseluruhan bagi semua umur pelajar.", initialCode: "SELECT ", expectedQuery: "SELECT SUM(umur) FROM pelajar", hint: "Gunakan SUM(umur)." },
    { id: 25, title: "Ex 25: Complex Filter & Sort", category: "DQL", difficulty: "Lanjutan", prompt: "Paparkan nama dan umur bagi pelajar yang umurnya >= 19 disusutkan mengikut umur menurun (DESC).", initialCode: "SELECT nama, umur FROM pelajar WHERE ", expectedQuery: "SELECT nama, umur FROM pelajar WHERE umur >= 19 ORDER BY umur DESC", hint: "Gunakan ORDER BY umur DESC." }
  ],

  // SQL Error Clinic Entries
  errorClinic: [
    {
      code: "1064 (42000)",
      title: "Syntax Error in SQL Statement",
      message: "You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '...' at line 1",
      meaning: "Sintaks arahan SQL yang ditaip tidak mematuhi tatabahasa MySQL.",
      commonCauses: [
        "Ejaan kata kunci salah (cth: SELEK menggantikan SELECT).",
        "Tertinggal tanda koma antara nama lajur.",
        "Tertinggal penutup kata tunggal ('..." + "').",
        "Tanda kurungan tidak berpasangan."
      ],
      howToCheck: "Semak perkataan sebelum dan selepas lokasi penunjuk ralat yang disenaraikan.",
      howToFix: "Baiki ejaan, tambah koma atau petik kata yang tertinggal.",
      practiceSnippet: "SELECT nama kelas FROM pelajar;"
    },
    {
      code: "1146 (42S02)",
      title: "Table Doesn't Exist",
      message: "Table 'kkpg_db.pelajars' doesn't exist",
      meaning: "Jadual yang dipanggil tidak wujud dalam database aktif.",
      commonCauses: [
        "Salah eja nama jadual (cth: pelajars vs pelajar).",
        "Belum menjalankan arahan USE nama_database;.",
        "Jadual belum dicipta menggunakan CREATE TABLE."
      ],
      howToCheck: "Taip 'SHOW TABLES;' untuk menyemak senarai jadual wujud.",
      howToFix: "Semak ejaan jadual atau pastikan database aktif dipintas.",
      practiceSnippet: "SELECT * FROM pelajars;"
    },
    {
      code: "1062 (23000)",
      title: "Duplicate Entry for Primary Key",
      message: "Duplicate entry '1' for key 'pelajar.PRIMARY'",
      meaning: "Anda cuba memasukkan nilai Primary Key yang sudah sedia ada.",
      commonCauses: [
        "Memasukkan nilai ID secara manual yang telah digunakan.",
        "Mengulangi arahan INSERT yang sama 2 kali."
      ],
      howToCheck: "Lakukan SELECT id_pelajar FROM pelajar; untuk semak senarai ID sedia ada.",
      howToFix: "Gunakan nilai ID baharu atau tetapkan AUTO_INCREMENT pada PK.",
      practiceSnippet: "INSERT INTO pelajar (id_pelajar, nama) VALUES (1, 'Baru');"
    },
    {
      code: "1054 (42S22)",
      title: "Unknown Column",
      message: "Unknown column 'umur_pelajar' in 'field list'",
      meaning: "Nama lajur/field yang ditaip tiada dalam jadual.",
      commonCauses: [
        "Ejaan nama lajur salah (cth: umur_pelajar vs umur).",
        "Tertinggal petik kata tunggal bagi data string."
      ],
      howToCheck: "Jalankan 'DESCRIBE nama_jadual;' untuk menyemak senarai lajur.",
      howToFix: "Betulkan ejaan lajur mengikut struktur jadual sebenar.",
      practiceSnippet: "SELECT umur_pelajar FROM pelajar;"
    },
    {
      code: "1452 (23000)",
      title: "Foreign Key Constraint Fails",
      message: "Cannot add or update a child row: a foreign key constraint fails",
      meaning: "Anda cuba merujuk nilai Foreign Key yang tidak wujud dalam jadual induk.",
      commonCauses: [
        "id_pelajar 999 dimasukkan dalam jadual pendaftaran sedangkan ID 999 tiada dalam jadual pelajar."
      ],
      howToCheck: "Semak baris jadual induk (Primary Key) terlebih dahulu.",
      howToFix: "Pastikan rekod induk dicipta terlebih dahulu sebelum menambah rekod anak.",
      practiceSnippet: "INSERT INTO pendaftaran (id_pelajar, kod_kursus) VALUES (999, 'STM101');"
    },
    {
      code: "1136 (21S01)",
      title: "Column Count Doesn't Match Value Count",
      message: "Column count doesn't match value count at row 1",
      meaning: "Bilangan lajur dan bilangan nilai dalam arahan INSERT tidak sepadan.",
      commonCauses: [
        "Menyenaraikan 3 lajur tetapi memasukkan 4 nilai (atau sebaliknya)."
      ],
      howToCheck: "Kira bilangan elemen dalam kurungan lajur dan kurungan VALUES.",
      howToFix: "Samakan bilangan lajur dan nilai.",
      practiceSnippet: "INSERT INTO pelajar (nama, kelas) VALUES ('Ali', 'STM1A', 19);"
    },
    {
      code: "1046 (3D000)",
      title: "No Database Selected",
      message: "No database selected",
      meaning: "Anda belum menentukan pangkalan data mana yang hendak digunakan.",
      commonCauses: ["Tertinggal arahan USE nama_database;"],
      howToCheck: "Semak di bar status sama ada database telah aktif.",
      howToFix: "Jalankan arahan USE nama_database; terlebih dahulu.",
      practiceSnippet: "SELECT * FROM pelajar;"
    },
    {
      code: "1045 (28000)",
      title: "Access Denied / Authentication Failed",
      message: "Access denied for user 'root'@'localhost' (using password: YES)",
      meaning: "Kata laluan atau nama pengguna MySQL server salah.",
      commonCauses: ["Salah taip password semasa connect ke MySQL Workbench."],
      howToCheck: "Semak pengesahan credential MySQL Server.",
      howToFix: "Masukkan kata laluan root yang betul atau reset kata laluan MySQL.",
      practiceSnippet: "-- Ralat sambungan perisian"
    }
  ],

  // Practical Labs with Rubrics
  practicalLabs: [
    {
      id: "lab-1",
      code: "LAB 1",
      title: "Perekaan & Pembinaan Database Kolej",
      scenario: "Kolej Komuniti Pasir Gudang memerlukan database ringkas untuk menyimpan maklumat asas pelajar dan kelas.",
      objective: "Bina database kkpg_db dan jadual pelajar mengikut spesifikasi.",
      tasks: [
        "1. Bina database 'kkpg_db'.",
        "2. Bina jadual 'pelajar' dengan PK id_pelajar (AUTO_INCREMENT).",
        "3. Tambah lajur nama (VARCHAR 100), kelas (VARCHAR 20), dan email (VARCHAR 100).",
        "4. Masukkan 3 rekod sampel pelajar."
      ],
      rubric: [
        { criteria: "DATABASE & TABLE CREATION", weight: 30, desc: "Sintaks DDL CREATE tepat & jenis data sesuai." },
        { criteria: "CONSTRAINTS & PRIMARY KEY", weight: 30, desc: "PK dan AUTO_INCREMENT ditetapkan dengan betul." },
        { criteria: "DATA INSERTION", weight: 40, desc: "3 rekod sampel berjaya dimasukkan tanpa ralat." }
      ]
    },
    {
      id: "lab-2",
      code: "LAB 2",
      title: "SQL Query & Filtering Amali",
      scenario: "Pegawai Akademik mahu menapis senarai pelajar mengikut kelas dan julat umur.",
      objective: "Menulis query SELECT dengan WHERE, LIKE, dan ORDER BY.",
      tasks: [
        "1. Paparkan semua pelajar kelas STM1A.",
        "2. Cari pelajar yang namanya bermula dengan huruf 'S'.",
        "3. Susun semua pelajar mengikut nama secara menaik."
      ],
      rubric: [
        { criteria: "SELECT & WHERE CLAUSE", weight: 50, desc: "Query penapisan berfungsi tepat." },
        { criteria: "SORTING & PATTERN MATCHING", weight: 50, desc: "Penggunaan LIKE dan ORDER BY yang betul." }
      ]
    },
    {
      id: "lab-3",
      code: "LAB 3",
      title: "Kemaskini & Keselamatan Data (UPDATE & DELETE)",
      scenario: "Seorang pelajar berpindah kelas dan seorang pelajar menarik diri.",
      objective: "Melakukan kemaskini dan pemadaman data secara selamat menggunakan klausa WHERE.",
      tasks: [
        "1. Kemaskini kelas bagi pelajar ber-ID 1 kepada 'STM1B'.",
        "2. Padam rekod pelajar ber-ID 3 daripada database secara selamat."
      ],
      rubric: [
        { criteria: "UPDATE WITH WHERE", weight: 50, desc: "Klausa WHERE digunakan bagi elak risiko data." },
        { criteria: "SAFE DELETE EXECUTION", weight: 50, desc: "Rekod dipadam tepat tanpa gangguan rekod lain." }
      ]
    },
    {
      id: "lab-4",
      code: "LAB 4",
      title: "Fungsi Agregat & Pengelompokan Data",
      scenario: "Pihak pengurusan mahu statistik bilangan pelajar mengikut kelas.",
      objective: "Menggunakan COUNT, AVG, GROUP BY dan HAVING.",
      tasks: [
        "1. Kira jumlah keseluruhan pelajar.",
        "2. Paparkan jumlah pelajar mengikut setiap kelas.",
        "3. Tapis kumpulan kelas yang mempunyai lebih daripada 2 pelajar."
      ],
      rubric: [
        { criteria: "AGGREGATE FUNCTIONS", weight: 40, desc: "COUNT dan AVG digunakan tepat." },
        { criteria: "GROUP BY & HAVING", weight: 60, desc: "Pengelompokan dan penapisan agregat yang betul." }
      ]
    },
    {
      id: "lab-5",
      code: "LAB 5",
      title: "Table Relationships & INNER JOIN",
      scenario: "Hubungkan jadual Pelajar dan Jadual Pendaftaran Kursus.",
      objective: "Membina Foreign Key dan menjalankan query JOIN.",
      tasks: [
        "1. Bina jadual pendaftaran dengan FK id_pelajar.",
        "2. Jalankan INNER JOIN untuk paparkan Nama Pelajar dan Kod Kursus."
      ],
      rubric: [
        { criteria: "FOREIGN KEY IMPLEMENTATION", weight: 50, desc: "FK merujuk PK induk dengan tepat." },
        { criteria: "INNER JOIN QUERY", weight: 50, desc: "Query JOIN menghasilkan padanan rekod yang betul." }
      ]
    },
    {
      id: "lab-6",
      code: "LAB 6",
      title: "Normalisasi Jadual Terus (1NF ke 3NF)",
      scenario: "Sebuah jadual borang tempahan yang mengandungi data berulang.",
      objective: "Pecahkan jadual mentah kepada jadual ter-normalisasi 3NF.",
      tasks: [
        "1. Kenal pasti repeating groups dan hasilkan 1NF.",
        "2. Buang kebergantungan separa untuk hasilkan 2NF.",
        "3. Buang kebergantungan transitif untuk hasilkan 3NF."
      ],
      rubric: [
        { criteria: "1NF ATOMICITY", weight: 30, desc: "Kumpulan berulang dihapuskan." },
        { criteria: "2NF PARTIAL DEPENDENCY", weight: 35, desc: "Kebergantungan separa diasingkan." },
        { criteria: "3NF TRANSITIVE DEPENDENCY", weight: 35, desc: "Jadual akhir patuh 3NF sepenuhnya." }
      ]
    }
  ],

  // 6 Mini Project Scenarios
  miniProjects: [
    {
      id: "proj-1",
      title: "Sistem Peminjaman Peralatan Lab STM",
      domain: "Lab Equipment Management",
      description: "Pihak Makmal Komputer KKPG memerlukan pangkalan data untuk merekod peminjaman laptop, kabel, dan projector oleh pelajar.",
      entities: ["PELAJAR", "PERALATAN", "PEMINJAMAN"],
      suggestedTables: [
        "pelajar (id_pelajar, nama, no_ndp, kelas, no_tel)",
        "peralatan (id_alat, nama_alat, jenama, status_tersedia)",
        "peminjaman (id_pinjam, id_pelajar, id_alat, tarikh_pinjam, tarikh_pulang, status)"
      ]
    },
    {
      id: "proj-2",
      title: "Sistem Kehadiran Pelajar KKPG",
      domain: "Student Attendance Tracking",
      description: "Pangkalan data untuk merekod kehadiran harian pelajar mengikut subjek dan kelas di Kolej Komuniti.",
      entities: ["PELAJAR", "SUBJEK", "KEHADIRAN"],
      suggestedTables: [
        "pelajar (id_pelajar, nama, kelas)",
        "subjek (kod_subjek, nama_subjek, jam_kredit)",
        "kehadiran (id_hadir, id_pelajar, kod_subjek, tarikh, status_hadir)"
      ]
    },
    {
      id: "proj-3",
      title: "Sistem Inventori Makmal Komputer",
      domain: "IT Hardware Inventory",
      description: "Mengurus stok perkakasan komputer, spec PC, dan status kerosakan perkakasan di Makmal STM.",
      entities: ["PERKAKASAN", "LAB", "PENYELENGGARAAN"],
      suggestedTables: [
        "perkakas (id_pc, jenama, ram_gb, ssd_gb, status)",
        "lab (kod_lab, nama_lab, tingkat)",
        "penyelenggaraan (id_log, id_pc, tarikh_rosak, ulasan)"
      ]
    },
    {
      id: "proj-4",
      title: "Sistem Tempahan Bilik Perbincangan",
      domain: "Room Booking System",
      description: "Sistem pengurusan tempahan bilik diskusi dan bilik seminar oleh pensyarah dan pelajar.",
      entities: ["PENGGUNA", "BILIK", "TEMPAHAN"],
      suggestedTables: [
        "pengguna (id_user, nama, peranan)",
        "bilik (kod_bilik, nama_bilik, kapasiti)",
        "tempahan (id_tempah, id_user, kod_bilik, masa_mula, masa_tamat)"
      ]
    },
    {
      id: "proj-5",
      title: "Sistem Jualan Koperasi KKPG",
      domain: "Co-op Point of Sale",
      description: "Merekod transaksi jualan alat tulis dan buku nota bagi Koperasi Kolej Komuniti.",
      entities: ["PRODUK", "PELANGGAN", "TRANSAKSI"],
      suggestedTables: [
        "produk (kod_produk, nama_produk, harga, stok)",
        "pelanggan (id_pelanggan, nama, baki_kredit)",
        "transaksi (id_resit, kod_produk, id_pelanggan, kuantiti, jumlah_harga, tarikh)"
      ]
    },
    {
      id: "proj-6",
      title: "Sistem Pendaftaran Kursus Pendek",
      domain: "Short Course Registration",
      description: "Pengurusan pendaftaran kursus pembelajaran sepanjang hayat (PSH) di Kolej Komuniti Pasir Gudang.",
      entities: ["PESERTA", "KURSUS", "PENDAFTARAN"],
      suggestedTables: [
        "peserta (id_peserta, nama, ic_no, no_tel)",
        "kursus (kod_kursus, tajuk_kursus, yuran_rm)",
        "pendaftaran (id_daftar, id_peserta, kod_kursus, status_bayaran)"
      ]
    }
  ],

  // SQL Command Library Reference
  commandLibrary: [
    { category: "DDL", command: "CREATE DATABASE", syntax: "CREATE DATABASE nama_db;", desc: "Mencipta pangkalan data baru.", example: "CREATE DATABASE kkpg_db;" },
    { category: "DDL", command: "CREATE TABLE", syntax: "CREATE TABLE nama_jadual (\n  lajur1 data_type PRIMARY KEY,\n  lajur2 data_type NOT NULL\n);", desc: "Mencipta jadual baru dengan lajur & syarat constraint.", example: "CREATE TABLE pelajar (id INT PRIMARY KEY, nama VARCHAR(100));" },
    { category: "DDL", command: "ALTER TABLE", syntax: "ALTER TABLE nama_jadual ADD lajur data_type;", desc: "Mengubah struktur jadual sedia ada.", example: "ALTER TABLE pelajar ADD no_tel VARCHAR(15);" },
    { category: "DDL", command: "DROP TABLE", syntax: "DROP TABLE nama_jadual;", desc: "Membuang/memadam jadual secara kekal.", example: "DROP TABLE temp_data;" },
    
    { category: "DML", command: "INSERT INTO", syntax: "INSERT INTO nama_jadual (lajur1, lajur2) VALUES (nilai1, nilai2);", desc: "Memasukkan baris rekod baru.", example: "INSERT INTO pelajar (nama, kelas) VALUES ('Ali', 'STM1A');" },
    { category: "DML", command: "UPDATE", syntax: "UPDATE nama_jadual SET lajur1 = nilai1 WHERE syarat;", desc: "Mengemas kini nilai baris sedia ada.", example: "UPDATE pelajar SET kelas = 'STM1B' WHERE id = 1;" },
    { category: "DML", command: "DELETE", syntax: "DELETE FROM nama_jadual WHERE syarat;", desc: "Memadam rekod yang memenuhi syarat.", example: "DELETE FROM pelajar WHERE id = 1;" },

    { category: "DQL", command: "SELECT", syntax: "SELECT lajur1, lajur2 FROM nama_jadual;", desc: "Mengambil data daripada jadual.", example: "SELECT nama, umur FROM pelajar;" },
    { category: "DQL", command: "DISTINCT", syntax: "SELECT DISTINCT lajur FROM nama_jadual;", desc: "Memaparkan nilai unik sahaja (tanpa pendua).", example: "SELECT DISTINCT kelas FROM pelajar;" },
    { category: "DQL", command: "WHERE", syntax: "SELECT * FROM jadual WHERE syarat;", desc: "Menapis rekod mengikut syarat tertentu.", example: "SELECT * FROM pelajar WHERE umur >= 18;" },
    { category: "DQL", command: "ORDER BY", syntax: "SELECT * FROM jadual ORDER BY lajur ASC|DESC;", desc: "Menyusun hasil carian menaik atau menurun.", example: "SELECT * FROM pelajar ORDER BY nama ASC;" },
    { category: "DQL", command: "LIKE", syntax: "SELECT * FROM jadual WHERE lajur LIKE '%teks%';", desc: "Menapis mengikut corak abjad.", example: "SELECT * FROM pelajar WHERE nama LIKE 'A%';" },
    { category: "DQL", command: "BETWEEN", syntax: "SELECT * FROM jadual WHERE lajur BETWEEN x AND y;", desc: "Menapis julat nombor/tarikh.", example: "SELECT * FROM pelajar WHERE umur BETWEEN 18 AND 20;" },
    { category: "DQL", command: "IN", syntax: "SELECT * FROM jadual WHERE lajur IN (val1, val2);", desc: "Menapis senarai nilai padanan.", example: "SELECT * FROM pelajar WHERE kelas IN ('STM1A', 'STM1B');" },

    { category: "FUNCTIONS", command: "COUNT()", syntax: "SELECT COUNT(lajur) FROM jadual;", desc: "Mengira bilangan baris rekod.", example: "SELECT COUNT(*) FROM pelajar;" },
    { category: "FUNCTIONS", command: "AVG()", syntax: "SELECT AVG(lajur) FROM jadual;", desc: "Mengira nilai purata lajur numerik.", example: "SELECT AVG(umur) FROM pelajar;" },
    { category: "FUNCTIONS", command: "SUM()", syntax: "SELECT SUM(lajur) FROM jadual;", desc: "Mengira jumlah keseluruhan nilai numerik.", example: "SELECT SUM(markah) FROM ujian;" },
    { category: "FUNCTIONS", command: "MAX() / MIN()", syntax: "SELECT MAX(lajur), MIN(lajur) FROM jadual;", desc: "Cari nilai maksimum / minimum.", example: "SELECT MAX(umur) FROM pelajar;" },

    { category: "GROUPING", command: "GROUP BY", syntax: "SELECT lajur, COUNT(*) FROM jadual GROUP BY lajur;", desc: "Mengelompokkan data mengikut lajur tertentu.", example: "SELECT kelas, COUNT(*) FROM pelajar GROUP BY kelas;" },
    { category: "GROUPING", command: "HAVING", syntax: "SELECT lajur, COUNT(*) FROM jadual GROUP BY lajur HAVING COUNT(*) > n;", desc: "Menapis hasil pengelompokan agregat.", example: "SELECT kelas, COUNT(*) FROM pelajar GROUP BY kelas HAVING COUNT(*) >= 5;" },

    { category: "RELATIONSHIP", command: "INNER JOIN", syntax: "SELECT a.lajur, b.lajur FROM jadualA a INNER JOIN jadualB b ON a.pk = b.fk;", desc: "Menggabungkan rekod yang berpadanan di kedua-dua jadual.", example: "SELECT p.nama, d.kod FROM pelajar p INNER JOIN pendaftaran d ON p.id = d.id_pelajar;" },
    { category: "RELATIONSHIP", command: "LEFT JOIN", syntax: "SELECT a.lajur, b.lajur FROM jadualA a LEFT JOIN jadualB b ON a.pk = b.fk;", desc: "Kekalkan semua rekod jadual kiri beserta padanan kanan.", example: "SELECT p.nama, d.kod FROM pelajar p LEFT JOIN pendaftaran d ON p.id = d.id_pelajar;" }
  ]
};

// LocalStorage Helper Utility
window.AppStore = {
  get: function(key, defaultVal) {
    try {
      var item = localStorage.getItem('db_hub_kkpg_' + key);
      return item ? JSON.parse(item) : defaultVal;
    } catch (e) {
      return defaultVal;
    }
  },
  set: function(key, val) {
    try {
      localStorage.setItem('db_hub_kkpg_' + key, JSON.stringify(val));
    } catch (e) {
      console.error('LocalStorage write error', e);
    }
  }
};

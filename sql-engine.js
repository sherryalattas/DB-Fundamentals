// DB FUNDAMENTALS HUB KKPG - In-Browser MySQL Database Engine
(function() {
  var initialized = false;

  window.SQLEngine = {
    init: function() {
      if (initialized && window.alasql) return;
      try {
        if (!window.alasql) {
          console.error("AlaSQL library not loaded.");
          return;
        }

        // Initialize clean database
        alasql('CREATE DATABASE IF NOT EXISTS kolej_db');
        alasql('USE kolej_db');

        // Create sample table: pelajar
        alasql('DROP TABLE IF EXISTS pelajar');
        alasql('CREATE TABLE pelajar (id_pelajar INT PRIMARY KEY, nama STRING, kelas STRING, umur INT)');
        alasql("INSERT INTO pelajar VALUES (1, 'Ali Bin Ahmad', 'STM1A', 19)");
        alasql("INSERT INTO pelajar VALUES (2, 'Siti Nurhaliza', 'STM1A', 18)");
        alasql("INSERT INTO pelajar VALUES (3, 'Chong Wei', 'STM1B', 20)");
        alasql("INSERT INTO pelajar VALUES (4, 'Muthusamy', 'STM1A', 19)");
        alasql("INSERT INTO pelajar VALUES (5, 'Nurul Aini', 'STM1B', 18)");

        // Create sample table: kursus
        alasql('DROP TABLE IF EXISTS kursus');
        alasql('CREATE TABLE kursus (kod_kursus STRING PRIMARY KEY, nama_kursus STRING, jam_kredit INT)');
        alasql("INSERT INTO kursus VALUES ('STM1013', 'Database Fundamentals', 3)");
        alasql("INSERT INTO kursus VALUES ('STM1023', 'Web Programming', 3)");
        alasql("INSERT INTO kursus VALUES ('STM1032', 'Computer Network Asas', 2)");

        // Create sample table: pendaftaran
        alasql('DROP TABLE IF EXISTS pendaftaran');
        alasql('CREATE TABLE pendaftaran (id_daftar INT PRIMARY KEY, id_pelajar INT, kod_kursus STRING, tarikh_daftar STRING)');
        alasql("INSERT INTO pendaftaran VALUES (101, 1, 'STM1013', '2026-07-15')");
        alasql("INSERT INTO pendaftaran VALUES (102, 2, 'STM1013', '2026-07-15')");
        alasql("INSERT INTO pendaftaran VALUES (103, 1, 'STM1023', '2026-07-16')");
        alasql("INSERT INTO pendaftaran VALUES (104, 3, 'STM1032', '2026-07-17')");

        initialized = true;
        console.log("In-browser MySQL Engine initialized with demo data.");
      } catch (e) {
        console.error("SQLEngine init error:", e);
      }
    },

    execute: function(sqlQuery) {
      if (!initialized) this.init();
      var startTime = performance.now();
      var cleanQuery = (sqlQuery || '').trim();

      if (!cleanQuery) {
        return {
          success: false,
          error: "Sila masukkan arahan SQL sebelum menjalankan query.",
          code: "EMPTY_QUERY"
        };
      }

      // Check common MySQL syntax mistakes before passing to engine
      var lower = cleanQuery.toLowerCase();

      // Check SELECT missing FROM
      if (lower.startsWith('select') && lower.includes('pelajar') && !lower.includes('from') && !lower.includes('distinct')) {
        return {
          success: false,
          code: "1064 (42000)",
          error: "You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax near 'pelajar'",
          hint: "Pastikan anda menyertakan kata kunci 'FROM' sebelum nama jadual (Contoh: SELECT * FROM pelajar)."
        };
      }

      // Check UPDATE or DELETE missing WHERE warning flag
      var isUnsafeDML = (lower.startsWith('update') || lower.startsWith('delete')) && !lower.includes('where');

      try {
        // Run query using AlaSQL
        var res = alasql(cleanQuery);
        var endTime = performance.now();
        var execTime = Math.round(endTime - startTime);

        if (Array.isArray(res)) {
          var columns = [];
          if (res.length > 0 && typeof res[0] === 'object') {
            columns = Object.keys(res[0]);
          }
          return {
            success: true,
            columns: columns,
            rows: res,
            rowCount: res.length,
            executionTimeMs: execTime,
            message: "Query berjaya dijalankan. " + res.length + " baris dipulangkan (" + execTime + " ms).",
            isUnsafeDML: isUnsafeDML
          };
        } else if (typeof res === 'number') {
          return {
            success: true,
            columns: [],
            rows: [],
            affectedRows: res,
            executionTimeMs: execTime,
            message: "Query berjaya. " + res + " baris terkesan (" + execTime + " ms).",
            isUnsafeDML: isUnsafeDML
          };
        } else {
          return {
            success: true,
            columns: [],
            rows: [],
            affectedRows: 1,
            executionTimeMs: execTime,
            message: "Arahan SQL berjaya dilaksanakan (" + execTime + " ms).",
            isUnsafeDML: isUnsafeDML
          };
        }
      } catch (err) {
        var errMsg = err.message || String(err);
        var code = "1064 (42000)";
        var hint = "Semak ejaan kata kunci SQL, tanda koma, dan penutup petik kata.";

        if (errMsg.toLowerCase().includes("table does not exist")) {
          code = "1146 (42S02)";
          hint = "Jadual yang dipanggil tidak wujud. Sila guna 'pelajar', 'kursus', atau 'pendaftaran'.";
        } else if (errMsg.toLowerCase().includes("column")) {
          code = "1054 (42S22)";
          hint = "Lajur yang ditaip tiada dalam jadual. Semak ejaan nama lajur.";
        }

        return {
          success: false,
          error: "MySQL Error [" + code + "]: " + errMsg,
          code: code,
          hint: hint
        };
      }
    },

    getSchema: function() {
      if (!initialized) this.init();
      try {
        var tables = ['pelajar', 'kursus', 'pendaftaran'];
        var schemaMap = {};

        tables.forEach(function(tb) {
          try {
            var sample = alasql('SELECT * FROM ' + tb + ' LIMIT 1');
            if (sample && sample.length > 0) {
              schemaMap[tb] = Object.keys(sample[0]);
            } else {
              schemaMap[tb] = ['id', 'nama'];
            }
          } catch(e) {
            schemaMap[tb] = [];
          }
        });
        return schemaMap;
      } catch (e) {
        return {
          pelajar: ['id_pelajar', 'nama', 'kelas', 'umur'],
          kursus: ['kod_kursus', 'nama_kursus', 'jam_kredit'],
          pendaftaran: ['id_daftar', 'id_pelajar', 'kod_kursus', 'tarikh_daftar']
        };
      }
    },

    reset: function() {
      initialized = false;
      this.init();
    }
  };

  // Auto init on script load
  window.addEventListener('DOMContentLoaded', function() {
    window.SQLEngine.init();
  });
})();

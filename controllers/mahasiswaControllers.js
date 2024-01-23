const express = require("express");
const router = express.Router();
const db = require("../models/db");

// GET /mahasiswa
router.get("/", (req, res) => {
  db.query("SELECT * FROM mahasiswa1", (error, results) => {
    if (error) {
      console.error("Error fetching mahasiswa1:", error);
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
});

// GET /mahasiswa/:nim
router.get("/:nim", (req, res) => {
  const mahasiswaId = req.params.nim;
  db.query(
    "SELECT * FROM mahasiswa1 WHERE nim = ?",
    [mahasiswa],
    (error, results) => {
      if (error) {
        console.error("Error fetching mahasiswa:", error);
        res.status(500).json({ message: "Internal Server Error" });
      } else if (results.length === 0) {
        res.status(404).json({ message: "Mahasiswa not found" });
      } else {
        res.json(results[0]);
      }
    }
  );
});

// PUT /mahasiswa/:nim
router.put("/:nim", (req, res) => {
  const mahasiswaNim = req.params.nim;
  const { nama, gender, prodi, alamat } = req.body;
  db.query(
    "UPDATE mahasiswiJ SET nama = ?,gender = ?,prodi = ?,alamat = ? WHERE nim = ?",
    [nama, gender, prodi, alamat, mahasiswaNim],
    (error) => {
      if (error) {
        console.error("Error updating mahasiswa:", error);
        res.status(500).json({ message: "Internal server Error" });
      } else {
        res.json("updating mahasiswa Successfullys");
      }
    }
  );
});

router.post("/:nim", (req, res) => {
  const nim = req.params.nim;
  const { nama, gender, prodi, alamat } = req.body;
  db.query(
    "INSERT INTO mahasiswiJ (nim, nama, gender, prodi, alamat) VALUES (?, ?, ?, ?, ?)",
    [nim, nama, gender, prodi, alamat],
    (error) => {
      if (error) {
        console.error("Error adding mahasiswa : ", error);
        res.status(500).json({ massage: "Internal Server Error" });
      } else {
        res.json({ massage: "Adding mahasiswa successfullys" });
      }
    }
  );
});

router.delete("/:nim", (req, res) => {
  const nim = req.params.nim;
  db.query("DELETE FROM mahasiswa1 WHERE nim = ?", [nim], (error) => {
    if (error) {
      console.error("Error deleting mahasiswa : ", error);
      res.status(500).json({ massage: "Internal Server Error" });
    } else {
      res.json({ massage: "Deleting mahasiswa successfullys" });
    }
  });
});

module.exports = router;

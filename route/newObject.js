import express, { Router } from "express";

const router = express.Router();

const watch = [
  {
    merk: "Casio",
    model: "Analog",
    warna: "Silver",
    tahun: 2020,
    harga: 2000000,
  },
  {
    merk: "Skmei",
    model: "Digital",
    warna: "hitam",
    tahun: 2023,
    harga: 100000,
  },
];

const kuaci = [
  {
    merk: "Fuzo",
    ukuran: "80g",
    rasa: "Original",
    harga: 10000,
  },
];

router.get("/watch", (req, res) => {
  res.send(watch);
});


router.get("/kuaci", (req, res) => {
  res.send(kuaci);
});

export default router;


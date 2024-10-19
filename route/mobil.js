import express,{Router} from "express";

const router = express.Router();

const mobil = [{
    merk: "Porsche",
    model: "sport",
    warna: "kunig",
    tahun: 2024,
},
{
    merk: "Xpander",
    model: "MPV",
    warna: "Metalic",
    tahun: 2024,
}
];
router.get("/", (req,res)=>{
    res.send(mobil)
})


export default router;
import bodyParser from 'body-parser';
import mobilRoute from "./route/mobil.js";
import watchroute from "./route/newObject.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());


app.use("/mobil", mobilRoute);
app.use("/",watchroute);

app.get("/", (req,res)=>{
    console.log["GET ROUTE"]
    res.send("Muhammad Alifian")
})

app.listen(port,()=>
console.log(
    `Server sedang berjalan di port : http://localhost:${port}`
));
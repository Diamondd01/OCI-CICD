const path = require('path')

const app = express();


const port = 80
const publicPath = path.join(__dirname,'..' ,'Public');

app.use(express.static(publicPath))


app.get('/weather',async (req,res)=>{
    const {latitude, longitude } = req.query;
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m'

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch(error){
        console.error("Error fetching weather data", error)
        res.status(500).json({error:"Failed to fetch weather data"})
    }
})

app.get('/',(req,res)=>{
    res.send("Hey!")
});
app.listen(port,()=> {
    console.log('Server is running')
})

async function fetchWeatherData(city){
    console.log(city);
    const apiKey = "8f3c4684a1e88e5d424c655eb465cb54";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let response=await fetch(url);

    const data=await response.json();
    console.log(data);

    let temp=data.main.temp;
    let fl=data.main.feels_like;
    let wc=data.weather[0].description;
    let humidity=data.main.humidity;
    let cc=data.clouds.all;
    let ws=data.wind.speed;
    let pressure=data.main.pressure;
    let visibility=data.visibility;

    let c=document.getElementById("city");
    c.textContent=city;
    let te=document.getElementById("temp");
    te.textContent=temp;
    let flt=document.getElementById("flt");
    flt.textContent="Feels Like: "+fl+" C";
    let lr=document.getElementById("lr");
    lr.textContent=wc;

    let hd=document.getElementById("hm");
    hd.textContent=humidity;
    let cl=document.getElementById("cc");
    cl.textContent=cc+" %";
    let wi=document.getElementById("sp");
    wi.textContent=ws+"m/s";
    let pr=document.getElementById("pr");
    pr.textContent=pressure+" hPa"
    let vi=document.getElementById("vi");
    vi.textContent=visibility+" KM";

    console.log(temp);
    console.log(te);
}

const inp=document.getElementById("inp");
const btn=document.getElementById("btn");

btn.addEventListener("click",function(e){
    let value=inp.value.trim();
    if(value.length<=0){
        alert("Please enter a city name");
        return;
    }
    fetchWeatherData(value);
})

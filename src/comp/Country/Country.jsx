import { useState } from "react";
import { useEffect } from "react";
import CardCountry from "./CardCountry/CardCountry";


const Country = () => {

    const [api,setApi] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setApi(data))
    },[])
    console.log(api)
    return (
        <div>

            <h1 className="ml-[20px]">Total Country : {api.length}</h1>
            <div className="grid grid-cols-3 gap-5">
            {
                api.map(e => <CardCountry key={e.cca3} e={e}></CardCountry>)
            }
            </div>



            
        </div>
    );
};

export default Country;
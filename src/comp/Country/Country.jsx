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
    return (
        <div>

            <h1>{api.length}</h1>
            {
                api.map(e => <CardCountry key={e.cca3} e={e}></CardCountry>)
            }



            
        </div>
    );
};

export default Country;
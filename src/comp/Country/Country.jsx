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

    const [ui,setUi] = useState([])

    function visited(api){
        console.log("visited")
        console.log("visited",api)

        let newUi = [...ui,api]
        setUi(newUi)

        
        
    }
    return (
        <div>

            <h1 className="text-center">Total Country : {api.length}</h1>
            <h1 className="text-center">Visited Country : {ui.length}</h1>

            <ul className="text-center">
                {
                    ui.map((e,index) => <li key={index} className="">{e.name.common}</li>)
                }
            </ul>
            <div className="grid grid-cols-3 gap-5">
            {
                api.map(e => <CardCountry ui={ui} visited = {visited} key={e.cca3} e={e}></CardCountry>)
            }
            </div>



            
        </div>
    );
};

export default Country;
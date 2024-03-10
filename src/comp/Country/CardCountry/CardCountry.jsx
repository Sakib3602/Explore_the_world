import { useState } from "react";


const CardCountry = ({e:{name , capital, coatOfArms, cca3}}) => {

   
    

    // let {name , capital} = e

    let [visit,setVisit] = useState(false)

    let clickk = ()=>{
        setVisit(!visit)
    }



    
    return (
       <div className="">
         <div className={`${visit ? "bg-red-300" : ''}  border-[2px] border-solid border-[red] w-[480px] min-h-[400px] m-3 p-[10px] rounded-2xl`}>
            <img className="h-[120px]" src={coatOfArms.png} alt="" />
            <h1 className="text-[60px]">Name: {name?.common}</h1>
            <h1 className="text-[30px]">Capital : {capital}</h1>
            <p>Code : {cca3}</p>

            <button onClick={clickk} className="border-[2px] border-solid border-[red] p-2 rounded-lg">Visited</button>
            {visit ? 'I have Visited This Place.' : 'I want to visit'}
            
        </div>
       </div>
    );
};

export default CardCountry;
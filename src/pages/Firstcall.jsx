import { useEffect, useState } from "react"
import axios from 'axios';

function Firstcall(){
    const [result, Setresult]=useState('');
    useEffect(()=>{
        const fetchdata= async()=>{
            try {
                const res=await axios.get('/api/users');
                Setresult(res.data);
            } catch (err) {
                console.log(`Error fetch data: ${err}`);
            }
        }
        fetchdata();
    },[]);

    return(
        <div>
            {result}
        </div>
    )
}
export default Firstcall
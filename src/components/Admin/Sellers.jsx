import React,{useEffect, useState} from "react";
import apiClient from "../../utils/api-client"
import axios from 'axios';
import Loader from "../common/Loader";
const Sellers = () => {
    const [name,setName] = useState('');
    const [sellers,setSellers] = useState([]);
    const [loading, setLoading] = useState(0);
    const [errors,setErrors] = useState("");
  useEffect(()=>{
fetchSellers();
// setLoading(true)
// axios.get("https://jsonplaceholder.typicode.com/userss").then((res)=>{
//     setSellers(res.data)
//     setLoading(false)
// }).catch((err)=>{
//     setLoading(false);
//     setErrors(err.message)


  },[])

  const fetchSellers = async () =>{
    setLoading(true);
    try{
       
        const res = await apiClient.get("/users");
        console.log(res)
        setSellers(res.data)
        setLoading(false)
    }
    catch(err){
setLoading(false);
setErrors(err.message)
    }
    
 }
  // adding loader to whole admin seller page
  if(loading){
      return <Loader/>
  }

  const addSeller = () =>{
    const newSeller ={
        name,
        id:sellers.length+1
    }
    setSellers([newSeller,...sellers]);
    apiClient.post("/users",newSeller)
    .then((res)=>setSellers([res.data,...sellers])).catch((err=>{
        setErrors(err.message);
        setSellers(sellers);
    }))
  }
  const deleteSeller = id =>{
   setSellers(sellers.filter(s => s.id !== id));
   apiClient.delete(`/users/${id}`).catch((err)=>{
    setErrors(err.message);
    setSellers(sellers);
})
  }
  const updateSeller = (item) =>{
     const updatedSeller ={
...item,name:item.name+ " updated"
     }
     setSellers(sellers.map(s=>s.id===item.id?updatedSeller :s ))

     apiClient.patch(`/users/${item.id}`,updatedSeller).catch((err)=>{
        setErrors(err.message);
        setSellers(sellers);
     })
  }
    return (
        <>
        <h3>Admin Sellers Page</h3>
        <input type="text" placeholder="Search by name" onChange ={(e)=>setName(e.target.value)}/><br/>
        <button onClick={addSeller}>Add Seller</button>
        {loading &&  <Loader/>}
        {errors && <em>{errors}</em>}
        <table>
            <tbody>
            {
        sellers.map((item)=>{
            return (
                <tr key={item.id}>
            <td>{item.name}</td>
            <td> <button onClick={()=>updateSeller(item)}>Update</button></td>
           <td> <button onClick={()=>deleteSeller(item.id)}>Delete</button></td>
        </tr>
            )
        })
        }
            </tbody>
        </table>
       
        </>
    );
};

export default Sellers;

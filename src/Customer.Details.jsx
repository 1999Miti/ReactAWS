import React , {useState,useEffect} from 'react'
import axios from 'axios'
function Details(){
 const [data,setdata] = useState({})
 const [Id,setId]=useState()
 const[idfrombuttonclick,setidfrombuttonclick] = useState()
 const handleClick =()=>{
     setidfrombuttonclick(Id)
 }
 
 useEffect(()=> {
     axios.get(`https://mkvr2a48s3.execute-api.ap-south-1.amazonaws.com/Stage1/customer?Id=${idfrombuttonclick}`)
      .then(res =>
        {
        console.log("responseeeeee",res.data)
        setdata(res.data[0])
        console.log("setdataaaa",res.data[0].Name)
        })
        .catch(err=>{
            console.log("error",err)
        })
 },[idfrombuttonclick])
return (
    <div>
        <h2 style={{textAlign:"center"}}>Customer Details</h2>
         <input type="text" value={Id} onChange={e => setId(e.target.value)} style={{marginLeft:"30%",marginTop:"5%"}} />  
        <button type="button"onClick={handleClick}>Fetch Customer Details</button><br/><br/>
        <div><p  style={{marginLeft:"30%"}}>Details :<br/> Name: {data.Name} <br/>
        Email: {data.Email}<br/>
        Contact Number: {data.Contact_Number}<br/>
        Status: {data.Status}</p></div>
        {/* <ul>
            {datas.map(data1 =>{
                <li key={data1.Id}>{data1.Name}</li>
            })}
        </ul> */}
    </div>
)

}
export default Details
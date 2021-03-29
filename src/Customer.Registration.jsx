import React , {useState} from 'react'
// import { useHistory } from "react-router-dom";
import axios from "axios";


export const Contact = () => {
    //----------------------------------------------------------------------------
  const url =`https://mkvr2a48s3.execute-api.ap-south-1.amazonaws.com/Stage1/customeradd`;
  const[data,setData]=useState({
      Name:"",
      Email:"",
      Password:"",
      Contact_Number:"",
      Status:"",
      Image_Path:""

  })
  function submit(e){
      console.log("submit")
      e.preventDefault();
      console.log("hhhhhhhhhhhhhhhhhhhh")
      axios.post(url,data
        // {
        //   headers: { 'Access-Control-Allow-Origin': '*',
        // 'content-type':'application/json'},
        //   Name:data.Name,
        //   Email:data.Email,
        //   Password:data.Password,
        //   Contact_Number:data.Contact_Number,
        //   Status:data.Status,
        //   Image_Path: data.Image_Path,
           
      )
      .then(res=>{
        console.log("---------------",res.data)  
      })
      .catch(err => {
          console.log("errorrrrr")
      })
  } 
  function handle(e){
        const newdata={...data} 
        newdata[e.target.id]=e.target.value 
        setData(newdata) 
        console.log("dataaaaaaaaaaaa",data)
        console.log(newdata)
  }
//-----------------------------------------------------------------------------------------------
//   const[Name,setname]=useState('');
//   const[Email,setemail]=useState('');
//   const[Password,setpassword]=useState('');
//   const[Contact_Number,setnumber]=useState('');
//   const[Image_Path,setpath]=useState('');
//   const[Status,setstatus]=useState('');

//   const onEmailChange = (event) => {
//     setemail(event.target.value)
//   }

//   const onNameChange = (event) => {
//     console.log(event.target.value)
//     setname(event.target.value)
//   }

//   const onMobileChange = (event) => {
//     setnumber(event.target.value)
//   }

//   const onPasswordChange = (event) => {
//     setpassword(event.target.value)
//   }

//   const onStatusChange = (event) => {
//     setstatus(event.target.value)
//   }

//   const onImageChange = (event) => {
//     console.log(event.target.files[0])
//     setpath(event.target.files[0])
//   }

//   function onCreatePost(e){
//       e.preventDefault();
//       const postData ={
//           Name,
//           Email,
//           Password,
//           Contact_Number,
//           Image_Path,
//           Status
//       };

//       axios.post(`https://mkvr2a48s3.execute-api.ap-south-1.amazonaws.com/Stage1/customeradd`,
//       postData,
//       ).then(response =>{
//           console.log(response);
//       }).catch(error =>{
//           console.log("errrorrrrr",error);
//       })
//   }
     
    return (
        <div>
           <div className= "my-5">
               <h1 className="text-center">Add Customer</h1>
           </div>
           <div className ="container contact_div">
               <div className="row">
                   <div className="col-md-6 col-6 mx-auto">
  <form onSubmit = {(e)=>submit(e)} >
        <div className="form-group">
            <label for="exampleFormControlInput1">Name</label>
            <input type="text" 
                className="form-control"
                id="Name"
                value={data.Name}
                onChange={(e)=>handle(e)}
            />
        </div>

        <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" 
                className="form-control"
                id="Email"
                value={data.Email}
                onChange={(e)=>handle(e)}
               
                
             />
        </div>

        <div className="form-group">
            <label for="exampleFormControlInput1">Password</label>
            <input type="Password" 
                className="form-control"
                id="Password"
                value={data.Password}
                onChange={(e)=>handle(e)}
               
                
             />
        </div>
        <div className="form-group">
                    <label for="exampleFormControlInput1">Contact Number</label>
                    <input type="number" 
                        className="form-control" 
                        id="Contact_Number" 
    
                       value={data.Contact_Number}
                        onChange={(e)=>handle(e)}
                       
                        
                    />
                </div>
      
        <div className="form-group">
            <label for="exampleFormControlTextarea1">Status</label>
            <input type="text" 
                className="form-control" 
                id="Status"
                value={data.Status}
                onChange={(e)=>handle(e)}
               
                />

        </div>
     
        <div className="form-group">
            <label for="exampleFormControlTextarea1">Image Upload</label>
            <input type="file" 
                className="form-control" 
                id="Image_Path"
                value={data.Image_Path}
                onChange={(e)=>handle(e)}
            />
        </div>
        <br/>
        <div className="col-12">
            <button className="btn btn-outline-secondary" type="submit"  >Submit
            </button>

        </div>
  </form>
                   </div>

               </div>

           </div>
         
        </div>
    )
}

export default Contact
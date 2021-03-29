import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const CustomerList = () => {
    const [data, setData] = useState([]);

    const loaddata = () => {
        axios.get('https://mkvr2a48s3.execute-api.ap-south-1.amazonaws.com/Stage1/customer')
            .then(function (response) {
                setData(response.data)
                console.log(response);
            })
            .catch(function (error) {

                console.log(error);
            })

    }
    useEffect(() => {
        console.log("HElloooo");
            loaddata();
    }, [])

const renderCustomer = (customer,index) =>{
    return(
        <tr key={index}>
              <th scope="row">{customer.Name}</th>     
                        <td>{customer.Email}</td>   
                        <td>{customer.Contact_Number}</td> 
                        <td>{customer.Status}</td>   
        </tr>
    )
}
    return (
        <div >
    <h1 style={{textAlign:"center"}}>Customer List</h1>
    <table className="table table-striped">
    <thead>
        <tr>
             <th scope="col">Name</th>
             <th scope="col">Email</th>
             <th scope="col">Contact Number</th>
             <th scope="col">Customer Status</th>
                        
        </tr>
    </thead>
    <tbody>
                {
                    data.map(renderCustomer)
                }

                </tbody>
</table>
      </div>
    )
}

export default CustomerList;

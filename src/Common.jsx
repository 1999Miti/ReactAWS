import React from 'react'
import {NavLink} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
export const Common = (props) => {
    return (
        <div>
              <section id='header' className='d-flex align-items-center'>
          <div className="container-fluid ">
                <div className = 'row'>
                    <div className="col-10 mx-auto ">
                        <div className='row'>                       
                         <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>
                                <strong className="brand-name"> AWS Assignment</strong>
                            </h1>

                            <h2 className="my-3">
                                </h2>
                            <div className="mt-3">

                            <NavLink to={props.visit}  className="btn-get-started">
                                {props.btname}
                            </NavLink>
                            </div>
                           
                        </div>
                        </div>

                    </div>
                </div>

            </div>


          </section>
            
        </div>
    )
}

export default Common;

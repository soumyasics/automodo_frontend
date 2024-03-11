import React, { useState } from "react";
import "./Emergency.css"
import axiosInstance from "../../Baseurl";

function Emergency() {
    const userid=localStorage.getItem("userid")
    console.log(userid);

    const [data,setData]=useState({
        custid:userid,
        district:"",
        issues:""
    })

    const changefn=((e)=>{
        setData({
            ...data,[e.target.name]:e.target.value
        })
        console.log(data);
    })

    const submitfn=((b)=>{
        b.preventDefault()
        axiosInstance.post(`addEmergency`,data)
        .then((res)=>{
            console.log(res);
            if(res.data.status==200){
                alert("Your request has been succesfully send and Mechanic will contact you shortly")
                window.location.reload(false)
            }
        })
        .catch((err)=>{
            console.log(err);
        })

    })
    
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={submitfn}>
            <div className="emergency-user-main-box">
                <h2>Emergency Request</h2>
                <div className="col-12">
                    <p className="emergency-para">UserName:ekfhedfkjhdklfkld</p>

                </div>
                <div className="District-emergecy">
                <input type="text" placeholder="Enter Your District" name="district" value={data.district} onChange={changefn} required title="please fill the form"/>
                </div>
                <div className="District-emergecy">
                    <textarea placeholder="Enter Your Issue" name="issues"value={data.issues} onChange={changefn} required/>
                </div>
                <div className="emergencybtn">
                    <button type="submit" className="btn btn-primary" >Submit Emergency Service</button>
                </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emergency;

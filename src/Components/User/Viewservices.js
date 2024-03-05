import React, { useEffect, useState } from "react";
import "./Viewservices.css";
import axiosInstance from "../../Baseurl";
import { Link } from "react-router-dom";

function Viewservices() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axiosInstance
      .post(`viewallservices`)
      .then((res) => {
        console.log(res);
        setdata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="container">
        {data.length ? (
          data.map((a) => {
            return (
              <Link
                to={"/bookservices/"+a._id}
                style={{ textDecoration: "none" }}
              >
                <div className="row viewservices-box">
                  <div className="row">
                    <div className="col">
                      <p id="clor">Service Name:</p>
                    </div>
                    <div className="col">
                      <p>{a.serviceName}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p id="clor">Description :</p>
                    </div>
                    <div className="col">
                      <p>{a.description}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p id="clor">Price:</p>
                    </div>
                    <div className="col">
                      <p>{a.price}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p id="clor">Shop Name:</p>
                    </div>
                    <div className="col">
                      <p>{a.shopid.name}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
}

export default Viewservices;

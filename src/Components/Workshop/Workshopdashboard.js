import React from "react";
import { Link } from "react-router-dom";
import "./Workshopdashboard.css"

function Workshopdashboard() {
  return (
    <div className="col-8" style={{ marginLeft: "20px" }}>
      <div className="reader_profile_account_info">
        <div className="reader_profile_account_info_details row">
          <div className="col-7  reader_profile_account_info_fulldetails ">
            <p>Account Info</p>
            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>First Name</p>
              <p>rkfhrkufjrfr</p>
            </div>
            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>Last Name</p>
              <p>rfjhrjfrjr</p>
            </div>
            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>Gender</p>
              <p>kjrhfurfhr</p>
            </div>
            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>Age</p>
              <p>ejfbhjherh</p>
            </div>
            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>Street</p>
              <p>rfhrufrf</p>
            </div>
            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>City</p>
              <p>fkjhfjkrf</p>
            </div>
            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>State</p>
              <p>fkjrhkfjrf</p>
            </div>
            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>Pincode</p>
              <p>iheriuirfmnf</p>
            </div>
            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>Nationality</p>
              <p>fjbrhjgfrhj</p>
            </div>
            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>Contact</p>
              <p>hbfrjbrfr</p>
            </div>

            <div className="reader_profile_account_info_fulldetails_box mb-3">
              <p>Email</p>
              <p
                style={{
                  overflow: "hidden",
                  maxWidth: "100%",
                  wordBreak: "break-all",
                }}
              >
                frbfrhjr
              </p>
            </div>

            <div className="reader_profile_account_info_editbtn ">
              <Link to="">
                <button className="btn btn-primary">Edit Profile</button>
              </Link>
            </div>
          </div>
          <div className="col-5 reader_profile_account_info_image">
            <img src={""} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workshopdashboard;

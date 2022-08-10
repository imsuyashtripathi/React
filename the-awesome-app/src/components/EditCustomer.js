import React, { useId } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditCustomer() {
    const params=useParams();
    const id = useId();
    const navigate=useNavigate();

    function goBack(){
        navigate(-1);
    }
  return (
    <div className="col-6">
      <h3>Edit Customer ID: {params.id}</h3>
      <div className="form-group">
        <label htmlFor={id + "-name"}>Name</label>
        <input id={id + "-name"} className="form-control" type="text" placeholder="Name" />
      </div>
      <div className="form-group">
        <label htmlFor={id + "-location"}>Location</label>
        <select id={id + "-location"} className="form-select">
          <option defaultValue>Select a Location</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
          <option value="Delhi">Delhi</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Mumbai">Mumbai</option>
          <option value="3Pune">Pune</option>
        </select>
      </div>
      <br/>
      <button className="btn btn-info" onClick={goBack}>Back</button>
    </div>
  );
}

export default React.memo(EditCustomer);
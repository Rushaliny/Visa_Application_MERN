import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const handleEdit = (data) => {
  console.log("Edit clicked for:", data);
  // You can set the form state here for editing:
  // setEditData(data); setIsEditing(true);
};
// const handleDelete = (id) => {
//   setData(data.filter(item => item.id !== id));
// };


export default function ListBooking(props) {
  return (
    <div className="container mt-5" id="demo">
      <h2 className="text-center fw-bold mb-4 text-primary">
        List of Applications / Tracking
      </h2>
      <div className="table-responsive shadow p-4 rounded bg-light">
        <table className="table table-bordered table-hover table-striped align-middle text-center">
          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>Mobile Number</th>
              <th>Full Name</th>
              <th>Date of Birth</th>
              <th>Address</th>
              <th>Gender</th>
              <th>Nationality</th>
              <th>Marital Status</th>
              <th>Passport Number</th>
              <th>Passport Issue Date</th>
              <th>Passport Expiry Date</th>
              <th>Purpose of Visit</th>
              <th>Visa Type</th>
              <th>Intended Arrival Date</th>
              <th>Duration of Stay</th>
            
              <th>Passport Photo</th>
              <th>Visa Photo</th>
              <th>Letter of Invitation</th>
              <th>Bank Statement</th>
              <th>Applicant Name</th>
              <th>Signature Full Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.data &&
              props.data.map((e, key) => {
                return (
                  <tr key={key}>
                    <td>{e.id}</td>
                    <td>{e.mobileNumber}</td>
                    <td>{e.fullName}</td>
                    <td>{e.DOB}</td>
                    <td>{e.Address}</td>
                    <td>{e.Gender}</td>
                    <td>{e.nationality}</td>
                    <td>{e.maritalStatus}</td>
                    <td>{e.passportNumber}</td>
                    <td>{e.pIssueDate}</td>
                    <td>{e.pExpiredDate}</td>
                    <td>{e.purptoseOfVisit}</td>
                    <td>{e.VisaType}</td>
                    <td>{e.intArrivalDate}</td>
                    <td>{e.DurationofStay}</td>
                   
                    <td>{e.passportPhoto}</td>
                    <td>{e.visaPhoto}</td>
                    <td>{e.letterOfInvitation}</td>
                    <td>{e.Statement}</td>
                    <td>{e.applicantName}</td>
                    <td>{e.SignfullName}</td>
                    <td>
                      <span className="badge bg-success">Approved</span>
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => handleEdit(e)}
                        title="Edit"
                      >
                        <FaEdit />
                      </button>

                      <button
                        className="btn btn-outline-danger btn-sm"
                        // onClick={() => handleDelete(e.id)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {/* {isModelOpen && (
          <div className="model">
            <div className="model-content"></div>
        </div>
        )} */}
      </div>
    </div>
  );
}

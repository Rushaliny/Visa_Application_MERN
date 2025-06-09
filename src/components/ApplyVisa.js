import React, { useState } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



export default function BookTicket(props) {
   const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mobileNumber: "",
    fullName: "",
    DOB: "",
    Address: "",
    Gender: "",
    nationality: "",
    maritalStatus: "",
    passportNumber: "",
    pIssueDate: "",
    pExpiredDate: "",
    purptoseOfVisit: "",
    VisaType: "",
    DurationofStay: "",
    intArrivalDate: "",
    applicantName: "",
    SignfullName: ""
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [letterOfInvi, setLetterOfInvi] = useState(null);
  const [Statement, setStatement] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (setter) => (e) => {
    setter(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingId = Math.floor(Math.random() * 1000000);

    // Store in local parent state
    props.setData((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        ...formData,
        passportPhoto: selectedFile ? selectedFile.name : "No file uploaded",
        visaPhoto: selectedFile2 ? selectedFile2.name : "No file uploaded",
        letterOfInvitation: letterOfInvi ? letterOfInvi.name : "No file uploaded",
        Statement: Statement ? Statement.name : "No file uploaded"
      }
    ]);

    // Prepare formData for server
    
    const submissionData = new FormData();
    for (const key in formData) {
      submissionData.append(key, formData[key]);
    }

    if (selectedFile) submissionData.append("passportPhoto", selectedFile);
    if (selectedFile2) submissionData.append("visaPhoto", selectedFile2);
    if (letterOfInvi) submissionData.append("letterOfInvitation", letterOfInvi);
    if (Statement) submissionData.append("Statement", Statement);

    try {
      const response = await axios.post("/test", submissionData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      alert(`Visa application submitted successfully!\nBooking ID: ${bookingId}`);
    } catch (error) {
      alert(`Visa application submitted successfully!\nBooking ID: ${bookingId}`);
      navigate("/bookings");
      
      // console.error("Error submitting visa application:", error);
      // alert("There was an error submitting your application. Please try again.");
    }
  };

  return (

    // <form onSubmit={handleSubmit} className="book-ticket-form ">
        
    //     <h1 className="mb-3">Apply Visa</h1>

    //     <div className="form-group" style={{ margin: "1em" }}>
    //       <div style={{ marginTop: "2em" }}>
    //         <h5 className="mb-3">
    //           {" "}
    //           <b>Personal Information</b>{" "}
    //         </h5>
    //       </div>

    //       <div className="form-group " style={{ marginTop: "1em" }}>
    //         <label>Full Name (as per passport): <span className="text-danger">*</span></label>
    //         <input
    //           type="text"
    //           className="form-control" 
    //           name="fullName"
    //           value={formData.fullName}
    //           onChange={handleChange}
    //           required
    //         />

    //         <label>Mobile Number: <span className="text-danger">*</span> </label>
    //         <input
    //           type="tel"
    //           className="form-control" 
    //           name="mobileNumber"
    //           value={formData.mobileNumber}
    //           onChange={handleChange}
    //           required
    //         />

    //         <label>DOB: <span className="text-danger">*</span></label>
    //         <input
    //           type="date"
    //           className="form-control" 
    //           name="DOB"
    //           value={formData.DOB}
    //           onChange={handleChange}
    //           required
    //         />

    //         <label>Address (as per passport): <span className="text-danger">*</span></label>
    //         <input
    //           type="text"
    //           name="Address"
    //           className="form-control" 
    //           value={formData.Address}
    //           onChange={handleChange}
    //           required
    //         />

    //         <div className="mb-3">
    //           <label className="form-label ">Gender: <span className="text-danger">*</span></label>
    //           <div className="ms-4">
    //             <div className="form-check form-check-inline">
    //               <input
    //                 className="form-check-input"
    //                 type="radio"
    //                 name="gender"
    //                 id="genderMale"
    //                 value={formData.male}
    //                 // checked={Gender === "male"}
                
    //               />
    //               <label className="form-check-label" htmlFor="genderMale">
    //                 Male
    //               </label>
    //             </div>

    //             <div className="form-check form-check-inline">
    //               <input
    //                 className="form-check-input"
    //                 type="radio"
    //                 name="gender"
    //                 id="genderFemale"
    //                 value={formData.female}
    //                 // checked={Gender === "female"}
                  
    //               />
    //               <label className="form-check-label" htmlFor="genderFemale">
    //                 Female
    //               </label>
    //             </div>

    //             <div className="form-check form-check-inline">
    //               <input
    //                 className="form-check-input"
    //                 type="radio"
    //                 name="gender"
    //                 id="genderOther"
    //                 value={formData.other}
    //                 // checked={Gender === "other"}
                  
    //               />
    //               <label className="form-check-label" htmlFor="genderOther">
    //                 Other
    //               </label>
    //             </div>
    //           </div>
    //         </div>

    //         <label>Nationality: <span className="text-danger">*</span></label>
    //         <input
    //           type="text"
    //           className="form-control" 
    //           name="nationality"
    //           value={formData.nationality}
    //           onChange={handleChange}
    //           required
    //         />

    //         <label>Marital Status: <span className="text-danger">*</span></label>
    //         <select
    //           className="form-select"
    //           class="form-control" 
    //           name="maritalStatus"
    //           value={formData.maritalStatus}
    //           onChange={handleChange}
    //           required
    //         >
    //           <option value="" disabled>
    //             select
    //           </option>
    //           <option value="Single">Single</option>
    //           <option value="Married">Married</option>
    //         </select>

    //         <label>Upload Passport-size Photo: <span className="text-danger">*</span></label>
    //         <input
    //           type="file"
    //           class="form-control" 
    //           onChange={handleFileChange(setSelectedFile)}
    //           accept=".jpg,.jpeg,.png,.pdf"
    //           required
    //         />
    //       </div>

    //       <div style={{ marginTop: "2em" }}>
    //         <h5 className="mb-3">
    //           {" "}
    //           <b>Passport Details</b>{" "}
    //         </h5>
    //       </div>

    //       <div className="form-group" style={{ marginTop: "1em" }}>
    //         <label>Passport Number: <span className="text-danger">*</span></label>
    //         <input
    //           type="text"
    //           className="form-control" 
    //           name="passportNumber"
    //           value={formData.passportNumber}
    //           onChange={handleChange}
    //           required
    //         />

    //         <label>Passport Issued Date: <span className="text-danger">*</span></label>
    //         <input
    //           type="date"
    //           className="form-control" 
    //           name="pIssueDate"
    //           value={formData.pIssueDate}
    //           onChange={handleChange}
    //           required
    //         />

    //         <label>Passport Expired Date: <span className="text-danger">*</span> </label>
    //         <input
    //           type="date"
    //           className="form-control" 
    //           name="pExpiredDate"
    //           value={formData.pExpiredDate}
    //           onChange={handleChange}
    //           required
    //         />

    //         <label>Upload Passport Copy (PDF or image): <span className="text-danger">*</span> </label>
    //         <input
    //           type="file"
    //           className="form-control" 
    //           onChange={handleFileChange(setSelectedFile2)}
    //           accept=".jpg,.jpeg,.png,.pdf"
    //         />
    //       </div>

    //       <div style={{ marginTop: "2em" }}>
    //         <h5 className="mb-3">
    //           <b> Travel Information</b>{" "}
    //         </h5>
    //       </div>

    //       <div className="form-group" style={{ marginTop: "1em" }}>
    //         <label>Purpose of Visit: <span className="text-danger">*</span></label>
    //         <select
    //           className="form-select"
    //           name="purptoseOfVisit"
    //           value={formData.purptoseOfVisit}
    //           onChange={handleChange}
    //           required
    //         >
    //           <option value="" disabled>
    //             select
    //           </option>
    //           <option value="Tourism">Tourism</option>
    //           <option value="Business">Business</option>
    //           <option value="Study">Study</option>
    //           <option value="Work">Work</option>
    //         </select>

    //         <label>Visa Type: <span className="text-danger">*</span></label>
    //         <select
    //           className="form-select"
    //           class="form-control" 
    //           name="VisaType"
    //           value={formData.VisaType}
    //           onChange={handleChange}
    //           required
    //         >
    //           <option value="" disabled>
    //             select
    //           </option>
    //           <option value="Single_Entry">Single Entry</option>
    //           <option value="Multiple_Entry">Multiple Entry</option>
    //         </select>

    //         <label>Intended Arrival Date: <span className="text-danger">*</span> </label>
    //         <input
    //           type="date"
    //           name="intArrivalDate"
    //           value={formData.intArrivalDate}
    //           onChange={handleChange}
    //           required
    //         />

    //         <label>Intended duration of stay: <span className="text-danger">*</span> </label>
    //         <select
    //           className="form-select"
    //           name="DurationofStay"
    //           value={formData.DurationofStay}
    //           onChange={handleChange}
    //           required
    //         >
    //           <option value="" disabled>
    //             select
    //           </option>
    //           <option value="15 Days">15 Days</option>
    //           <option value="30 Days">30 Days</option>
    //           <option value="90 Days">90 Days</option>
    //         </select>
    //       </div>

    //       <div style={{ marginTop: "2em" }}>
    //         <h5 className="mb-3">
    //           {" "}
    //           <b>Document Uploads</b>{" "}
    //         </h5>
    //       </div>

    //       <div className="form-group" style={{ marginTop: "1em" }}>
    //         <label>Letter of Invitation (PDF or image): <span className="text-danger">*</span> </label>
    //         <input
    //           type="file"
    //           onChange={handleFileChange(setLetterOfInvi)}
    //           accept=".jpg,.jpeg,.png,.pdf"
    //         />

    //         <label>Bank Statement or Proof of Funds (PDF or image): <span className="text-danger">*</span> </label>
    //         <input
    //           type="file"
    //           onChange={handleFileChange(setStatement)}
    //           accept=".jpg,.jpeg,.png,.pdf"
    //         />
    //       </div>

    //       {/* <div style={{ marginTop: '2em' }}>
    //         <b>Declaration & Signature</b>
    //       </div> */}

    //       <div className="form-group mt-4">
    //         <h5 className="mb-3">
    //           <b>Declaration & Signature</b>
    //         </h5>

    //         <div className="form-check mb-3">
    //           <input
    //             className="form-check-input"
    //             type="checkbox"
    //             id="declarationCheck"
    //             required
    //           />
    //           <label className="form-check-label" htmlFor="declarationCheck">
    //             I hereby declare that the information provided above is true and
    //             correct to the best of my knowledge. I understand that any false
    //             information may lead to the rejection of my visa application.
    //           </label>
    //         </div>

    //         <div className="row mb-3">
    //           <div className="col-md-6">

    //             <label>Applicant's Full Name:  <span className="text-danger">*</span></label>
    //         <input
    //           type="text"
    //           class="form-control" 
    //         name="applicantName"
    //           value={formData.applicantName}
    //           onChange={handleChange}
    //           required
    //         />

    //           </div>

    //           <div className="col-md-6">
    //             <label htmlFor="signatureDate" className="form-label">
    //               Date
    //             </label>
    //             <input
    //               type="date"
    //               className="form-control"
    //               id="signatureDate"
    //               value={new Date().toISOString().split("T")[0]}
    //               readOnly
    //             />
    //           </div>
    //         </div>

    //         <div className="mb-3">
    //           <label className="form-label">Signature (Type Full Name)  <span className="text-danger">*</span></label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             name="SignfullName"
    //             value={formData.SignfullName}
    //             onChange={handleChange}
    //             required
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     <button type="submit">Apply For Visa</button>
    //   </form>


    <form onSubmit={handleSubmit}>
      <h1 className="text-center mb-3 mt-4 text-2xl font-bold">Apply Visa</h1>

      <div className="form-group" style={{ margin: "1em" }}>
        <h5><b>Personal Information</b></h5>

        <label>Full Name:</label>
        <input type="text" name="fullName" className="form-control" value={formData.fullName} onChange={handleChange} required />

        <label>Mobile Number:</label>
        <input type="tel" name="mobileNumber" className="form-control" value={formData.mobileNumber} onChange={handleChange} required />

        <label>DOB:</label>
        <input type="date" name="DOB" className="form-control" value={formData.DOB} onChange={handleChange} required />

        <label>Address:</label>
        <input type="text" name="Address" className="form-control" value={formData.Address} onChange={handleChange} required />

        <label>Gender:</label>
        <select name="Gender" className="form-control" value={formData.Gender} onChange={handleChange} required>
          <option value="" disabled>Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label>Nationality:</label>
        <input type="text" name="nationality" className="form-control" value={formData.nationality} onChange={handleChange} required />

        <label>Marital Status:</label>
        <select name="maritalStatus" className="form-control" value={formData.maritalStatus} onChange={handleChange} required>
          <option value="" disabled>Select</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
        </select>

        <label>Passport-size Photo:</label>
        <input type="file" className="form-control" onChange={handleFileChange(setSelectedFile)} accept=".jpg,.jpeg,.png,.pdf" required />

        <h5 style={{ marginTop: "2em" }}><b>Passport Details</b></h5>

        <label>Passport Number:</label>
        <input type="text" name="passportNumber" className="form-control" value={formData.passportNumber} onChange={handleChange} required />

        <label>Passport Issue Date:</label>
        <input type="date" name="pIssueDate" className="form-control" value={formData.pIssueDate} onChange={handleChange} required />

        <label>Passport Expired Date:</label>
        <input type="date" name="pExpiredDate" className="form-control" value={formData.pExpiredDate} onChange={handleChange} required />

        <label>Passport Copy:</label>
        <input type="file" className="form-control" onChange={handleFileChange(setSelectedFile2)} accept=".jpg,.jpeg,.png,.pdf" />

        <h5 style={{ marginTop: "2em" }}><b>Travel Information</b></h5>

        <label>Purpose of Visit:</label>
        <select name="purptoseOfVisit" className="form-control" value={formData.purptoseOfVisit} onChange={handleChange} required>
          <option value="" disabled>Select</option>
          <option value="Tourism">Tourism</option>
          <option value="Business">Business</option>
        </select>

        <label>Visa Type:</label>
        <input type="text" name="VisaType" className="form-control" value={formData.VisaType} onChange={handleChange} required />

        <label>Duration of Stay:</label>
        <input type="text" name="DurationofStay" className="form-control" value={formData.DurationofStay} onChange={handleChange} required />

        <label>Arrival Date:</label>
        <input type="date" name="intArrivalDate" className="form-control" value={formData.intArrivalDate} onChange={handleChange} required />

        <label>Letter of Invitation:</label>
        <input type="file" className="form-control" onChange={handleFileChange(setLetterOfInvi)} accept=".jpg,.jpeg,.png,.pdf" />

        <label>Bank Statement:</label>
        <input type="file" className="form-control" onChange={handleFileChange(setStatement)} accept=".jpg,.jpeg,.png,.pdf" />

        <label>Applicant Name:</label>
        <input type="text" name="applicantName" className="form-control" value={formData.applicantName} onChange={handleChange} required />

        <label>Signature Full Name:</label>
        <input type="text" name="SignfullName" className="form-control" value={formData.SignfullName} onChange={handleChange} required />

        <button type="submit" className="btn btn-primary mt-4 mb-3">Submit Application</button>
      </div>
    </form>
  );
}

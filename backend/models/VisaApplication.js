const mongoose = require('mongoose');

const VisaApplicationSchema = new mongoose.Schema({
  mobileNumber: String,
  fullName: String,
  DOB: Date,
  Address: String,
  Gender: String,
  nationality: String,
  maritalStatus: String,
  passportNumber: String,
  pIssueDate: Date,
  pExpiredDate: Date,
  purptoseOfVisit: String,
  VisaType: String,
  DurationofStay: String,
  intArrivalDate: Date,
  applicantName: String,
  SignfullName: String,

  passportPhoto: String,
  visaPhoto: String,
  letterOfInvitation: String,
  Statement: String
}, { timestamps: true });

module.exports = mongoose.model('VisaApplication', VisaApplicationSchema);

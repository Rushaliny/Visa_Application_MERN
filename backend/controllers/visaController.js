

// const User = require('../models/VisaApplication');

// exports.login = async (req, res) => {
//   const { username, password } = req.body;
//   const user = await User.findOne({ username, password }); // Simplified for demo. Use hashed password in real apps.
//   if (user) {
//     res.json({ success: true });
//   } else {
//     res.status(401).json({ success: false, message: "Invalid credentials" });
//   }
// };

const VisaApplication = require('../models/VisaApplication');
const path = require('path');

exports.createVisaApplication = async (req, res) => {
  try {
    const {
      mobileNumber, fullName, DOB, Address, Gender, nationality,
      maritalStatus, passportNumber, pIssueDate, pExpiredDate,
      purptoseOfVisit, VisaType, DurationofStay, intArrivalDate,
      applicantName, SignfullName
    } = req.body;

    const files = req.files;

    const newApplication = new VisaApplication({
      mobileNumber,
      fullName,
      DOB,
      Address,
      Gender,
      nationality,
      maritalStatus,
      passportNumber,
      pIssueDate,
      pExpiredDate,
      purptoseOfVisit,
      VisaType,
      DurationofStay,
      intArrivalDate,
      applicantName,
      SignfullName,
      passportPhoto: files?.passportPhoto?.[0]?.filename,
      visaPhoto: files?.visaPhoto?.[0]?.filename,
      letterOfInvitation: files?.letterOfInvitation?.[0]?.filename,
      Statement: files?.Statement?.[0]?.filename
    });

    await newApplication.save();

    res.status(201).json({ message: 'Visa application submitted successfully.' });
  } catch (error) {
    console.error('Visa application error:', error);
    res.status(500).json({ error: 'Failed to submit visa application' });
  }
};

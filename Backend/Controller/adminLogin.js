import Admin from "../Model/AdminSchema.js";
import bcrypt from 'bcrypt'; // Only needed if you store hashed passwords

const adminLogin = async (req, res) => {
  try {
    // Check if the admin exists in the database
    const login = await Admin.findOne({ email: req.body.email }); // Add 'await' here
    
    if (!login) {
      // Admin user not found
      return res.status(400).json({
        success: false,
        message: "Admin User ID not found"
      });
    }

    // Compare the password (assuming passwords are stored as plain text)
    if (req.body.password === login.password) {
      // Successful login
      return res.status(200).json({
        success: true,
        message: "Admin login successful",
      });
    } else {
      // Incorrect password
      return res.status(400).json({
        success: false,
        message: "Email and Password are incorrect",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "An error occurred during login",
    });
  }
};

export default adminLogin;

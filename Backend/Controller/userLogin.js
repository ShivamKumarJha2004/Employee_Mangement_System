import User from '../Model/UserSchema.js';

const loginUser = async (req, res) => {
  try {
    // Find the user by email
    const user = await User.findOne({ email: req.body.email });
 

    // If user does not exist
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User is not registered with this emailId",
      });
    }

    // Directly compare the plain text passwords
    if (req.body.password === user.password) {
      return res.status(200).json({
        success: true,
        message: "User login successful",
        user: {
          name: user.name,
          email: user.email,
          taskCount: user.taskCount,
          tasks: user.tasks,
        },
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Email and Password are incorrect",
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "An error occurred during login",
    });
  }
};

export default loginUser;

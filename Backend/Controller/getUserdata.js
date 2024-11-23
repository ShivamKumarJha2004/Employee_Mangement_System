import User from "../Model/UserSchema.js";

const getUserdata = async (req, res) => {
  try {
    const data = await User.find({}); // No need for `toArray()`
    console.log(data);

    res.status(200).json({
        message:"data fetch Succefully",
        sucess:true,
        data:data
    }); // Send data as a response
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Failed to fetch user data" }); // Return error response
  }
};

export default getUserdata;

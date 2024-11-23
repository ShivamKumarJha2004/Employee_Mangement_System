import User from "../Model/UserSchema.js";

const insertTaskData = async (req, res) => {
  try {
    const { tasktitle, date, name, category, description, status } = req.body;

    // Validate required fields
    if (!tasktitle || !date || !name || !category || !description || !status) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Find the user by name and await the result
    const user = await User.findOne({ name });

    // Check if user exists
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Employee Not Found",
      });
    }

    // Create a new task object
    const newTask = {
      taskTitle: tasktitle,
      taskDate: date,
      taskCategory: category,
      taskDescription: description,
      status: status,
    };

    // Push the new task to the user's tasks array
    user.tasks.push(newTask);

    // Update the task count and save the user document
    await user.updateTaskCount(); // This will update the task count and save the document

    // Return success response with updated tasks
    return res.status(201).json({
      success: true,
      message: "Task added successfully.",
      tasks: user.tasks, // Return the updated tasks array
    });
  } catch (error) {
    console.error("Error inserting task data:", error);

    // Return server error response
    return res.status(500).json({
      success: false,
      message: "Failed to add task.",
      error: error.message,
    });
  }
};

export default insertTaskData;

import mongoose from "mongoose";

// Task Schema
const taskSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ["active", "newtask", "completed", "failed"],
    required: true,
  },
  taskTitle: {
    type: String,
    required: true,
  },
  taskDescription: {
    type: String,
    required: true,
  },
  taskDate: {
    type: Date,
    required: true,
  },
  taskCategory: {
    type: String,
    required: true,
  },
});

// Employee Schema
const empSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  taskCount: {
    active: {
      type: Number,
      default: 0,
    },
    newtask: {
      type: Number,
      default: 0,
    },
    completed: {
      type: Number,
      default: 0,
    },
    failed: {
      type: Number,
      default: 0,
    },
  },
  tasks: [taskSchema], // Embedding tasks as a subdocument array
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Update task counts automatically based on the tasks array
empSchema.pre('save', function (next) {
  this.taskCount.active = this.tasks.filter(task => task.status === "active").length;
  this.taskCount.newtask = this.tasks.filter(task => task.status === "newtask").length;
  this.taskCount.completed = this.tasks.filter(task => task.status === "completed").length;
  this.taskCount.failed = this.tasks.filter(task => task.status === "failed").length;
  next();
});

// Middleware to update task count when a task is added
empSchema.methods.updateTaskCount = function () {
  this.taskCount.active = this.tasks.filter(task => task.status === "active").length+1;
  this.taskCount.newtask = this.tasks.filter(task => task.status === "newtask").length+1;
  this.taskCount.completed = this.tasks.filter(task => task.status === "completed").length+1;
  this.taskCount.failed = this.tasks.filter(task => task.status === "failed").length+1;
  return this.save();
};

const User = mongoose.model("UserData", empSchema);
export default User;

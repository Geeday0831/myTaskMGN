const mongoose = require('mongoose');

// Task schema
const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date },
    priority: { type: String },
    category: { type: String },
    completed: { type: Boolean, default: false },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Task', taskSchema);

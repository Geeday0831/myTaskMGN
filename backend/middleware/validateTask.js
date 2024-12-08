const validateTask = (req, res, next) => {
    const { name, description, dueDate, priority, category } = req.body;
    if (!name || !description || !dueDate || !priority || !category) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    next();
};

module.exports = validateTask;

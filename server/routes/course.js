/*const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const protect = require('../middleware/authMiddleware');

// Add Course (protected)
router.post('/add', protect, async (req, res) => {
  const { title, description, videoUrl } = req.body;

  const newCourse = new Course({ title, description, videoUrl });
  await newCourse.save();
  res.json({ message: 'Course added!' });
});

// Get All Courses (public)
router.get('/', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

module.exports = router;
*/
const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const protect = require('../middleware/authMiddleware');

// ADD COURSE ROUTE
router.post('/add', protect, async (req, res) => {
  const { title, description, videoUrl } = req.body;

  const newCourse = new Course({ title, description, videoUrl });
  await newCourse.save();
  res.json({ message: 'Course added!' });
});

// DELETE COURSE BY ID (protected)
router.delete('/:id', protect, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    await course.deleteOne();
    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET ALL COURSES ROUTE
router.get('/', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

module.exports = router;



const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');
const protect = require('../middleware/authMiddleware');

// Add Quiz (protected)
router.post('/add', protect, async (req, res) => {
  const { courseId, questions } = req.body;

  const newQuiz = new Quiz({
    courseId,
    questions
  });

  await newQuiz.save();
  res.json({ message: 'Quiz added!' });
});

// Get Quiz by Course ID
router.get('/:courseId', async (req, res) => {
  const quiz = await Quiz.findOne({ courseId: req.params.courseId });
  res.json(quiz);
});

module.exports = router;

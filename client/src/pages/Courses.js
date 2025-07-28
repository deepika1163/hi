/*import React, { useState, useEffect } from 'react';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('http://localhost:5000/api/courses');
      const data = await res.json();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      {courses.map((course) => (
        <div key={course._id}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <iframe
            width="560"
            height="315"
            src={course.videoUrl}
            title={course.title}
            allowFullScreen
          ></iframe>
          <hr />
          <a href={`/quiz/${course._id}`}>
  <button>Take Quiz</button>
</a>

        </div>
      ))}
    </div>
  );
}

export default Courses;

*/

/*import React from 'react';
import { useNavigate } from 'react-router-dom';

const coursesData = [
  {
    id: 'html101',
    title: 'HTML for Beginners',
    description: 'Learn the structure of web pages using HTML.',
    color: 'bg-pink-500',
  },
  {
    id: 'css101',
    title: 'CSS Basics',
    description: 'Style your websites with powerful CSS.',
    color: 'bg-indigo-500',
  },
  {
    id: 'js101',
    title: 'JavaScript Essentials',
    description: 'Make your websites interactive with JavaScript.',
    color: 'bg-yellow-400',
  },
];

const Courses = () => {
  const navigate = useNavigate();

  const handleStartQuiz = (id) => {
    navigate(`/quiz/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-300 to-yellow-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">📚 Available Courses</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {coursesData.map((course) => (
          <div
            key={course.id}
            className={`rounded-2xl p-6 text-white shadow-xl ${course.color} flex flex-col justify-between`}
          >
            <div>
              <h2 className="text-xl font-bold mb-2">{course.title}</h2>
              <p className="text-sm mb-4">{course.description}</p>
            </div>
            <button
              onClick={() => handleStartQuiz(course.id)}
              className="bg-white text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Take Quiz
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

*/


/*import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaYoutube } from 'react-icons/fa';

const coursesData = [
  {
    id: 'html101',
    title: 'HTML for Beginners',
    description: 'Learn the structure of web pages using HTML.',
    color: 'bg-rose-500',
    videoUrl: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',
  },
  {
    id: 'css101',
    title: 'CSS Basics',
    description: 'Style your websites with powerful CSS.',
    color: 'bg-indigo-600',
    videoUrl: 'https://www.youtube.com/watch?v=1PnVor36_40',
  },
  {
    id: 'js101',
    title: 'JavaScript Essentials',
    description: 'Make your websites interactive with JavaScript.',
    color: 'bg-yellow-400 text-gray-900',
    videoUrl: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
  },
  {
    id: 'react101',
    title: 'React JS Basics',
    description: 'Build dynamic interfaces using React.',
    color: 'bg-blue-700',
    videoUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
  },
  {
    id: 'node101',
    title: 'Node.js Introduction',
    description: 'Understand server-side JavaScript with Node.',
    color: 'bg-green-600',
    videoUrl: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
  },
  {
    id: 'mongo101',
    title: 'MongoDB Basics',
    description: 'Learn NoSQL database with MongoDB.',
    color: 'bg-emerald-600',
    videoUrl: 'https://www.youtube.com/watch?v=Of1gZy0G8hk',
  },
];

const Courses = () => {
  const navigate = useNavigate();

  const handleStartQuiz = (id) => {
    navigate(`/quiz/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-100 to-slate-300 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">📚 Explore Our Courses</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {coursesData.map((course) => (
          <div
            key={course.id}
            className={`rounded-2xl p-6 shadow-xl ${course.color} flex flex-col justify-between`}
          >
            <div>
              <h2 className="text-xl font-bold mb-2">{course.title}</h2>
              <p className="text-sm mb-4">{course.description}</p>
            </div>

            <div className="flex items-center justify-between mt-2">
              <button
                onClick={() => handleStartQuiz(course.id)}
                className="bg-white text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Take Quiz
              </button>
              <a
                href={course.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:scale-110 transition"
                title="Watch on YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

*/


/*import React, { useState, useEffect } from 'react';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/courses');
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error('Failed to fetch courses:', err);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-blue-500 p-4">
      <h2 className="text-4xl font-bold text-white text-center mb-8">Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden p-4 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-indigo-700 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>

              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-md"
                  src={course.videoUrl}
                  title={course.title}
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <a href={`/quiz/${course._id}`}>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                Take Quiz
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
*/


import React, { useState, useEffect } from 'react';
import { FaBookOpen, FaPlayCircle } from 'react-icons/fa';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/courses');
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error('Failed to fetch courses:', err);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 p-6">
      <h2 className="text-5xl font-extrabold text-white text-center mb-12 drop-shadow-md">
        📚 Explore Our Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-indigo-800 flex items-center gap-2 mb-2">
                <FaBookOpen /> {course.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{course.description}</p>

              <div className="aspect-video rounded-lg overflow-hidden shadow-inner mb-4">
                <iframe
                  className="w-full h-full"
                  src={course.videoUrl}
                  title={course.title}
                  allowFullScreen
                ></iframe>
              </div>

              <a href={`/quiz/${course._id}`}>
                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white font-bold py-2 px-4 rounded-xl transition duration-300 shadow-md hover:shadow-xl">
                  <FaPlayCircle />
                  Take Quiz
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;

import { useState, useEffect, useRef, useContext } from "react";
import { StudentContext } from "../StudentProvider";
import { studentRecord } from "../Details";
import { useNavigate } from "react-router-dom";

function Form() {
  const { students, setStudents, setProfile } = useContext(StudentContext);
  const formRef = useRef(null);
  const [newStudent, setNewStudent] = useState({
    name: "",
    age: "",
    gender: "",
    course: "",
    grade: "",
    favourite: false,
    profile: "",
  });

  useEffect(() => {
    document.title = "Student Form";
    if (formRef.current) {
      formRef.current.scrollIntoView({ behaviour: "smooth", block: "start" });
    }
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newStudent.name === "") {
      newStudent.name = studentRecord.name;
    }
    if (newStudent.age === "") {
      newStudent.age = studentRecord.age;
    }
    if (newStudent.gender === "") {
      newStudent.gender = studentRecord.gender;
    }
    if (newStudent.course === "") {
      newStudent.course = studentRecord.course;
    }
    if (newStudent.grade === "") {
      newStudent.grade = studentRecord.grade;
    }
    if (newStudent.favourite === false) {
      newStudent.favourite = studentRecord.favourite;
    }
    if (newStudent.profile === "") {
      newStudent.profile = studentRecord.profile;
    }
    newStudent.roll = students[students.length - 1].roll + 1;

    setStudents([...students, newStudent]);
    setNewStudent({
      name: "",
      age: "",
      gender: "",
      course: "",
      grade: "",
      favourite: false,
      profile: "",
    });

    setTimeout(() => navigate("/"), 500);
  };

  return (
    <section className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
      ref={formRef}
    >
      <div className="animate-slide-up w-full max-w-lg lg:max-w-4xl">
        <div className="rounded-2xl border border-gray-100 bg-white p-10 shadow-2xl">
          <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-gray-900">
            Add New Student
          </h2>
          <form className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="space-y-2">
              <label className="block px-4 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={newStudent.name}
                placeholder="Enter Student Name"
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block px-4 text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="text"
                name="age"
                value={newStudent.age}
                placeholder="Enter Student Age"
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
              />
            </div>
            <div className="space-y-2">
              <label className="block px-4 text-sm font-medium text-gray-700">
                Grade
              </label>
              <select
                name="grade"
                value={newStudent.grade}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 px-2 py-3 shadow-sm focus:border-violet-500 focus:ring-violet-500"
              >
                <option value="" disabled>
                  Select Grade
                </option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block px-4 text-sm font-medium text-gray-700">
                Course
              </label>
              <select
                name="course"
                value={newStudent.course}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 px-2 py-3 shadow-sm focus:border-violet-500 focus:ring-violet-500"
              >
                <option value="" disabled>
                  Select Course
                </option>
                <option value="Computer Science">Computer Science</option>
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Commerce">Commerce</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block px-4 text-sm font-medium text-gray-700">
                Gender
              </label>
              <div className="mt-2 flex items-center gap-6 rounded-lg border border-gray-200 bg-gray-50 p-3">
                <span className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={newStudent.gender === "Male"}
                    onChange={handleChange}
                    className="h-4 w-4 border-gray-300 text-violet-600 focus:ring-violet-500"
                  />
                  <label className="block px-4 text-sm font-medium text-gray-700">
                    Male
                  </label>
                </span>
                <span className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={newStudent.gender === "Female"}
                    onChange={handleChange}
                    className="h-4 w-4 border-gray-300 text-violet-600 focus:ring-violet-500"
                  />
                  <label className="block px-4 text-sm font-medium text-gray-700">
                    Female
                  </label>
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block px-4 text-sm font-medium text-gray-700">
                Profile Image
              </label>
              <input
                type="text"
                name="profile"
                value={newStudent.profile}
                onChange={handleChange}
                placeholder="Profile Image Link"
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="flex w-full transform justify-center rounded-lg border border-transparent bg-linear-to-r from-violet-600 to-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:from-violet-700 hover:to-indigo-700 focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:outline-none lg:col-span-2"
            >
              Add Student
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;

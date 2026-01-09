import { useState, useContext } from "react";
import { StudentContext } from "../StudentProvider";
import { studentRecord } from "../Details";
import { useNavigate } from "react-router-dom";

function Form() {
    const { students, setStudents } = useContext(StudentContext);
    const [newStudent, setNewStudent] = useState({
        name: "",
        age: "",
        gender: "",
        course: "",
        grade: "",
        favourite: false,
        profile: "",
    });

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
        <section>
            <form className="flex flex-col items-center justify-center gap-8 p-8">
                <table className="w-[24rem] border-none p-2">
                    <tbody>
                        <tr>
                            <th className="border-none px-2 py-2 text-left">
                                Name
                            </th>
                            <td className="border-none px-2 py-2">
                                <input
                                    type="text"
                                    name="name"
                                    value={newStudent.name}
                                    placeholder="Enter Student Name"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>

                        <tr>
                            <th className="border-none px-2 py-2 text-left">
                                Age
                            </th>
                            <td className="border-none px-2 py-2">
                                <input
                                    type="number"
                                    name="age"
                                    value={newStudent.age}
                                    placeholder="Enter Student Age"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>

                        <tr>
                            <th className="border-none px-2 py-4 text-left">
                                Course
                            </th>
                            <td className="border-none px-2 py-4">
                                <select
                                    name="course"
                                    value={newStudent.course}
                                    onChange={handleChange}
                                    className="border-dark w-full rounded-md border-2 py-2 pr-10 pl-1"
                                >
                                    <option value="Computer Science">
                                        Computer Science
                                    </option>
                                    <option value="Information Technology">
                                        Information Technology
                                    </option>
                                    <option value="Commerce">Commerce</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <th className="border-none px-2 py-4 text-left">
                                Grade
                            </th>
                            <td className="border-none px-2 py-4">
                                <select
                                    name="grade"
                                    value={newStudent.grade}
                                    onChange={handleChange}
                                    className="border-dark w-full rounded-md border-2 py-2 pr-10 pl-1"
                                >
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                    <option value="F">F</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <th className="border-none px-2 py-4 text-left">
                                Gender
                            </th>
                            <td className="border-none px-2 py-4">
                                <div className="flex items-center gap-2">
                                    <span className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                            checked={
                                                newStudent.gender === "Male"
                                            }
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="">Male</label>
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="gender"
                                            checked={
                                                newStudent.gender === "Female"
                                            }
                                            onChange={handleChange}
                                            value="Female"
                                        />
                                        <label htmlFor="">Female</label>
                                    </span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <th className="border-none px-2 py-2 text-left">
                                Profile
                            </th>
                            <td className="border-none px-2 py-2">
                                <input
                                    type="text"
                                    name="profile"
                                    value={newStudent.profile}
                                    onChange={handleChange}
                                    placeholder="Enter Image Link"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" onClick={handleSubmit}>
                    Add Student
                </button>
            </form>
        </section>
    );
}

export default Form;

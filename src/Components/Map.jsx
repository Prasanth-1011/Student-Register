import { useContext } from "react";
import { StudentContext } from "../StudentProvider";

function Map({ list }) {
  const { students, setStudents, setProfile, ref } = useContext(StudentContext);

  const toggleFavourite = (student) => {
    setStudents(
      students.map((one) => {
        if (one.name === student.name) {
          return {
            ...one,
            favourite: !one.favourite,
          };
        }
        return one;
      }),
    );
  };

  const sendDetails = (student) => setProfile(student);

  const deleteStudent = (student) => {
    setStudents(students.filter((one) => one.name !== student.name));
  };

  return (
    <>
      {list.map((student, index) => (
        <tr
          key={index}
          className="group transition-colors duration-200 hover:bg-violet-50/50"
        >
          <td className="p-4 text-center font-medium text-gray-900">
            {index + 1}
          </td>
          <td className="p-4 font-semibold text-gray-800">{student.name}</td>
          <td className="p-4 text-center">
            <span className="font-bold text-gray-700">{student.roll}</span>
          </td>
          <td className="p-4 text-center">
            <button
              type="button"
              className={`w-28 transform rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-offset-1 focus:outline-none active:scale-95 ${
                student.favourite
                  ? "bg-red-100 text-red-600 hover:bg-red-200 focus:ring-red-500"
                  : "bg-violet-600 text-white shadow-md hover:bg-violet-700 hover:shadow-violet-200 focus:ring-violet-500"
              }`}
              onClick={() => toggleFavourite(student)}
            >
              {student.favourite ? "Remove" : "Add"}
            </button>
          </td>
          <td className="p-4">
            <div className="flex w-full items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => sendDetails(student)}
                className="w-auto rounded border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
              >
                Details
              </button>
              <button
                type="button"
                className="w-auto rounded bg-red-100 px-6 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-200"
                onClick={() => deleteStudent(student)}
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}

export default Map;

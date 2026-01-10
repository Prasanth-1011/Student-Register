import { useContext } from "react";
import { StudentContext } from "../StudentProvider";

function Map({ list }) {
    const { students, setStudents } = useContext(StudentContext);
    return (
        <>
            {list.map((student, index) => (
                <tr
                    key={index}
                    className="group transition-colors duration-200 hover:bg-violet-50/50"
                >
                    <td className="px-6 py-4 font-medium text-gray-900">
                        {index + 1}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-800">
                        {student.name}
                    </td>
                    <td className="px-6 py-4 text-center">
                        <span className="font-bold text-gray-700">
                            {student.roll}
                        </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                        <button
                            type="button"
                            className={`w-28 transform rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-offset-1 focus:outline-none active:scale-95 ${
                                student.favourite
                                    ? "bg-red-50 text-red-600 hover:bg-red-100 focus:ring-red-500"
                                    : "bg-violet-600 text-white shadow-md hover:bg-violet-700 hover:shadow-violet-200 focus:ring-violet-500"
                            }`}
                            onClick={() => {
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
                            }}
                        >
                            {student.favourite ? "Remove" : "Add"}
                        </button>
                    </td>
                    <td className="px-6 py-4">
                        <div className="flex w-full items-center justify-center gap-3 opacity-80 transition-opacity group-hover:opacity-100">
                            <button
                                type="button"
                                onClick={() => {}}
                                className="w-auto rounded border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
                            >
                                Details
                            </button>
                            <button
                                type="button"
                                className="w-auto rounded bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 transition-colors hover:bg-red-100"
                                onClick={() =>
                                    setStudents(
                                        students.filter(
                                            (one) => one.name !== student.name,
                                        ),
                                    )
                                }
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

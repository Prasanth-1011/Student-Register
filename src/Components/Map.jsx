import { useContext } from "react";
import { StudentContext } from "../StudentProvider";

function Map({ list }) {
    const { students, setStudents } = useContext(StudentContext);
    return (
        <>
            {list.map((student, index) => (
                <tr key={index}>
                    <td className="border-2 border-black p-4 text-center">
                        {index + 1}
                    </td>
                    <td className="border-2 border-black p-4 text-left text-nowrap">
                        {student.name}
                    </td>
                    <td className="border-2 border-black p-4 text-center">
                        {student.roll}
                    </td>
                    <td className="border-2 border-black p-4 text-center">
                        <button
                            type="button"
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
                    <td className="border-2 border-black p-4">
                        <div className="flex w-full items-center justify-center gap-4">
                            <button type="button" onClick={() => {}}>
                                Details
                            </button>
                            <button
                                type="button"
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

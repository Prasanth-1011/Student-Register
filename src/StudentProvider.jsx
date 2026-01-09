import { useState, createContext } from "react";
import { studentList } from "./Details";

export const StudentContext = createContext();

function StudentProvider({ children }) {
    const [students, setStudents] = useState(studentList);
    return (
        <StudentContext.Provider value={{ students, setStudents }}>
            {children}
        </StudentContext.Provider>
    );
}

export default StudentProvider;

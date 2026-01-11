import { useState, useRef, createContext } from "react";
import { studentList } from "./Details";

export const StudentContext = createContext();

function StudentProvider({ children }) {
  const [students, setStudents] = useState(studentList);
  const [profile, setProfile] = useState();

  return (
    <StudentContext.Provider
      value={{ students, setStudents, profile, setProfile }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;

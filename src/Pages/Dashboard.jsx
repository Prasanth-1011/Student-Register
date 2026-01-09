import { useContext } from "react";
import Map from "../Components/Map";
import { StudentContext } from "../StudentProvider";

function Dashboard() {
    const { students, setStudents } = useContext(StudentContext);

    return (
        <section className="flex flex-col items-center justify-center gap-8 px-2 py-6">
            <h1 className="text-center text-xl font-bold">Student List</h1>

            <div className="w-[90%] snap-x overflow-x-auto">
                <table className="mx-auto border-collapse p-2">
                    <thead>
                        <tr>
                            <th className="border-dark border-2 p-2 text-lg font-bold"></th>
                            <th className="border-dark border-2 p-2 text-left text-lg font-bold">
                                Name
                            </th>
                            <th className="border-dark border-2 p-2 text-lg font-bold">
                                Roll
                            </th>
                            <th className="border-dark border-2 p-2 text-lg font-bold">
                                Favourites
                            </th>
                            <th className="border-dark border-2 p-2 text-lg font-bold">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <Map list={students} />
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Dashboard;

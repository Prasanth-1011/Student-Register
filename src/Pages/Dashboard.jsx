import { useEffect, useContext } from "react";
import Map from "../Components/Map";
import { StudentContext } from "../StudentProvider";

function Dashboard() {
    const { students, setStudents } = useContext(StudentContext);

    useEffect(() => {
        document.title = "Student List";
    });

    return (
        <section className="flex h-[86vh] flex-col items-center justify-start gap-8 overflow-y-auto bg-gray-50 px-4 py-8">
            <h1 className="mt-4 text-center text-2xl font-bold tracking-wide text-gray-800">
                Student List
            </h1>

            <div className="animate-fade-in w-full max-w-5xl">
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
                    <table className="w-full border-collapse text-left text-gray-600">
                        <thead className="bg-violet-50 text-lg font-bold text-violet-700">
                            <tr>
                                <th className="px-6 py-4"></th>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4 text-center">Roll</th>
                                <th className="px-6 py-4 text-center">
                                    Favourites
                                </th>
                                <th className="px-6 py-4 text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <Map list={students} />
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;

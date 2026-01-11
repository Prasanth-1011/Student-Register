import { useEffect, useContext } from "react";
import Map from "../Components/Map";
import Profile from "../Components/Profile";
import { StudentContext } from "../StudentProvider";

function Dashboard() {
  const { students, profile } = useContext(StudentContext);

  useEffect(() => {
    document.title = "Dashboard";
  });

  return (
    <section className="flex flex-col items-center justify-start gap-12 bg-gray-50 px-4 py-8">
      <h1 className="text-center text-2xl font-bold tracking-wide text-gray-800">
        Student List
      </h1>
      <div className="animate-fade-in w-full max-w-5xl overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-md">
        <table className="w-full border-collapse text-left text-gray-600">
          <thead className="bg-violet-50 text-lg font-bold text-violet-700">
            <tr>
              <th className="px-6 py-4 text-center"></th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4 text-center">Roll</th>
              <th className="px-6 py-4 text-center">Favourites</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <Map list={students} details={true} />
          </tbody>
        </table>
      </div>

      {profile && <Profile />}
    </section>
  );
}

export default Dashboard;

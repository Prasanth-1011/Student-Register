import { useEffect, useRef, useContext } from "react";
import { StudentContext } from "../StudentProvider";
import Map from "../Components/Map";

function Favourite() {
  const { students, setProfile } = useContext(StudentContext);
  const favourites = students.filter((student) => student.favourite);
  const favRef = useRef(null);

  useEffect(() => {
    document.title = "Favourite Students";
    if (favRef.current) {
      favRef.current.scrollIntoView({ behaviour: "smooth", block: "start" });
    }
  }, []);

  return (
    <section
      className="flex h-[86vh] scroll-mt-32 flex-col items-center justify-start gap-8 overflow-y-auto bg-gray-50 px-4 py-8"
      ref={favRef}
    >
      <h1 className="mt-4 text-center text-2xl font-bold tracking-wide text-gray-800">
        Favourite Students
      </h1>

      <div className="animate-fade-in w-full max-w-5xl">
        {favourites.length > 0 ? (
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-xl">
            <table className="w-full border-collapse text-left text-gray-600">
              <thead className="bg-violet-50 text-lg font-bold text-violet-700">
                <tr>
                  <th className="px-6 py-4"></th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4 text-center">Roll</th>
                  <th className="px-6 py-4 text-center">Favourites</th>
                  <th className="px-6 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <Map list={favourites} details={false} />
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border border-gray-100 bg-white p-12 text-center shadow-lg">
            <p className="mb-4 text-xl text-gray-400">No Students Added Yet.</p>
            <p className="text-violet-500">Add Students From The Dashboard!</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Favourite;

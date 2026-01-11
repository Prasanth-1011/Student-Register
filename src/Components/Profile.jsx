import { useEffect, useRef, useContext } from "react";
import { StudentContext } from "../StudentProvider";

const Profile = () => {
  const { profile, setProfile } = useContext(StudentContext);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [profile]);

  return (
    <div
      className="animate-slide-up mx-auto w-full max-w-5xl scroll-mt-32 rounded-2xl border border-gray-100 bg-white p-10 shadow-md"
      ref={ref}
    >
      <div className="flex flex-col items-center gap-10 md:flex-row">
        <figure className="flex w-full items-center justify-center gap-6 md:w-1/3">
          <img
            src={profile.profile}
            alt={profile.name}
            title={profile.name}
            className="relative h-40 w-40 rounded-full border-4 border-white object-cover shadow-lg"
          />
        </figure>

        <div className="w-full flex-1 space-y-8">
          <div className="pb-6 text-center md:text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {profile.name}
            </h2>
            <p className="mt-1 text-lg font-medium text-gray-500">
              {profile.course}
            </p>
            <p className="mt-1 text-lg font-medium text-gray-500">
              {profile.roll}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="block text-sm font-medium tracking-wide text-gray-700">
                Age
              </label>
              <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-lg font-semibold text-gray-900">
                {profile.age}
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium tracking-wide text-gray-700">
                Gender
              </label>
              <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-lg font-semibold text-gray-900">
                {profile.gender}
              </div>
            </div>

            <div className="space-y-1 sm:col-span-2">
              <label className="block text-sm font-medium tracking-wide text-gray-700">
                Overall Grade
              </label>
              <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-lg font-semibold text-gray-900">
                {profile.grade}
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={() => setProfile(null)}
              className="transform rounded-lg bg-violet-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-violet-200 focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:outline-none"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

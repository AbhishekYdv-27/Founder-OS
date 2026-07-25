import { hiring } from "../data/mockData";

export default function Hiring() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Hiring Pipeline
        </h1>

        <p className="text-slate-500 mt-2">
          Track open positions and recruitment progress.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-4 font-semibold">
                Position
              </th>

              <th className="text-left p-4 font-semibold">
                Applicants
              </th>

              <th className="text-left p-4 font-semibold">
                Current Stage
              </th>
            </tr>
          </thead>

          <tbody>
            {hiring.map((job) => (
              <tr
                key={job.role}
                className="border-t hover:bg-slate-50"
              >
                <td className="p-4 font-medium">
                  {job.role}
                </td>

                <td className="p-4">
                  {job.applicants}
                </td>

                <td className="p-4">
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                    {job.stage}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-bold">
            Open Roles
          </h3>

          <p className="text-4xl font-bold text-blue-600 mt-3">
            {hiring.length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-bold">
            Total Applicants
          </h3>

          <p className="text-4xl font-bold text-green-600 mt-3">
            {hiring.reduce(
              (sum, job) => sum + job.applicants,
              0
            )}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-bold">
            Interviews
          </h3>

          <p className="text-4xl font-bold text-orange-500 mt-3">
            {
              hiring.filter(
                (job) => job.stage === "Interview"
              ).length
            }
          </p>
        </div>
      </div>
    </div>
  );
}
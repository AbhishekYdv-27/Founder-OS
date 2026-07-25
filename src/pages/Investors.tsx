import { investors } from "../data/mockData";

export default function Investors() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Investors
        </h1>

        <p className="text-slate-500 mt-2">
          Monitor investor interest and fundraising pipeline.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-4 font-semibold">
                Investor
              </th>

              <th className="text-left p-4 font-semibold">
                Investment
              </th>

              <th className="text-left p-4 font-semibold">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {investors.map((investor) => (
              <tr
                key={investor.name}
                className="border-t hover:bg-slate-50"
              >
                <td className="p-4 font-medium">
                  {investor.name}
                </td>

                <td className="p-4">
                  {investor.amount}
                </td>

                <td className="p-4">
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                    {investor.status}
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
            Total Investors
          </h3>

          <p className="text-4xl font-bold text-blue-600 mt-3">
            {investors.length}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-bold">
            Potential Funding
          </h3>

          <p className="text-4xl font-bold text-green-600 mt-3">
            $900K
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-bold">
            Meetings Scheduled
          </h3>

          <p className="text-4xl font-bold text-orange-500 mt-3">
            {
              investors.filter(
                (i) => i.status === "Meeting Scheduled"
              ).length
            }
          </p>
        </div>
      </div>
    </div>
  );
}
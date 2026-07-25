const okrs = [
  {
    objective: "Increase Monthly Revenue",
    progress: 75,
  },
  {
    objective: "Reach 25K Active Users",
    progress: 90,
  },
  {
    objective: "Reduce Customer Churn",
    progress: 55,
  },
  {
    objective: "Launch Mobile Application",
    progress: 80,
  },
  {
    objective: "Hire Engineering Team",
    progress: 45,
  },
];

export default function OKRs() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Objectives & Key Results
        </h1>

        <p className="text-slate-500 mt-2">
          Track company-wide execution and progress.
        </p>
      </div>

      {okrs.map((okr) => (
        <div
          key={okr.objective}
          className="bg-white rounded-xl shadow p-6"
        >
          <div className="flex justify-between mb-4">
            <h2 className="font-semibold text-lg">
              {okr.objective}
            </h2>

            <span className="font-bold text-blue-600">
              {okr.progress}%
            </span>
          </div>

          <div className="w-full bg-slate-200 rounded-full h-4">
            <div
              className="bg-blue-600 h-4 rounded-full transition-all duration-500"
              style={{
                width: `${okr.progress}%`,
              }}
            />
          </div>
        </div>
      ))}

    </div>
  );
}
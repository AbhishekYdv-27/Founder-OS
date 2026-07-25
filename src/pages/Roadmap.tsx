const roadmap = [
  {
    quarter: "Q3 2026",
    title: "Launch FounderOS MVP",
    status: "Completed",
  },
  {
    quarter: "Q4 2026",
    title: "AI Business Insights",
    status: "In Progress",
  },
  {
    quarter: "Q1 2027",
    title: "Investor CRM",
    status: "Planned",
  },
  {
    quarter: "Q2 2027",
    title: "Mobile Application",
    status: "Planned",
  },
  {
    quarter: "Q3 2027",
    title: "Global Expansion",
    status: "Future",
  },
];

export default function Roadmap() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Product Roadmap
        </h1>

        <p className="text-slate-500 mt-2">
          Upcoming milestones and company goals.
        </p>
      </div>

      <div className="space-y-6">
        {roadmap.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-xl shadow p-6 flex justify-between items-center"
          >
            <div>
              <p className="text-sm text-blue-600 font-semibold">
                {item.quarter}
              </p>

              <h2 className="text-xl font-bold mt-1">
                {item.title}
              </h2>
            </div>

            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                item.status === "Completed"
                  ? "bg-green-100 text-green-700"
                  : item.status === "In Progress"
                  ? "bg-yellow-100 text-yellow-700"
                  : item.status === "Planned"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-slate-200 text-slate-700"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
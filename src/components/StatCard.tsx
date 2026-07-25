type Props = {
  title: string;
  value: string;
  change: string;
};

export default function StatCard({ title, value, change }: Props) {
  const positive = change.includes("+");

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-slate-500 text-sm font-medium">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3 text-slate-800">
            {value}
          </h2>
        </div>

        <div className="text-3xl">
          {title.includes("Revenue")
            ? "💰"
            : title.includes("Users")
            ? "👥"
            : title.includes("Burn")
            ? "🔥"
            : "🚀"}
        </div>
      </div>

      <div
        className={`mt-5 inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
          positive
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {positive ? "▲" : "▼"} {change}
      </div>
    </div>
  );
}
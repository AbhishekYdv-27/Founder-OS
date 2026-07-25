import StatCard from "../components/StatCard";
import ChartCard from "../components/ChartCard";
import GoalCard from "../components/GoalCard";

import { stats, revenueData, goals } from "../data/mockData";

export default function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Hero Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white p-8 shadow-xl">
        <h1 className="text-4xl font-bold">
          Welcome back, ABHISHEK YADAV 👋
        </h1>

        <p className="mt-3 text-blue-100">
          FounderOS gives you a complete overview of your startup performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div>
            <p className="text-blue-200 text-sm">Revenue</p>
            <h2 className="text-3xl font-bold">$125K</h2>
          </div>

          <div>
            <p className="text-blue-200 text-sm">Active Users</p>
            <h2 className="text-3xl font-bold">18,420</h2>
          </div>

          <div>
            <p className="text-blue-200 text-sm">Runway</p>
            <h2 className="text-3xl font-bold">18 Months</h2>
          </div>
        </div>
      </div>



{/* Startup Health Score */}

<div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
  <div className="flex justify-between items-center">
    <div>
      <h2 className="text-2xl font-bold">
        🚀 Startup Health Score
      </h2>

      <p className="text-slate-500 mt-2">
        AI evaluation based on revenue, runway and growth.
      </p>
    </div>

    <div className="text-center">
      <div className="text-6xl font-bold text-green-600">
        94
      </div>

      <p className="font-semibold text-green-600">
        Excellent
      </p>
    </div>
  </div>

  <div className="grid grid-cols-4 gap-4 mt-8">

    <div className="bg-green-50 rounded-xl p-4 text-center">
      <h3 className="font-bold text-green-700">
        Revenue
      </h3>

      <p className="text-2xl mt-2">
        96%
      </p>
    </div>

    <div className="bg-blue-50 rounded-xl p-4 text-center">
      <h3 className="font-bold text-blue-700">
        Growth
      </h3>

      <p className="text-2xl mt-2">
        91%
      </p>
    </div>

    <div className="bg-purple-50 rounded-xl p-4 text-center">
      <h3 className="font-bold text-purple-700">
        Users
      </h3>

      <p className="text-2xl mt-2">
        93%
      </p>
    </div>

    <div className="bg-orange-50 rounded-xl p-4 text-center">
      <h3 className="font-bold text-orange-700">
        Runway
      </h3>

      <p className="text-2xl mt-2">
        95%
      </p>
    </div>

  </div>
</div>
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-xl"
          >
            <StatCard
              title={item.title}
              value={item.value}
              change={item.change}
            />
          </div>
        ))}
      </div>

      {/* Revenue Chart */}
      <ChartCard data={revenueData} />

      {/* AI Insights + Quick Actions */}
      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-bold mb-4">
            🤖 AI Business Insights
          </h2>

          <ul className="space-y-3 text-slate-600">
            <li>📈 Revenue increased by <b>12.5%</b> this month.</li>
            <li>👥 User growth remains strong.</li>
            <li>💰 Current runway is <b>18 months</b>.</li>
            <li>🚀 Recommendation: Focus on customer retention before expanding hiring.</li>
          </ul>

          <div className="mt-5 text-green-600 font-semibold">
            Confidence Score: 92%
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-bold mb-4">
            ⚡ Quick Actions
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <button className="bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700 transition">
              + Add Goal
            </button>

            <button className="bg-green-600 text-white rounded-lg py-3 hover:bg-green-700 transition">
              + Hire
            </button>

            <button className="bg-purple-600 text-white rounded-lg py-3 hover:bg-purple-700 transition">
              + Investor
            </button>

            <button className="bg-orange-500 text-white rounded-lg py-3 hover:bg-orange-600 transition">
              Generate Report
            </button>
          </div>
        </div>

      </div>

      {/* Company Goals */}
      <div>
        <h2 className="text-2xl font-bold mb-5">
          Company Goals
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {goals.map((goal) => (
            <GoalCard
              key={goal.title}
              title={goal.title}
              progress={goal.progress}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
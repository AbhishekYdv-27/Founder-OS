export default function HeroBanner() {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white p-8 shadow-xl">
      <h1 className="text-4xl font-bold">
        Welcome back, ABHISHEK YADAV 👋
      </h1>

      <p className="mt-3 text-blue-100 text-lg">
        Here's a quick overview of your startup performance.
      </p>

      <div className="grid grid-cols-3 gap-6 mt-8">
        <div>
          <p className="text-blue-200 text-sm">
            Monthly Revenue
          </p>

          <h2 className="text-3xl font-bold">
            $125K
          </h2>
        </div>

        <div>
          <p className="text-blue-200 text-sm">
            Active Users
          </p>

          <h2 className="text-3xl font-bold">
            18,420
          </h2>
        </div>

        <div>
          <p className="text-blue-200 text-sm">
            Runway
          </p>

          <h2 className="text-3xl font-bold">
            18 Months
          </h2>
        </div>
      </div>
    </div>
  );
}
export default function Vision() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Company Vision
        </h1>

        <p className="text-slate-500 mt-2">
          Our long-term direction and purpose.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-3">
          Mission
        </h2>

        <p className="text-slate-600 leading-7">
          Build tools that help founders manage every aspect of
          their startup from a single platform.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-3">
          Vision
        </h2>

        <p className="text-slate-600 leading-7">
          Become the operating system for startups worldwide,
          empowering founders with actionable insights,
          planning tools and execution dashboards.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-bold mb-2">
            🚀 Innovation
          </h3>

          <p className="text-slate-600">
            Constantly improve products with user feedback.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-bold mb-2">
            🤝 Transparency
          </h3>

          <p className="text-slate-600">
            Data-driven decisions shared across the team.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-bold mb-2">
            🌍 Impact
          </h3>

          <p className="text-slate-600">
            Help startups scale faster and build sustainable businesses.
          </p>
        </div>

      </div>

    </div>
  );
}
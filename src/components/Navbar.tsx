export default function Navbar() {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Founder Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          Welcome, Founder 👋
        </p>
      </div>

      <div className="text-right">
        <p className="font-semibold text-slate-800 text-lg">
          ABHISHEK YADAV
        </p>

        <p className="text-sm text-slate-500">
          Founder
        </p>
      </div>
    </header>
  );
}
type Props = {
  title: string;
  progress: number;
};

export default function GoalCard({ title, progress }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-slate-800">
          {title}
        </h3>

        <span className="font-bold text-blue-600">
          {progress}%
        </span>
      </div>

      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
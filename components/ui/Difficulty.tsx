interface DifficultyBadgeProps {
    level: "easy" | "medium" | "hard"
    className?: string
  }
  
  export function DifficultyBadge({ level, className = "" }: DifficultyBadgeProps) {
    const colorMap = {
      easy: "bg-green-500",
      medium: "bg-yellow-500",
      hard: "bg-red-500",
    }
  
    return (
      <div
        className={`inline-flex items-center gap-1.5 bg-white px-2 py-1 rounded-full border-2 border-black ${className}`}
      >
        <div className="flex items-center gap-0.5">
          <div
            className={`w-2 h-4 ${level === "easy" || level === "medium" || level === "hard" ? colorMap[level] : "bg-gray-200"}`}
          ></div>
          <div className={`w-2 h-4 ${level === "medium" || level === "hard" ? colorMap[level] : "bg-gray-200"}`}></div>
          <div className={`w-2 h-4 ${level === "hard" ? colorMap[level] : "bg-gray-200"}`}></div>
        </div>
        <span className="text-xs font-bold uppercase">{level}</span>
      </div>
    )
  }
  
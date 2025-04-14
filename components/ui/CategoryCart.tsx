interface CategoryBadgeProps {
    type: "veg" | "non-veg"
    className?: string
  }
  
  export function CategoryBadge({ type, className = "" }: CategoryBadgeProps) {
    return (
      <div
        className={`inline-flex items-center gap-1.5 bg-white px-2 py-1 rounded-full border-2 border-black ${className}`}
      >
        <div className={`w-3 h-3 rounded-full ${type === "veg" ? "bg-green-500" : "bg-red-500"}`}></div>
        <span className="text-xs font-bold uppercase">{type}</span>
      </div>
    )
  }
  
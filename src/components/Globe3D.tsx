export default function Globe3D() {
  return (
    <div className="w-full h-full flex items-center justify-center relative p-4">
      {/* SVG Globe Wireframe */}
      <div className="relative w-full max-w-[280px] md:max-w-[450px] aspect-square animate-[spin_40s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-30 text-gold-main overflow-visible">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
          
          {/* Latitudes */}
          <ellipse cx="50" cy="50" rx="48" ry="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <ellipse cx="50" cy="50" rx="48" ry="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <ellipse cx="50" cy="50" rx="48" ry="42" fill="none" stroke="currentColor" strokeWidth="0.5" />

          {/* Longitudes */}
          <ellipse cx="50" cy="50" rx="15" ry="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <ellipse cx="50" cy="50" rx="30" ry="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <ellipse cx="50" cy="50" rx="42" ry="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Flight Path Overlay (Static relative to globe spin) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
        <svg viewBox="0 0 100 100" className="w-full max-w-[280px] md:max-w-[450px] aspect-square overflow-visible">
          {/* Dashed Arc */}
          <path 
            d="M 20 60 Q 50 10 80 40" 
            fill="none" 
            stroke="#AD874A" 
            strokeWidth="1.5" 
            strokeDasharray="3 3"
            className="animate-[dash_20s_linear_infinite]"
          />
          {/* Departure Dot */}
          <circle cx="20" cy="60" r="2" fill="#E1C585">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
          {/* Arrival Dot */}
          <circle cx="80" cy="40" r="2" fill="#E1C585">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
          {/* Flying Plane/Dot */}
          <circle r="1.5" fill="#FFFFFF" className="shadow-[0_0_10px_#FFF]">
            <animateMotion 
              dur="4s" 
              repeatCount="indefinite" 
              path="M 20 60 Q 50 10 80 40" 
            />
          </circle>
        </svg>
      </div>

      {/* Center Depth Shadow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
        <div className="w-full max-w-[270px] md:max-w-[430px] aspect-square bg-ink-black/80 rounded-full blur-sm -z-10" />
      </div>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </div>
  );
}

export default function Logo({ className = "w-10 h-10", textClassName = "text-xl" }) {
  return (
    <div className="flex items-center gap-2">
      {/* Logo Icon */}
      <div className="relative">
        <svg 
          className={className} 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Circle */}
          <circle cx="50" cy="50" r="48" fill="url(#gradient)" />
          
          {/* Shopping Bag Shape */}
          <path 
            d="M35 40 L35 75 C35 78 37 80 40 80 L60 80 C63 80 65 78 65 75 L65 40 Z" 
            fill="white" 
            opacity="0.95"
          />
          
          {/* Bag Handle */}
          <path 
            d="M40 40 C40 32 43 25 50 25 C57 25 60 32 60 40" 
            stroke="white" 
            strokeWidth="4" 
            fill="none" 
            strokeLinecap="round"
          />
          
          {/* Product Box Inside */}
          <rect x="42" y="50" width="16" height="12" fill="#0f4d5c" rx="2" />
          <rect x="42" y="50" width="16" height="3" fill="#E67E6B" />
          
          {/* Sparkle Effect */}
          <circle cx="70" cy="30" r="3" fill="#E67E6B" opacity="0.8" />
          <circle cx="78" cy="38" r="2" fill="#E67E6B" opacity="0.6" />
          <circle cx="30" cy="35" r="2.5" fill="white" opacity="0.9" />
          
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f4d5c" />
              <stop offset="100%" stopColor="#0a3a47" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col leading-none">
        <span className={`${textClassName} font-black tracking-tight text-primary dark:text-white`}>
          Product<span className="text-accent">Zone</span>
        </span>
        <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 tracking-wider">
          SHOP SMART
        </span>
      </div>
    </div>
  );
}

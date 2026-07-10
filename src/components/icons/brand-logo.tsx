export function BrandLogo({ 
  className = "w-10 h-10",
  lightMode = false
}: { 
  className?: string;
  lightMode?: boolean;
}) {
  const primaryColor = lightMode ? "#FFFFFF" : "#0D1B2A";
  
  return (
    <svg 
      viewBox="0 0 120 120" 
      className={className} 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 95.35 24.64 A 50 50 0 1 0 95.35 95.35" stroke={primaryColor} strokeWidth="12" />
      <path d="M 35 88 L 60 28 L 85 88" stroke={primaryColor} strokeWidth="12" />
      <path d="M 47.5 58 L 60 83 L 72.5 58" stroke="#E31E24" strokeWidth="12" />
    </svg>
  );
}

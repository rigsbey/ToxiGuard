export default function LaurelBadge() {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <span className="text-[0.7rem] font-medium mx-12 text-center">
        #1<br/>Freelance Risk Detector
      </span>
      <div className="flex gap-1 items-center">
        {/* Звезды рейтинга */}
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-star fill-black"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <img
        alt="Laurel"
        width="199"
        height="100"
        className="absolute"
        src="/images/laurel.svg"
      />
    </div>
  );
} 
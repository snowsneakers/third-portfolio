export default function SkeletonCard() {
  return (
    <div className="py-3 min-h-[175px] space-y-5 rounded-[6px]">
      <div className="relative rounded-[3px] overflow-hidden select-none aspect-video">
        <div
          role="overlay"
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-[3px] transition duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            className="text-black animate-spin"
          >
            <path
              fill="white"
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
              opacity=".25"
            ></path>
            <path
              fill="currentColor"
              d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="col-span-2 min-h-[100px] flex flex-col justify-between animate-pulse">
        <span className="block bg-gray-200 w-[70px] h-[10px] rounded-md"></span>
        <span className="block bg-gray-200 h-[10px] rounded-md"></span>
        <span className="block bg-gray-200 h-[10px] rounded-md"></span>
        <span className="block bg-gray-200 h-[10px] rounded-md"></span>
        <span className="block bg-gray-200 w-[30px] h-[10px] rounded-md"></span>
      </div>
    </div>
  );
}

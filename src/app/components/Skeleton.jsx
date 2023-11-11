import SkeletonCard from "./SkeletonCard";

export default function Skeleton() {
  return (
    <section className="pt-20 space-y-5 lg:space-y-0" id="projects">
      <div className="lg:hidden z-50 sticky top-0 -mx-6 py-2 px-6 bg-[#f5f5f5] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <h2 className="text-xl font-bold">Projects</h2>
      </div>
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
          {[...Array(4)].map((x, i) => {
            return <SkeletonCard key={i} />;
          })}
        </div>
        <div className="col-span-2 space-y-3 animate-pulse">
          <span className="block bg-gray-200 w-[70px] h-[10px] rounded-md"></span>
        </div>
      </div>
    </section>
  );
}

import LoadingSpinner from "./LoadingSpinner";

const PageLoader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <LoadingSpinner className="text-[var(--neon-purple)] w-24 h-24" />
    </div>
  );
};

export default PageLoader;

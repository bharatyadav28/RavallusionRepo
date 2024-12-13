import LoadingSpinner from "./LoadingSpinner";

const PageLoader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <LoadingSpinner className="text-[var(--neon-purple)] w-32 h-32" />
    </div>
  );
};

export default PageLoader;

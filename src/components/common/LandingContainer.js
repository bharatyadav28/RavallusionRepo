const LandingContainer = ({ children, className, showBg }) => {
  return (
    <div className={`h-full w-full relative overflow-hidden  ` + className}>
      {showBg && (
        <div className="absolute top-0 -left-44 -right-20 bottom-0 -z-10 background-image"></div>
      )}
      {children}
    </div>
  );
};

export default LandingContainer;

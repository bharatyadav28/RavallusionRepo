const LandingContainer = ({ children, className, showBg }) => {
  return (
    <div className={`h-screen w-full relative overflow-hidden  ` + className}>
      {showBg && (
        <div className="absolute top-0 -left-44 -right-20 bottom-0 background-image"></div>
      )}
      {children}
    </div>
  );
};

export default LandingContainer;

import React from "react";
import { Loader2 } from "lucide-react";

function LoadingSpinner({ className }) {
  return <Loader2 className={`animate-spin ${className}`} strokeWidth={3} />;
}

export default LoadingSpinner;

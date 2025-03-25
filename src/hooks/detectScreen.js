"use client";
import { useState, useEffect } from "react";

function useSmallScreen() {
    const [isSmallScreen, setIsSmallScreen] = useState(
        typeof window !== "undefined" && window.innerWidth <= 768
    );

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        // Attach resize listener
        window.addEventListener("resize", handleResize);

        // Cleanup listener on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isSmallScreen;
}

export default useSmallScreen;

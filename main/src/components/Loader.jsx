import React, { useState, useEffect } from 'react';
import { useGlitch } from 'react-powerglitch'
import Logo from "../assets/logo.jpg";

const Loader = () => {
    const [loading, setLoading] = useState(true);
    const glitch = useGlitch()
    
    useEffect(() => {
        // Function to handle the completion of loading
        const handleLoad = () => {
            setLoading(false);
        };

        if (document.readyState === 'complete') {
            // If the document is already loaded, update the state immediately
            handleLoad();
        } else {
            // Listen for the DOMContentLoaded event
            window.addEventListener('DOMContentLoaded', handleLoad);
            // Also listen for the load event (as a fallback)
            window.addEventListener('load', handleLoad);
        }

        // Clean up the event listeners
        return () => {
            window.removeEventListener('DOMContentLoaded', handleLoad);
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed z-[1000] inset-0 bg-gray-200 flex flex-col justify-center items-center">
        <img src={Logo} className="w-[100px] rounded-full" alt="santa" />
            <div ref={glitch.ref} className="font-semibold space-x-10 text-4xl">Loading...</div>
        </div>
    );
};

export default Loader;

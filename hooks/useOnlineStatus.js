
"use client";

import { useEffect, useState } from "react";

export default function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    const updateStatus = () => {
      setIsOnline(navigator.onLine);
    };

    // Detect the current connection status.
    updateStatus();

    // Listen for connection changes.
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    // Clean up listeners when the component unmounts.
    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  return {
    isOnline,
    isOffline: isOnline === false,
    isConnectionKnown: isOnline !== null,
  };
}

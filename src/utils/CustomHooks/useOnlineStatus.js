import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [checkOnline, setCheckOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setCheckOnline(false);
    });

    window.addEventListener("online", () => {
      setCheckOnline(true);
    });
  },[]);

  return checkOnline;
};

export default useOnlineStatus;

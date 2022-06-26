import { useEffect } from "react";
import { register } from "../serviceWorkerRegistration";

const useAutoUpdate = () => {
  useEffect(() => {
    register({
      onUpdate: (worker) => {
        worker.postMessage({ type: "SKIP_WAITING" });
        window.location.reload();
      },
    });
  }, []);
};

export default useAutoUpdate;

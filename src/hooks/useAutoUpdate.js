import { useEffect } from "react";
import serviceWorker from "../service-worker";

const useAutoUpdate = () => {
  useEffect(() => {
    serviceWorker.register({
      onUpdate: (worker) => {
        worker.postMessage({ type: "SKIP_WAITING" });
        window.location.reload();
      },
    });
  }, []);
};

export default useAutoUpdate;

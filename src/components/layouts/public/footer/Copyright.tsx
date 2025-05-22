import { version } from "@/config";

const Copyright = () => {
  return (
    <div className="bg-primary flex flex-col items-center justify-center gap-2 py-6 text-white">
      <span>Copyright © 2023 Grundriss Schmiede. All rights reserved.</span>
      <span>Version: {version}</span>
    </div>
  );
};

export default Copyright;

import { ReactNode } from "react";

export const Section = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[90%] h-[90%] outline outline-1 outline-[#00b8ffcc] flex justify-center flex-col p-[10px] gap-3 bg-[#89a8ff5e] rounded">
      {children}
    </div>
  );
};

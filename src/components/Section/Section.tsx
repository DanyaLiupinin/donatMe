import { ReactNode } from "react";

export const Section = ({ children }: { children: ReactNode }) => {
  return (
    <div className="absolute mx-auto my-auto top-0 left-0 right-0 bottom-0 w-[90%] h-[90%] border border-1 border-[#00b8ffcc] flex justify-center flex-col p-[10px] gap-3 bg-[#89a8ff5e] rounded">
      {children}
    </div>
  );
};

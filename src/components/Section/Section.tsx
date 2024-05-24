import { ReactNode } from "react";

export const Section = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-[90%] h-[90%] outline outline-1 outline-[#d289ffa6] flex justify-center flex-col p-[10px] gap-3 bg-[#d289ff5e]">
      {children}
    </div>
  );
};

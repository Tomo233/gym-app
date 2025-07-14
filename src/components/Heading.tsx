import type { ReactNode } from "react";

function Heading({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-4xl text-[#bebdbd] font-semibold -tracking-tighter my-8">
      {children}
    </h1>
  );
}

export default Heading;

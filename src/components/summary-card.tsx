import type { ReactNode } from "react";

type SummaryProps = {
  children: ReactNode;
};

export const SummaryCard = ({ children }: SummaryProps) => {
  return <div className="rounded-lg bg-white p-10">{children}</div>;
};

export const SummaryContent = ({ children }: SummaryProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      {children}
    </div>
  );
};

export const SummaryHeader = ({ children }: SummaryProps) => {
  return <div className="flex items-center gap-2">{children}</div>;
};

export const SummaryTitle = ({ children }: SummaryProps) => {
  return <p className="text-dark-blue text-base">{children}</p>;
};

export const SummarySubtitle = ({ children }: SummaryProps) => {
  return <p className="text-3xl font-semibold">{children}</p>;
};

export const SummaryIcon = ({ children }: SummaryProps) => {
  return <div className="text-primary">{children}</div>;
};

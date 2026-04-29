import type { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return <header className="flex items-end justify-between">{children}</header>;
};

export const HeaderLeft = ({ children }: HeaderProps) => {
  return <div className="flex flex-col gap-1.5">{children}</div>;
};

export const HeaderRight = ({ children }: HeaderProps) => {
  return <div className="flex items-center gap-2.5">{children}</div>;
};

export const HeaderTitle = ({ children }: HeaderProps) => {
  return <h2 className="text-dark-blue text-2xl font-semibold">{children}</h2>;
};

export const HeaderSubtitle = ({ children }: HeaderProps) => {
  return <p className="text-primary text-sm font-semibold">{children}</p>;
};

import clsx from "clsx";
import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export type SidebarButtonProps = {
  children: ReactNode;
  href: string;
};

const SidebarButton = ({ children, href }: SidebarButtonProps) => {
  const sidebarButtonClass =
    "flex items-center gap-2 rounded-lg px-6 py-3 text-sm transition hover:bg-primary-opacity hover:text-primary";

  const defaultVariant = clsx(
    sidebarButtonClass,
    "bg-primary-opacity text-primary"
  );

  const ghostVariant = clsx(
    sidebarButtonClass,
    "bg-transparent text-dark-blue"
  );

  return (
    <NavLink
      to={href}
      className={({ isActive }) => (isActive ? defaultVariant : ghostVariant)}
    >
      {children}
    </NavLink>
  );
};

export default SidebarButton;

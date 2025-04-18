import React from "react";

type Props = {
  iconActive: string;
  iconInactive: string;
  label?: string;
  active?: boolean;
  onClick?: () => void;
};

export const DrawerMenuButton: React.FC<Props> = ({
  iconActive,
  iconInactive,
  label,
  active = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-start space-x-4 py-2 px-6 rounded-2xl transition delay-75 ease-in-out w-44 ${
        active
          ? "bg-[#8e80d9] bg-opacity-80"
          : "hover:bg-[#8e80d9] hover:bg-opacity-20"
      }`}
    >
      <img
        className="w-6"
        src={active ? iconActive : iconInactive}
        alt="icon"
      />
      {label && (
        <span
          className={`py-1 text-lg ${
            active ? "font-bold text-slate-100" : "text-slate-900"
          }`}
        >
          {label}
        </span>
      )}
    </button>
  );
};

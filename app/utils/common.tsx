import {
  LeaderboardInactiveIcon,
  PortfolioActiveIcon,
  PortfolioInactiveIcon,
  TraderMobileIcon,
  TradingActiveIcon,
  TradingInactiveIcon,
} from "@orderly.network/ui";

const menu = [
  {
    name: "Trading",
    href: "/",
    activeIcon: <TradingActiveIcon size={32} />,
    inactiveIcon: (
      <TradingInactiveIcon size={32} style={{ cursor: "pointer" }} />
    ),
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    activeIcon: <PortfolioActiveIcon size={32} />,
    inactiveIcon: (
      <PortfolioInactiveIcon size={32} style={{ cursor: "pointer" }} />
    ),
  },
  {
    name: "Markets",
    href: "/markets",
    activeIcon: <TraderMobileIcon />,
    inactiveIcon: (
      <LeaderboardInactiveIcon
        size={32}
        style={{ cursor: "pointer", marginBottom: "-10px" }}
      />
    ),
  },
];

export const getButtonNavMenu = (current: string) => {
  return {
    mainMenus: menu.map((item) =>
      item.href === current ? item : { ...item, name: "" }
    ),
    current,
  };
};

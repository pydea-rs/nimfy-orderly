import { useMemo } from "react";
import { Outlet, useLocation } from "@remix-run/react";
import {
  PortfolioLayoutWidget,
  PortfolioLeftSidebarPath,
} from "@orderly.network/portfolio";
import config from "@/utils/config";
import { useNav } from "@/hooks/useNav";
import { getButtonNavMenu } from "@/utils/common";
import { PortfolioSidebarIconsMap } from "@/components/icons/portfolio-sidebar";

export default function PortfolioLayout() {
  const location = useLocation();
  const pathname = location.pathname;

  const { onRouteChange } = useNav();

  const currentPath = useMemo(() => {
    if (pathname.endsWith("/portfolio")) return "/portfolio";
    if (pathname.endsWith("/portfolio/fee")) return "/portfolio/feeTier";
    if (pathname.endsWith("/portfolio/api-key")) return "/portfolio/apiKey";
    return pathname;
  }, [pathname]);

  return (
    <PortfolioLayoutWidget
      footerProps={config.scaffold.footerProps}
      mainNavProps={{
        ...config.scaffold.mainNavProps,
        initialMenu: "/portfolio",
      }}
      routerAdapter={{
        onRouteChange,
      }}
      leftSideProps={{
        current: currentPath,
        items: Object.entries(PortfolioLeftSidebarPath)
          .filter(
            ([name]) => !["apikey", "history"].includes(name.toLowerCase())
          )
          .map(([name, href]) => ({
            name,
            href,
            icon: PortfolioSidebarIconsMap[href],
          })),
      }}
      bottomNavProps={getButtonNavMenu("/portfolio")}
    >
      <Outlet />
    </PortfolioLayoutWidget>
  );
}

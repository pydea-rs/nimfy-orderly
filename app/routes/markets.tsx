import { Outlet } from "@remix-run/react";
import { Scaffold } from "@orderly.network/ui-scaffold";
import config from "@/utils/config";
import { useNav } from "@/hooks/useNav";
import { getButtonNavMenu } from "@/utils/common";

export default function MarketsPage() {
  const { onRouteChange } = useNav();

  return (
    <Scaffold
      mainNavProps={{
        ...config.scaffold.mainNavProps,
        initialMenu: "/markets",
      }}
      footerProps={config.scaffold.footerProps}
      bottomNavProps={getButtonNavMenu("/markets")}
      routerAdapter={{
        onRouteChange,
      }}
    >
      <Outlet />
    </Scaffold>
  );
}

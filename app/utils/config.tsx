import { TradingPageProps } from "@orderly.network/trading";
import {
  BottomNavProps,
  FooterProps,
  MainNavWidgetProps,
} from "@orderly.network/ui-scaffold";
import { AppLogos } from "@orderly.network/react-app";
import { OrderlyActiveIcon, OrderlyIcon } from "../components/icons/nimco";
import SwapTradeSwitch from "@/components/common/swap-trade-switch";
import {
  LeaderboardActiveIcon,
  LeaderboardInactiveIcon,
  PortfolioActiveIcon,
  PortfolioInactiveIcon,
  TraderMobileIcon,
  TradingActiveIcon,
  TradingInactiveIcon,
} from "@orderly.network/ui";

export type OrderlyConfig = {
  orderlyAppProvider: {
    appIcons: AppLogos;
  };
  scaffold: {
    mainNavProps: MainNavWidgetProps;
    footerProps: FooterProps;
    bottomNavProps?: BottomNavProps;
  };
  tradingPage: {
    tradingViewConfig: TradingPageProps["tradingViewConfig"];
    sharePnLConfig: TradingPageProps["sharePnLConfig"];
  };
};

const config: OrderlyConfig = {
  scaffold: {
    mainNavProps: {
      leading: <SwapTradeSwitch />,
      initialMenu: "/",
      mainMenus: [
        {
          name: "Trading",
          href: "/",
          // isSubMenuInMobile: true
        },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Markets", href: "/markets" },
      ],
      campaigns: {
        name: "Reward",
        href: "/rewards",
        icon: "/reward-logo.png",
        children: [
          {
            name: "Trading rewards",
            href: "#",
            description: "Coming Soon...",
            icon: <OrderlyIcon size={14} />,
            activeIcon: <OrderlyActiveIcon size={14} />,
            // target: "_blank",
            disabled: true,
          },

          {
            name: "Staking",
            href: "#",
            description: "Coming Soon...",
            icon: <OrderlyIcon size={14} />,
            activeIcon: <OrderlyActiveIcon size={14} />,
            // target: "_blank",
            disabled: true,
          },
        ],
      },
    },
    footerProps: {
      // telegramUrl: "https://t.me",
      discordUrl: "https://discord.gg/Bvar3BRhrY",
      twitterUrl: "https://x.com/ninco_fi",
      trailing: (
        <span
          className="oui-text-2xs oui-text-base-contrast-54"
          style={{ position: "absolute", right: 10 }}
        >
          Ninco Finance
        </span>
      ),
    },
    bottomNavProps: {
      mainMenus: [
        {
          name: "",
          href: "/",
          activeIcon: <TradingActiveIcon size={32} />,
          inactiveIcon: (
            <TradingInactiveIcon size={32} style={{ cursor: "pointer" }} />
          ),
        },
        {
          name: "",
          href: "/portfolio",
          activeIcon: <PortfolioActiveIcon size={32} />,
          inactiveIcon: (
            <PortfolioInactiveIcon size={32} style={{ cursor: "pointer" }} />
          ),
        },
        {
          name: "",
          href: "/markets",
          activeIcon: <TraderMobileIcon />,
          inactiveIcon: (
            <LeaderboardInactiveIcon
              size={32}
              style={{ cursor: "pointer", marginBottom: "-10px" }}
            />
          ),
        },
      ],
      current: "/",
    },
  },
  orderlyAppProvider: {
    appIcons: {
      main: {
        img: "/logo.png",
      },
      secondary: {
        img: "/logo-secondary.svg",
      },
    },
  },
  tradingPage: {
    tradingViewConfig: {
      scriptSRC: "/tradingview/charting_library/charting_library.js",
      library_path: "/tradingview/charting_library/",
      customCssUrl: "/tradingview/chart.css",
    },
    sharePnLConfig: {
      backgroundImages: [
        "/pnl/poster_bg_1.png",
        "/pnl/poster_bg_2.png",
        "/pnl/poster_bg_3.png",
        "/pnl/poster_bg_4.png",
      ],

      color: "rgba(255, 255, 255, 0.98)",
      profitColor: "rgba(41, 223, 169, 1)",
      lossColor: "rgba(245, 97, 139, 1)",
      brandColor: "rgba(255, 255, 255, 0.98)",
    },
  },
};

export default config;

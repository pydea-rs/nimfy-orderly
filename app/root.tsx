import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import NincoProvider from "@/components/ninco-provider";
import "./styles/index.css";
import { useEffect } from "react";
import { applyCustomInitConfigs } from "./utils/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    applyCustomInitConfigs();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <Meta />
        <Links />
      </head>
      <body>
        <NincoProvider>{children}</NincoProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  useEffect(() => {
    document
      .querySelectorAll(
        "div.oui-box.oui-flex.oui-flex-col.oui-items-start.oui-justify-start.oui-flex-nowrap"
      )
      .forEach((div) => {
        if (
          div instanceof HTMLDivElement &&
          div.querySelector("span")?.textContent?.toLowerCase()?.trim() ===
            "24h volume"
        ) {
          div.style.display = "none";
        }
      });
  }, []);
  return <Outlet />;
}

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
  return <Outlet />;
}

import { FC, ReactNode, useCallback } from "react";
import { WalletConnectorProvider } from "@orderly.network/wallet-connector";
import { OrderlyAppProvider } from "@orderly.network/react-app";
import config from "@/utils/config";
import {
  Arbitrum,
  Avalanche,
  Base,
  Ethereum,
  NetworkId,
  Optimism,
} from "@orderly.network/types";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import injected from "@web3-onboard/injected-wallets";
import walletConnect from "@web3-onboard/walletconnect";
import binance from "@binance/w3w-blocknative-connector";

const NincoProvider: FC<{ children: ReactNode }> = (props) => {
  const networkId = import.meta.env.VITE_NETWORK_ID as NetworkId;
  const onChainChanged = useCallback(
    (_chainId: number, { isTestnet }: { isTestnet: boolean }) => {
      if (
        (isTestnet && networkId === "mainnet") ||
        (!isTestnet && networkId === "testnet")
      ) {
        setTimeout(() => {
          const href = isTestnet
            ? import.meta.env.VITE_TESTNET_URL
            : import.meta.env.VITE_MAINNET_URL;
          if (href) {
            window.location.href = href;
          }
        }, 100);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <WalletConnectorProvider
      solanaInitial={{
        network:
          networkId === "mainnet"
            ? WalletAdapterNetwork.Mainnet
            : WalletAdapterNetwork.Devnet,
      }}
      evmInitial={
        import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID &&
        typeof window !== "undefined"
          ? {
              options: {
                wallets: [
                  injected(),
                  binance({ options: { lng: "en" } }),
                  walletConnect({
                    projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
                    qrModalOptions: {
                      themeMode: "dark",
                    },
                    dappUrl: window.location.origin,
                  }),
                ],
              },
            }
          : undefined
      }
    >
      <OrderlyAppProvider
        brokerId={import.meta.env.VITE_ORDERLY_BROKER_ID}
        brokerName={import.meta.env.VITE_ORDERLY_BROKER_NAME}
        networkId={networkId}
        onChainChanged={onChainChanged}
        appIcons={config.orderlyAppProvider.appIcons}
        chainFilter={{
          mainnet: [Ethereum, Base, Avalanche, Arbitrum, Optimism],
          testnet: [
            {
              id: 10143,
              chainInfo: {
                chainName: "Monad Testnet",
                rpcUrls: ["https://testnet-rpc.monad.xyz"],
                chainId: "10143",
                nativeCurrency: {
                  name: "Monad",
                  symbol: "MON",
                  decimals: 18,
                  fix: 8,
                },
                blockExplorerUrls: ["https://testnet.monadexplorer.com/"],
              },
              chainNameShort: "Monad testnet",
              chainLogo: "",
              minGasBalance: 0.002,
              minCrossGasBalance: 0.002,
              maxPrepayCrossGas: 0.025,
              blockExplorerName: "Monad explorer",
              chainName: "Monad testnet",
              requestRpc: "https://testnet-rpc.monad.xyz",
            },
          ],
        }}
      >
        {props.children}
      </OrderlyAppProvider>
    </WalletConnectorProvider>
  );
};

export default NincoProvider;

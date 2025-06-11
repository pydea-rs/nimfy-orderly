export function generatePageTitle(title: string) {
  return `${title} | ${import.meta.env.VITE_ORDERLY_BROKER_NAME}`;
}

export function formatSymbol(symbol: string, format = "base-type") {
  const arr = symbol.split("_");
  const type = arr[0];
  const base = arr[1];
  const quote = arr[2];

  return format
    .replace("type", type)
    .replace("base", base)
    .replace("quote", quote);
}

export const applyCustomInitConfigs = () => {
  setTimeout(() => {
    const isInitialized = localStorage.getItem("init");
    if (isInitialized === "1") {
      return;
    }
    const adapterSettingsJSON = localStorage.getItem("SDK_Tradingview_adapter");
    if (!adapterSettingsJSON) {
      return;
    }
    const adapterSettings = JSON.parse(adapterSettingsJSON);
    if (!adapterSettings) {
      return;
    }
    if (!("ChartDrawingToolbarWidget.visible" in adapterSettings)) {
      adapterSettings["ChartDrawingToolbarWidget.visible"] = "true";
      localStorage.setItem(
        "SDK_Tradingview_adapter",
        JSON.stringify(adapterSettings)
      );
    }
    localStorage.setItem("init", "1");
    window.location.reload();
  }, 5000);
};

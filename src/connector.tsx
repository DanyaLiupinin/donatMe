import TonConnect from "@tonconnect/sdk";

export const connector = new TonConnect({
  manifestUrl:
    "https://raw.githubusercontent.com/DanyaLiupinin/donatMe/master/tonconnect-manifest.json",
});

connector.restoreConnection();

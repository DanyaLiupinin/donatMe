import TonConnect from "@tonconnect/sdk";

export const connector = new TonConnect({ manifestUrl: "" });

connector.restoreConnection();

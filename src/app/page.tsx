"use client";
import { TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";

export default function Home() {
  return (
    <TonConnectUIProvider
      manifestUrl="https://ton.vote/tonconnect-manifest.json"
      actionsConfiguration={{
        returnStrategy: "https://t.me/miniappdemobot/demo",
        twaReturnUrl: "https://t.me/miniappdemobot/demo",
      }}
    >
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <TonConnectButton />
      </main>
    </TonConnectUIProvider>
  );
}

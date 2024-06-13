"use client";
import WalletModal from "@/components/common/Modals/WalletModal";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

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
        <div className="w-auto flex items-center justify-center">
          <WalletModal title="Telegram test" type="SOL" />
        </div>
      </main>
    </TonConnectUIProvider>
  );
}

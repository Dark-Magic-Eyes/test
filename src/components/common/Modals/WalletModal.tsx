import CommonBtn from "../Btn/CommonBtn";
import CommonTitle from "../Titles/CommonTitle";
import SolBalanceField from "../BalanceField/SolBalanceField";
import { useEffect, useState } from "react";
import {
  useTonAddress,
  useTonConnectUI,
  useTonWallet,
} from "@tonconnect/ui-react";
import { getHttpEndpoint } from "@orbs-network/ton-access";
import PayBtn from "../Btn/PayBtn";
import { TonClient, address, toNano } from "ton";

type coinType = "SOL" | "USDC";

const WalletModal = ({ title, type }: { title: string; type: coinType }) => {
  const [publicKey, setPublicKey] = useState("null");
  const [balance, setBalance] = useState(0);
  const [usdBalance] = useState(0);
  const [tonConnectUI, setOptions] = useTonConnectUI();
  const wallet = useTonWallet();
  const userFriendlyAddress = useTonAddress();

  const getBalance = async () => {
    const endpoint = await getHttpEndpoint({ network: "testnet" });
    const client = new TonClient({ endpoint });
    if (tonConnectUI.account?.publicKey) {
      const balance = await client.getBalance(address(userFriendlyAddress));
      console.log(balance.toString());
      setBalance(parseFloat(balance.toString()) / 1000000000);
    }
  };

  useEffect(() => {
    if (userFriendlyAddress) {
      getBalance();
    }
  }, [userFriendlyAddress]);
  const connectWallet = async (type: string) => {
    if (!tonConnectUI.connected) {
      tonConnectUI.openModal();
    } else {
      tonConnectUI.disconnect();
    }
  };

  const disconnectWallet = () => {};
  const FormatWalletAddress = (address: string) => {
    return (
      address.slice(0, 6) +
      "..." +
      address.slice(address.length - 4, address.length)
    );
  };
  const sendTransation = () => {
    const myTransaction = {
      validUntil: Math.floor(Date.now() / 1000) + 360,
      messages: [
          {
              address: 'UQCuqoblMuisG_O91dd8Gxe5P7blaNTjAf_LuaLXAehUn1sl', // sender jetton wallet
              amount: toNano(0.05).toString(), // for commission fees, excess will be returned
          }
      ]
  }
    tonConnectUI.sendTransaction(myTransaction)
  }
  return (
    <div className="flex w-[260px] flex-col items-start rounded-lg border-[1px] border-solid border-[#D0DEF4] bg-[linear-gradient(180deg,_#FFF_0%,_#F3F6F9_100%)] [box-shadow:0px_12px_32px_-12px_rgba(0,_0,_0,_0.25)]">
      <div className="flex p-[4px] justify-between items-center self-stretch">
        <CommonTitle title={title} />
      </div>
      <div className="flex px-0 py-[16px] justify-center items-center gap-[10px] self-stretch rounded-[16px]">
        <CommonBtn
          btnText={
            !userFriendlyAddress
              ? "Connect Wallet"
              : FormatWalletAddress(userFriendlyAddress)
          }
          btnFunction={
            publicKey == "null"
              ? () => {
                  connectWallet(type);
                }
              : disconnectWallet
          }
        />
      </div>
      {userFriendlyAddress ? (
        <div className="flex pl-[12px] pr-[12px] py-[8px] flex-col items-end gap-[8px] self-stretch rounded-[16px]">
          <SolBalanceField balance={balance.toString() || ""} />
          <div className="flex pl-[8px] pr-[4px] py-[4px] items-center gap-[10px] self-stretch rounded-[4px] border-[0.5px] border-[solid] border-[#D0DEF4]">
            <input
              id="solValue"
              placeholder="Enter Amount"
              type="number"
              className="appearance-none flex-1 text-[#8A939B] text-[12px] not-italic font-normal leading-[16px]"
            />
            <PayBtn btnFunction={sendTransation} />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default WalletModal;

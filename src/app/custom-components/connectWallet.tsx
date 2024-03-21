"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useMemo, useState } from "react";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { useToast } from "@/components/ui/use-toast";
import Web3 from "web3";

const ConnectWalletButton = () => {
  const {
    connectWallet,
    isConnected,
    disconnectWallet,
    walletState,
    isLoading,
  } = useWallet();
  const { toast } = useToast();
  const [browserConnected, setBrowserConnected] = useState(false);
  useEffect(() => {
    if (typeof window?.ethereum != "undefined") {
      console.log({ first: window?.ethereum?.isConnected() });
      setBrowserConnected(!!window?.ethereum?.isConnected());
    }
  }, []);
  useEffect(() => {
    if (browserConnected && !isConnected) {
      connectWallet();
    }
  }, [browserConnected]);
  //   if(isLoading){return }
  if (isConnected && browserConnected)
    return (
      <Button
        onClick={() => {
          disconnectWallet();
        }}
        className="z-50 bg-secondary text-zinc-950 cursor-pointer hover:bg-secondary/90"
      >
        Disconnect
      </Button>
    );
  return (
    <Button
      onClick={() => {
        if (typeof window?.ethereum == "undefined") {
          return toast({
            title: "Uh oh!!! No wallet detected",
            description: "Make sure you have metamask installed",
            variant: "destructive",
          });
        }
        connectWallet();
      }}
      className="z-50 bg-secondary text-zinc-950 cursor-pointer hover:bg-secondary/90"
    >
      Connect Wallet
    </Button>
  );
};
interface wallet {
  contract(...arg: any): any;
  //   tokenMetadata(...arg: any): Promise<TokenMetadata>;
  getAddress(): Promise<string>;
  //   balanceOf(...arg: any): Promise<BigNumber>;
  //   balancesOf(...arg: any): Promise<BigNumber[]>;
  networkAccount: {
    addr: string;
    sk: Uint8Array;
  };
  tokenAccepted: (tok: string | number) => Promise<boolean>;
  tokenAccept: (tok: string | number) => Promise<any>;
}
const useWallet = () => {
  const [wallet, setWallet] = useState({} as wallet);
  const [walletState, setWalletState] = useState<
    "idle" | "connected" | "loading" | "error"
  >();
  const isConnected = walletState == "connected";
  const isLoading = walletState == "loading";
  const isError = walletState == "error";

  // const router = useRouter();
  //   const switchAccount = async (acct: string) => {
  //     z.string().nonempty().min(56).parse(acct);
  //     const walletType = window.localStorage.getItem("walletType");
  //     const TYPES = walletType as walletTypes;
  //     if (!(TYPES === "pera" || TYPES === "DF")) return;
  //     const Peraconnect_Wallet = window.localStorage.getItem(
  //       "PeraWallet.Wallet" satisfies LocalStorageItem
  //     );
  //     const Peraconnect_Wallet_Obj = JSON.parse(Peraconnect_Wallet!);
  //     const walletConnect = window.localStorage.getItem(
  //       "walletconnect" satisfies LocalStorageItem
  //     );
  //     const walletConnect_Obj = JSON.parse(walletConnect!);
  //     let item = LocalStorageItems.parse({
  //       "PeraWallet.Wallet": Peraconnect_Wallet_Obj,
  //       walletconnect: walletConnect_Obj,
  //     });
  //     //?We are setting the variable for the perawallet instance on localstorage to enable us
  //     //? Change wallets on pera and Defly wallets
  //     item["PeraWallet.Wallet"].accounts = moveItemToFirstIndex(
  //       acct,
  //       item["PeraWallet.Wallet"].accounts
  //     );
  //     item["PeraWallet.Wallet"].selectedAccount = acct;

  //     //?We are setting the variable for the walletConnect instance on localstorage to enable us
  //     //? Change wallets on pera and Defly wallets
  //     item["walletconnect"].accounts = moveItemToFirstIndex(
  //       acct,
  //       item["walletconnect"].accounts
  //     );

  //     // * We start storing on local storage

  //     window?.localStorage.setItem(
  //       "PeraWallet.Wallet",
  //       JSON.stringify(item["PeraWallet.Wallet"])
  //     );
  //     window?.localStorage.setItem(
  //       "walletconnect",
  //       JSON.stringify(item["walletconnect"])
  //     );
  //     await window?.algorand.wc.ensurePC();
  //     const addr = await window?.algorand.wc.getAddr();
  //     const _acct = await reach.connectAccount({ addr });
  //     setWallet(_acct);
  //   };
  const wallets = useMemo(() => {
    if (!isConnected) return [];
    // const TYPES = walletType as walletTypes;
    // if (TYPES === "pera" || TYPES == "DF") {
    //   const walletConnect = window.localStorage.getItem(
    //     "walletconnect" satisfies LocalStorageItem
    //   );
    //   const walletConnect_Obj = JSON.parse(walletConnect!);
    //   const item = LocalStorageItems.omit({ "PeraWallet.Wallet": true }).parse({
    //     walletconnect: walletConnect_Obj,
    //   });
    //   return item.walletconnect.accounts;
    // }

    return [wallet?.networkAccount?.addr];
  }, [isConnected, wallet?.networkAccount?.addr]);

  //   const handleSwitch = async (item: walletTypes) => {
  //     switch (item) {
  //       case "algo":
  //         if (typeof window?.algorand === "object") {
  //           // await window?.algorand?.disconnect();
  //           delete window?.algorand;
  //         }
  //         reach = loadStdlib("ALGO");
  //         reach.setWalletFallback(
  //           reach.walletFallback({
  //             providerEnv: ProviderEnv.get(),
  //             MyAlgoConnect,
  //           })
  //         );
  //         window.localStorage.setItem("walletType", "algo");
  //         break;
  //       case "pera":
  //         if (typeof window?.algorand === "object") {
  //           // await window?.algorand?.disconnect();
  //           delete window?.algorand;
  //         }
  //         reach = loadStdlib("ALGO");

  //         reach.setWalletFallback(
  //           reach.walletFallback({
  //             providerEnv: ProviderEnv.get(),
  //             WalletConnect: MakePeraConnect(PeraWalletConnect),
  //           })
  //         );
  //         window.localStorage.setItem("walletType", "pera");
  //         break;
  //       case "WC":
  //         if (typeof window?.algorand === "object") {
  //           // await window?.algorand?.disconnect();
  //           delete window?.algorand;
  //         }
  //         reach = loadStdlib("ALGO");
  //         reach.setWalletFallback(
  //           reach.walletFallback({
  //             providerEnv: ProviderEnv.get(),
  //             WalletConnect: MakeWalletConnect(WalletConnect, QRCodeModal),
  //           })
  //         );
  //         window.localStorage.setItem("walletType", "WC");
  //         break;
  //       case "DF":
  //         if (typeof window?.algorand === "object") {
  //           // await window?.algorand?.disconnect();
  //           delete window?.algorand;
  //         }
  //         reach = loadStdlib("ALGO");
  //         reach.setWalletFallback(
  //           reach.walletFallback({
  //             providerEnv: ProviderEnv.get(),
  //             // WalletConnect: MakeWalletConnect(WalletConnect, QRCodeModal),
  //             WalletConnect: MakePeraConnect(DeflyWalletConnect),
  //           })
  //         );
  //         window.localStorage.setItem("walletType", "DF");
  //         break;
  //       case "AS":
  //         if (typeof window?.algorand === "object") {
  //           // await window?.algorand?.disconnect();
  //           delete window?.algorand;
  //         }
  //         if (!window.AlgoSigner) return alert("Algosigner Not Installed");
  //         reach = loadStdlib("ALGO");
  //         reach.setWalletFallback(
  //           reach.walletFallback({
  //             providerEnv: ProviderEnv.get(),
  //             // @ts-ignore
  //             MyAlgoConnect: MakeAlgosigner(window?.AlgoSigner),
  //           })
  //         );
  //         window.localStorage.setItem("walletType", "WC");
  //         break;

  //       default:
  //         if (typeof window !== undefined) {
  //           // await window?.algorand?.disconnect();
  //           delete window?.algorand;
  //         }
  //         reach = loadStdlib("ALGO");
  //         reach.setWalletFallback(
  //           reach.walletFallback({
  //             providerEnv: ProviderEnv.get(),
  //           })
  //         );
  //         window.localStorage.setItem("walletType", "default");
  //         break;
  //     }
  //   };
  const [connectedAccount, setConnectedAccount] = useState("");
  const { toast } = useToast();
  async function connectMetamask() {
    //check metamask is installed
    if (window.ethereum) {
      // instantiate Web3 with the injected provider
      const web3 = new Web3(window.ethereum);

      //request user to connect accounts (Metamask will prompt)
      await window.ethereum.request({ method: "eth_requestAccounts" });

      //get the connected accounts
      const accounts = await web3.eth.getAccounts();

      //show the first connected account in the react page
      setConnectedAccount(accounts[0]);
      return accounts[0];
    } else {
      return toast({
        title: "Uh oh!!! No wallet detected",
        description: "Make sure you have metamask installed",
        variant: "destructive",
      });
    }
  }
  const connectWallet = async () => {
    if (isLoading) return;
    try {
      setWalletState("loading");
      const walleltInstance = await connectMetamask();
      if (!walleltInstance) return;
      //   setWallet(walleltInstance);
      setWalletState("connected");
      return walleltInstance;
    } catch (error) {
      console.error(error);
      setWalletState("error");
      // setErrored(true);
    }
  };
  const disconnectWallet = async () => {
    setWalletState("idle");
  };

  return {
    wallet,
    isConnected,
    connectWallet,
    disconnectWallet,
    // switchAccount,
    isLoading,
    // handleSwitch,
    isError,
    wallets,
    walletState,
  };
};
export default ConnectWalletButton;

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
    // ethereum: typeof eth;
  }
}

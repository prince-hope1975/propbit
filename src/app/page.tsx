import Image from "next/image";
import Link from "next/link";
import ConnectWalletButton from "./custom-components/connectWallet";
import { BarChartIcon, HomeIcon } from "@radix-ui/react-icons";
import { FaQ } from "react-icons/fa6";
import { BsQuestion } from "react-icons/bs";


export default function Home() {
  return (
    <>
      <nav className="p-2 md:px-20 w-screen bg-white text- flex justify-between text-primary ">
        <span className="flex gap-2 items-center ">
          <Image src={"/icon.png"} alt="propbit" width={30} height={30} />
          <p className={``}>Propbit</p>
        </span>
        <ul className="flex md:gap-4 gap-4 items-center">
          <li>
            <Link className="flex " href="/">
              <span className="sr-only sm:not-sr-only">Home</span>
              <span className="sm:hidden ">
                <HomeIcon />
              </span>
            </Link>
          </li>
          <li>
            <Link className="flex " href="/investmenets">
              <span className="sr-only sm:not-sr-only">Investments</span>
              <button title="investments" className="sm:hidden ">
                <BarChartIcon />
              </button>
            </Link>
          </li>
          <li>
            <Link className="flex " href="/about">
              <span className="sr-only sm:not-sr-only"> About us</span>
              <button title="about us" className="sm:hidden ">
                <BsQuestion />
              </button>
            </Link>
          </li>
          <li>
            <Link className="flex " href="/faq">
              <span className="sr-only sm:not-sr-only">FAQs</span>
              <button title="faq" className="sm:hidden ">
                <FaQ />
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="relative isolate w-screen  flex items-center flex-col bg-primary pt-24 overflow-hidden gap-y-6">
          <h1 className="text-center text-white font-semibold md:text-5xl z-50">
            Revolutionize the real estate <br /> Investment landscape
          </h1>
          {/* Connect wallet implementation */}
          <ConnectWalletButton />
          {/* Connect wallet implementation */}
          <Image
            src={"/squiggles-overlay.png"}
            width={1000}
            height={1000}
            className="absolute inset-0 -z-1  isolate w-full"
            alt="property image"
          />
          <Image
            src={"/overlay-2.png"}
            width={1000}
            height={1000}
            className="absolute inset-0 -z-1  isolate translate-x-5 w-full"
            alt="property image"
          />
          <Image
            src={"/half.png"}
            width={1000}
            height={1000}
            alt="property image"
            className="z-40"
          />
        </div>
        <div className="w-screen flex items-center flex-col bg-white">
          <Image
            src={"/house.png"}
            width={1000}
            height={1000}
            alt="property image"
            className="z-40"
          />
          <div className="grid sm:grid-cols-4 container mx-auto my-16 sm:divide-x-2 divide-slate-950 max-w-[871px]">
            <span className="text-center">
              <p className="text-4xl text-secondary font-semibold ">
                20k <span className="text-gray-700 text-xl">+</span>
              </p>
              <p>Product users</p>
            </span>
            <span className="text-center">
              <p className="text-4xl text-secondary font-semibold ">
                153 <span className="text-gray-700 text-xl">+</span>
              </p>

              <p>Properties</p>
            </span>
            <span className="text-center">
              <p className="text-4xl text-secondary font-semibold ">
                63k <span className="text-gray-700 text-xl">+</span>
              </p>
              <p>Realtors</p>
            </span>
            <span className="text-center">
              <p className="text-4xl text-secondary font-semibold ">30k</p>
              <p>Security</p>
            </span>
          </div>
        </div>
        {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Get started by editing&nbsp;
            <code className="font-mono font-bold">src/app/page.tsx</code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div> */}

        <section className="container min-h-screen bg-arb my-20 p-3 sm:p-20 sm:px-32 grid gap-10">
          <h2 className="capitalize w-full text-2xl  sm:text-4xl ">
            Why Choose us ?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data?.map((item,idx) => (
              <Card key={idx} {...item} />
            ))}
          </div>
        </section>
        <section className="container min-h-screen   p-3 sm:px-32 grid gap-10">
          <div className="grid sm:grid-cols-2 gap-4 p-4 py-6 bg-primary rounded-lg  mx-auto h-max">
            <div className="overflow-hidden rounded-md flex items-center justify-center">
              <Image
                src={"/futuristic_house.png"}
                width={400}
                height={400}
                alt="futuristic_house"
              />
            </div>
            <div className="flex flex-col gap-4 ">
              <h3 className="capitalize  sm:text-4xl text-xl sm:mb-8 text-secondary font-semibold">
                How it works
              </h3>
              <div className="flex flex-col gap-6 text-white text-sm sm:text-base">
                <span>
                  1. Sign Up: Register to access our platform and explore
                  investment opportunities.
                </span>{" "}
                <span>
                  2. Browse Properties: Explore a diverse range of tokenized
                  properties available for investment.
                </span>{" "}
                <span>
                  3. Invest and Trade: Invest in fractional ownership of
                  properties and trade real estate tokens seamlessly.
                </span>{" "}
                <span>
                  4. Earn Passive Income: Sit back and watch your investments
                  grow as you receive automated rental income distributions.
                </span>{" "}
                <span>
                  5. Engage in Governance: Have a say in property management and
                  investment decisions through decentralized governance
                  mechanisms.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="container min-h-screen  my-20 p-3 sm:p-20 sm:px-32 grid gap-10">
          <h2 className="capitalize w-full text-2xl  sm:text-4xl ">
            Why Trust Us ?
          </h2>
          <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 gap-4 ">
            <span className="flex flex-col gap-4 ">
              {miniCardData?.map((item,idx) => (
                <MiniCard key={idx} {...item} />
              ))}
            </span>
            <div className="flex items-center justify-center relative">
              <Image
                src={"/Frame 29.png"}
                width={300}
                height={600}
                alt="people"
              />
              <Image
                src={"/customer-feedback 1.png"}
                width={150}
                height={150}
                alt="customer-feedback"
                className="absolute translate-x-[70%] sm:translate-x-full translate-y-[60%]"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary py-10 flex items-center justify-center text-white text-lg">
        <span className="flex gap-2 items-center ">
          <Image src={"/icon-white.png"} alt="propbit" width={30} height={30} />
          <p className={``}>Propbit</p>
        </span>
      </footer>
    </>
  );
}
const Card = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="flex flex-col rounded-md border overflow-hidden p-4 gap-4">
      <Image src={"/Frame 25.png"} width={30} height={30} alt="head" />
      <p className="text-primary text-base sm:text-[24px] max-w-[63%] ">{title}</p>
      <p className="text-support text-sm sm:text-[18px]">{desc}</p>
    </div>
  );
};
const MiniCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="flex flex-col rounded-md  overflow-hidden p-4 gap-4 bg-arb">
      <p className="text-primary text-base sm:text-[22px] max-w-[63%]">{title}</p>
      <p className="text-support text-sm sm:text-[16px]">{desc}</p>
    </div>
  );
};
const miniCardData = [
  {
    title: `Secure Transactions:`,
    desc: "Our platform utilizes blockchain technology for secure and transparent transactions.",
  },
  {
    title: `Expertise and Innovation:`,
    desc: "Backed by Cartesi's Rollup protocol, we ensure scalability and reliability.",
  },
  {
    title: `Compliance and Regulation:`,
    desc: "We adhere to strict identity verification and compliance protocols to ensure a safe and compliant investment environment.",
  },

];
const data = [
  {
    title: `Democratized Investment
     Opportunities`,
    desc: "Bid farewell to illiquid assets. With our marketplace for tokenized properties and liquidity pools, you can trade real estate tokens peer-to-peer, ensuring enhanced liquidity and transparent price discovery.",
  },
  {
    title: `Enhanced Liquidity and 
Transparency`,
    desc: "Bid farewell to illiquid assets. With our marketplace for tokenized properties and liquidity pools, you can trade real estate tokens peer-to-peer, ensuring enhanced liquidity and transparent price discovery.",
  },
  {
    title: `Passive Income 
Opportunities`,
    desc: "Sit back and watch your investments grow. Our automated rental income distribution ensures fair and transparent revenue sharing among token holders, without the need for intermediaries.",
  },
  {
    title: `Community-Driven Decision 
Making`,
    desc: "Be part of something bigger. As a token holder, you'll have governance rights, empowering you to participate in property management and investment decisions through decentralized governance mechanisms.",
  },
];

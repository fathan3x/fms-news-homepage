import "@fontsource-variable/inter";
import { cn } from "cn";

import logo from "./assets/logo.svg";
import menu from "./assets/icon-menu.svg";
import web3 from "./assets/image-web-3-desktop.jpg";

import retroPc from "./assets/image-retro-pcs.jpg";
import topLaptops from "./assets/image-top-laptops.jpg";
import gamingGrowth from "./assets/image-gaming-growth.jpg";

export function App() {
  const style = {
    "bg-off-white": "bg-[hsl(36,100%,99%)]",
    "bg-dark-blue": "bg-[hsl(240,100%,5%)]",
    "bg-grayish-blue": "bg-[hsl(236,13%,42%)]",
    "text-grayish-blue": "text-[hsl(236,13%,42%)]",
    "text-soft-orange": "text-[hsl(35,77%,62%)]",
    "text-soft-red": "text-[hsl(5,85%,63%)]",
    link: "text-[hsl(236,13%,42%)] hover:text-[hsl(35,77%,62%)]",
    "link-2": "text-white hover:text-[hsl(35,77%,62%)]",
    "link-3": "text-black hover:text-[hsl(5,85%,63%)]",
    button: "bg-[hsl(5,85%,63%)] hover:bg-[hsl(240,100%,5%)] hover:text-white",
  };
  return (
    <main className={cn(style["bg-off-white"], "font-['Inter_Variable']")}>
      <header className="max-w-5xl mx-auto px-6 pb-6 pt-6 lg:pt-20 flex items-center justify-between">
        <img src={logo} />
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10">
            <li>
              <a className={cn(style.link, "cursor-pointer")}>Home</a>
            </li>
            <li>
              <a className={cn(style.link, "cursor-pointer")}>New</a>
            </li>
            <li>
              <a className={cn(style.link, "cursor-pointer")}>Popular</a>
            </li>
            <li>
              <a className={cn(style.link, "cursor-pointer")}>Trending</a>
            </li>
            <li>
              <a className={cn(style.link, "cursor-pointer")}>Categories</a>
            </li>
          </ul>
        </nav>
        <button className="block lg:hidden">
          <img src={menu} className="w-full h-full" />
        </button>
      </header>
      <section className="px-6 pt-6 pb-6 lg:pb-20 max-w-5xl mx-auto grid lg:grid-cols-3 lg:grid-rows-3 gap-6">
        <article className="lg:col-span-2 lg:row-span-2">
          <div className="flex flex-col gap-6">
            <img src={web3} />
            <div className="flex flex-col lg:flex-row gap-6">
              <h3 className="text-[42px] leading-none font-extrabold">
                The Bright Future of Web 3.0?
              </h3>
              <div className="basis-[120%] space-y-6">
                <p className={cn(style["text-grayish-blue"], "text-[15px]")}>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button
                  className={cn(
                    style.button,
                    "font-bold py-3 px-4 text-sm tracking-[0.2em] w-40 cursor-pointer",
                  )}
                >
                  <p>READ MORE</p>
                </button>
              </div>
            </div>
          </div>
        </article>
        <article className="lg:row-span-2 lg:col-start-3">
          <div
            className={cn(style["bg-dark-blue"], "p-6 text-white space-y-8")}
          >
            <h2 className={cn(style["text-soft-orange"], "font-bold text-3xl")}>
              New
            </h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <a
                  className={cn(
                    style["link-2"],
                    "font-bold text-xl block cursor-pointer",
                  )}
                >
                  Hydrogen VS Electric Cars
                </a>
                <p className="text-white/50 text-sm">
                  Will hydrogen-fueled cars ever catch up to EVs?
                </p>
              </div>
              <div className={cn(style["bg-grayish-blue"], "h-px")} />
              <div className="space-y-2">
                <a
                  className={cn(
                    style["link-2"],
                    "font-bold text-xl block cursor-pointer",
                  )}
                >
                  The Downsides of AI Artistry
                </a>
                <p className="text-white/50 text-sm">
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
              </div>
              <div className={cn(style["bg-grayish-blue"], "h-px")} />
              <div className="space-y-2">
                <a
                  className={cn(
                    style["link-2"],
                    "font-bold text-xl block cursor-pointer",
                  )}
                >
                  Is VC Funding Drying Up?
                </a>
                <p className="text-white/50 text-sm">
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </div>
            </div>
          </div>
        </article>
        <article className="lg:row-start-3">
          <div className="flex gap-4">
            <div className="basis-[30%] shrink-0">
              <img src={retroPc} className="w-full h-full" />
            </div>
            <div className="flex flex-col justify-around">
              <p className={cn(style["text-soft-red"], "text-3xl font-bold")}>
                01
              </p>
              <a
                className={cn(
                  style["link-3"],
                  "text-sm block font-black cursor-pointer",
                )}
              >
                Reviving Retro PCs
              </a>
              <p className="text-sm text-black/50 font-medium">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>
        </article>
        <article className="lg:row-start-3">
          <div className="flex gap-4">
            <div className="basis-[30%] shrink-0">
              <img src={topLaptops} className="w-full h-full" />
            </div>
            <div className="flex flex-col justify-around">
              <p className={cn(style["text-soft-red"], "text-3xl font-bold")}>
                02
              </p>
              <a
                className={cn(
                  style["link-3"],
                  "text-sm block font-black cursor-pointer",
                )}
              >
                Top 10 Laptops of 2022
              </a>
              <p className="text-sm text-black/50 font-medium">
                Our best picks for various needs and budgets.
              </p>
            </div>
          </div>
        </article>
        <article className="lg:row-start-3">
          <div className="flex gap-4">
            <div className="basis-[30%] shrink-0">
              <img src={gamingGrowth} className="w-full h-full" />
            </div>
            <div className="flex flex-col justify-around">
              <p className={cn(style["text-soft-red"], "text-3xl font-bold")}>
                03
              </p>
              <a
                className={cn(
                  style["link-3"],
                  "text-sm block font-black cursor-pointer",
                )}
              >
                The Growth of Gaming
              </a>
              <p className="text-sm text-black/50 font-medium">
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

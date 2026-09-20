import { Fragment } from "react/jsx-runtime";
import { spaceGrotesk } from "./layout";

const Home = () => {
  return (
    <Fragment>
      <header className="px-0 py-7 border-b border-b-line bg-[rgba(15,27,45,0.7)] backdrop-blur-[6px] sticky top-0 z-10">
        <div className="px-8 py-0 max-w-280 mx-auto xl:max-w-330 xl:px-10 flex items-center justify-between">
          <div
            className={`flex items-center gap-2.5 ${spaceGrotesk.className} font-bold text-[19px]`}
          >
            <span className="w-2 h-2 rounded-[50%] bg-accent shadow-[0_0_0_4px_rgba(255,182,39,0.15)] shrink-0"></span>
            PowerPulse
          </div>
          <nav>
            <a
              className="text-muted text-[15px] ml-7 transition-[color_0.15_ease] hover:text-light"
              href="#about"
            >
              About
            </a>
            <a
              className="text-muted text-[15px] ml-7 transition-[color_0.15_ease] hover:text-light"
              href="#signup-bottom"
            >
              Get alerts
            </a>
          </nav>
        </div>
      </header>

      <section className="px-0 pt-25 pb-22">
        <div className="px-8 py-0 max-w-280 mx-auto xl:max-w-330 xl:px-10 grid grid-cols-1 gap-14 items-center xl:gap-22 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="text-[clamp(34px,3.4vw,58px)] leading-[1.08] mb-5.5">
              Know before the power goes out.
            </h1>
            <p className="text-muted text-[17px] max-w-[46ch] mb-8.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua, ut
              enim ad minim veniam quis nostrud exercitation.
            </p>

            <form
              className="flex gap-2.5 max-w-120 flex-wrap"
              id="signup-form"
              noValidate
            >
              <label
                htmlFor="email-top"
                className="sr-only"
                style={{ position: "absolute", left: "-9999px" }}
              >
                Email address
              </label>
              <input
                className="flex-[1_1_240px] bg-surface border border-solid border-line rounded-sm text-light py-3.5 px-4 text-[15px] outline-none transition-[border-color_0.15s_ease] placeholder:text-[#5E6E85] focus:text-accent focus-visible:outline-[2px_solid_var(--accent)] focus-visible:outline-offset-2"
                type="email"
                id="email-top"
                name="email"
                placeholder="you@email.com"
                required
              />
              <button
                type="submit"
                className="bg-accent text-[#1A1102] border-none rounded-sm py-3.5 px-5.5 font-semibold text-[15px] cursor-pointer whitespace-nowrap transition-[background_0.15s_ease,transform_0.1s_ease] hover:bg-[#FFC658] active:translate-y-0.5 focus-visible:outline-[2px_solid_var(--light)] focus-visible:outline-offset-2"
              >
                Start receiving alerts
              </button>
            </form>
            <p className="text-[13px] text-[#5E6E85] mt-3">
              One email per outage in your area. No spam, unsubscribe anytime.
            </p>
          </div>

          <div className="bg-surface border border-solid border-line rounded-lg pt-7 px-6 pb-5">
            <div className="flex justify-between text-[13px] text-muted mb-4.5">
              <span>Grid status</span>
              <b className="text-light font-medium">Sample feed</b>
            </div>
            <svg
              className="w-full h-auto block"
              viewBox="0 0 360 120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-none stroke-accent stroke-2 stroke-linecap-round stroke-linejoin-round stroke-dasharray-[620] stroke-dashoffset-[620]"
                d="M0,60 L70,60 L95,60 L112,18 L134,100 L152,60 L180,60 L205,60 L228,30 L250,90 L272,60 L320,60 L360,60"
              />
              <circle
                className="fill-accent [offset-path:path('M0,60_L70,60_L95,60_L112,18_L134,100_L152,60_L180,60_L205,60_L228,30_L250,90_L272,60_L320,60_L360,60')] animate-travel"
                r="4"
              />
            </svg>
            <div className="flex items-center gap-2 mt-4.5 text-[13px] text-muted">
              <span className="w-1.75 h-1.75 rounded-[50%] bg-[#3FD08C] shadow-[0_0_0_3px_rgba(63,208,140,0.18)]"></span>
              Monitoring for interruptions
            </div>
          </div>
        </div>
      </section>

      <section className="py-22 px-0 xl:py-28" id="about">
        <div className="px-8 py-0 max-w-280 mx-auto xl:max-w-330 xl:px-10">
          <div className="grid grid-cols-1 gap-5 mb-14 md:grid-cols-[1fr_1.4fr] md:gap-12 xl:mb-14">
            <h2 className="text-3xl leading-[1.2]">What PowerPulse does</h2>
            <p className="text-muted text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore.
            </p>
          </div>

          <div className="grid gap-px bg-line border border-solid border-line rounded-md overflow-hidden grid-cols-1 md:grid-cols-3">
            <div className="py-5.5 px-5 bg-surface sm:py-7 sm:px-6.5">
              <h3 className="text-[17px] mb-2.5">Early notice</h3>
              <p className="text-muted text-[14.5px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="py-5.5 px-5 bg-surface sm:py-7 sm:px-6.5">
              <h3 className="text-[17px] mb-2.5">Area-based alerts</h3>
              <p className="text-muted text-[14.5px]">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea.
              </p>
            </div>
            <div className="py-5.5 px-5 bg-surface sm:py-7 sm:px-6.5">
              <h3 className="text-[17px] mb-2.5">Restoration updates</h3>
              <p className="text-muted text-[14.5px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-19 px-0 xl:py-24" id="signup-bottom">
        <div className="wrap">
          <div className="cta-inner">
            <div>
              <h2>Get the next outage in your inbox.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <form className="signup" id="signup-form-bottom">
              <label
                htmlFor="email-bottom"
                className="sr-only"
                style={{ position: "absolute", left: "-9999px" }}
              >
                Email address
              </label>
              <input
                type="email"
                id="email-bottom"
                name="email"
                placeholder="you@email.com"
                required
              />
              <button type="submit" className="btn">
                Start receiving alerts
              </button>
            </form>
          </div>
        </div>
      </section> */}

      {/* <footer>
        <div className="wrap">
          <div className="logo" style={{ fontSize: "font-size:15px" }}>
            <span
              className="dot"
              style={{ width: "6px", height: "6px" }}
            ></span>
            PowerPulse
          </div>
          <p>&copy; 2026 PowerPulse. Placeholder content for preview only.</p>
        </div>
      </footer> */}
    </Fragment>
  );
};

export default Home;

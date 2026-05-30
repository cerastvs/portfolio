import { motion } from "framer-motion";
import slaycastLogo from "../../assets/slaycast logo.png";
import slaycastPreview from "../../assets/slaycast slaycast preview.png";
import slaycastLogin from "../../assets/slaycast LOG IN.png";
import slaycastHomePage from "../../assets/slaycast HOME PAGE.png";
import slaycastVoting from "../../assets/slaycast VOTING-FRAME.png";
import slaycastCommunity from "../../assets/slaycast  COMMUNITY FEED.png";
import slaycastMountain from "../../assets/slaycast mountain.png";
import slaycastTopsidown from "../../assets/slaycast upsidedownMountain.png";

export default function SlayCastShowcase() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  };

  const slaycastSrc =
    "https://www.figma.com/proto/iCC3Xd339xf00Pe6A8EQhL/SlayCast---HCI-GROUP-STUDY?node-id=711-899&p=f&t=QzOIPZMmBEn0cZTP-1&scaling=min-zoom&content-scaling=fixed&page-id=152%3A83&starting-point-node-id=711%3A823&show-proto-sidebar=1";

  return (
    <div className="bg-[#BCBCB8] text-[#1a1a1a] font-sans selection:bg-[#1a1a1a] selection:text-white">
      <div className="relative w-full overflow-hidden pb-20">
        <img
          src={slaycastTopsidown}
          alt=""
          className="w-full h-auto object-top scale-105"
        />
      </div>

      <section className="min-h-screen flex items-center justify-center px-6 py-20 lg:py-0">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <img
              src={slaycastLogo}
              alt="Slaycast"
              className="w-[280px] md:w-[320px] lg:w-[420px] mb-8"
            />

            <p className="max-w-[450px] text-lg md:text-xl leading-relaxed text-[#333]">
              Stay stylish in every forecast! get outfit recommendations based
              on the weather and share fashion moments with a community that
              loves style.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="shrink-0 w-full max-w-[400px] md:max-w-[550px] lg:max-w-none lg:w-[650px]"
          >
            <img
              src={slaycastPreview}
              alt="Slaycast Preview"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 flex flex-col items-center px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 max-w-5xl w-full">
          <motion.div
            {...fadeInUp}
            className="w-full md:w-1/2 space-y-4 text-center md:text-left order-2 md:order-1"
          >
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
              JOIN SLAYCAST
            </h3>
            <p className="text-[#444] text-base md:text-lg max-w-md mx-auto md:mx-0">
              Sign up, log in, or continue with Google or Facebook to explore
              fashion tailored to the forecast.
            </p>
          </motion.div>
          <motion.div
            {...fadeInUp}
            className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2"
          >
            <img
              src={slaycastLogin}
              alt="Login Screen"
              className="w-[200px] md:w-[260px] rounded-[2.5rem] shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 flex flex-col items-center px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 max-w-5xl w-full">
          <motion.div
            {...fadeInUp}
            className="w-full md:w-1/2 flex justify-center md:justify-start"
          >
            <img
              src={slaycastHomePage}
              alt="Forecast Screen"
              className="w-[200px] md:w-[260px] rounded-[2.5rem] shadow-2xl"
            />
          </motion.div>
          <motion.div
            {...fadeInUp}
            className="w-full md:w-1/2 space-y-4 text-center md:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
              TODAY'S FORECAST
            </h3>
            <p className="text-[#444] text-base md:text-lg max-w-md mx-auto md:mx-0">
              Real-time weather updates with personalized outfit suggestions —
              dress smart for school.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 flex flex-col items-center px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 max-w-5xl w-full">
          <motion.div
            {...fadeInUp}
            className="w-full md:w-1/2 space-y-4 text-center md:text-left order-2 md:order-1"
          >
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
              WHAT'S THE VIBE TODAY?
            </h3>
            <p className="text-[#444] text-base md:text-lg max-w-md mx-auto md:mx-0">
              Cast a vote on today's essential items, help shape the style
              forecast based on real-time weather.
            </p>
          </motion.div>
          <motion.div
            {...fadeInUp}
            className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2"
          >
            <img
              src={slaycastVoting}
              alt="Voting Screen"
              className="w-[200px] md:w-[260px] rounded-[2.5rem] shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 flex flex-col items-center px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 max-w-5xl w-full">
          <motion.div
            {...fadeInUp}
            className="w-full md:w-1/2 flex justify-center md:justify-start"
          >
            <img
              src={slaycastCommunity}
              alt="Community Feed"
              className="w-[200px] md:w-[260px] rounded-[2.5rem] shadow-2xl"
            />
          </motion.div>
          <motion.div
            {...fadeInUp}
            className="w-full md:w-1/2 space-y-4 text-center md:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
              COMMUNITY
            </h3>
            <p className="text-[#444] text-base md:text-lg max-w-md mx-auto md:mx-0">
              Explore weather-ready looks, share outfit inspo, and connect with
              others who dress with the forecast in mind.
            </p>
            <div className="pt-6">
              <a
                href={slaycastSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1a1a1a] hover:bg-black text-white px-10 py-3 rounded-md font-bold uppercase tracking-widest transition-all transform hover:scale-105 shadow-xl text-sm"
              >
                TRY SLAYCAST NOW
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="w-full mt-20 relative overflow-hidden flex flex-col items-center">
        <img
          src={slaycastMountain}
          alt=""
          className="w-full h-auto object-bottom translate-y-1"
        />
        <div className="h-20 bg-[#1B1B1B] w-full"></div>
      </div>
    </div>
  );
}

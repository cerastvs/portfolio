import { motion } from "framer-motion";
import firelightLogo from "../../assets/firelightLogo.png";
import mockFirelight from "../../assets/mockFirelight.png";
import firelightLogin from "../../assets/firelightLogin.png";
import firelightHomepage from "../../assets/firelightHomepage.png";
import firelightMessages from "../../assets/firelightMessages.png";
import firelightEvents from "../../assets/firelightEvents.png";
import gettingTickets1 from "../../assets/gettingTickets1.png";
import gettingTickets2 from "../../assets/gettingTickets2.png";
import enjoyAndWait from "../../assets/enjoyAndWait.png";

export default function FirelightShowcase() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  };

  return (
    <div className="bg-[#141414] text-white font-sans selection:bg-pink-500 selection:text-white">
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-20 gap-10">
        <motion.div
          {...fadeInUp}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={mockFirelight}
            alt="Firelight Mockup"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
        </motion.div>
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <img
            src={firelightLogo}
            alt="Firelight Logo"
            className="h-12 md:h-[72px] object-contain"
          />
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
            A case study design project in Figma for a mobile app that helps
            users find events they like and connect with concert buddies,
            focused on a seamless and interactive experience.
          </p>
        </motion.div>
      </section>

      <section className="py-20 text-center px-6">
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-5xl font-light tracking-wide text-gray-300 uppercase"
        >
          How Does the App Work?
        </motion.h2>
      </section>

      <section className="py-20 flex flex-col items-center px-6 gap-12">
        <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl w-full">
          <motion.div
            {...fadeInUp}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <img
              src={firelightLogin}
              alt="Login Screen"
              className="w-[180px] md:w-[220px] rounded-[3rem] shadow-2xl"
            />
          </motion.div>
          <motion.div
            {...fadeInUp}
            className="w-full md:w-1/2 space-y-8 text-center md:text-left"
          >
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-200">
                LOG IN OR SIGN UP
              </h3>
              <p className="text-gray-400 text-sm md:text-base max-w-md">
                Log in or sign up to start discovering events and meet your
                concert crew!
              </p>
            </div>
            <div className="w-12 h-[1px] bg-gray-700 mx-auto md:mx-0"></div>
            <p className="text-gray-500 font-bold tracking-widest text-xs uppercase">
              OR
            </p>
            <div className="w-12 h-[1px] bg-gray-700 mx-auto md:mx-0"></div>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-200">
                CONTINUE WITH SPOTIFY
              </h3>
              <p className="text-gray-400 text-sm md:text-base max-w-md">
                Connect with Spotify to sync your top artists and get
                personalized event recommendations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 flex flex-col items-center px-6 gap-12">
        <div className="flex flex-col md:flex-row-reverse items-center gap-16 max-w-6xl w-full">
          <motion.div
            {...fadeInUp}
            className="w-full md:w-1/2 flex justify-center md:justify-start"
          >
            <img
              src={firelightHomepage}
              alt="Home Page"
              className="w-[180px] md:w-[220px] rounded-[30px] shadow-2xl"
            />
          </motion.div>
          <motion.div
            {...fadeInUp}
            className="w-full md:w-1/2 space-y-4 text-center md:text-right"
          >
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-200">
              HOME PAGE
            </h3>
            <p className="text-gray-400 text-sm md:text-base max-w-md ml-auto">
              See your top Spotify artists and get event recommendations based
              on your music taste. Discover concerts, connect, and meet concert
              fans you'll love.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <motion.div
          {...fadeInUp}
          className="space-y-8 flex flex-col items-center text-center"
        >
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-200 uppercase">
              MESSAGES
            </h3>
            <img
              src={firelightMessages}
              alt="Messages"
              className="w-[240px] md:w-[280px] mx-auto rounded-3xl"
            />
          </div>
          <p className="text-gray-500 text-xs md:text-sm max-w-xs uppercase tracking-tight">
            Seamlessly chat with message to make everything easy to find. User
            can also adopt task that is adopted by her friends.
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="space-y-8 flex flex-col items-center text-center"
        >
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-200 uppercase">
              EVENTS
            </h3>
            <img
              src={firelightEvents}
              alt="Events"
              className="w-[240px] md:w-[280px] mx-auto rounded-3xl"
            />
          </div>
          <p className="text-gray-500 text-xs md:text-sm max-w-xs uppercase tracking-tight">
            Discover nearby concert and art galleries within the local area,
            making easy access to their artwork.
          </p>
        </motion.div>
      </section>

      <section className="relative bg-[#121212] overflow-hidden py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)]" />

        <div className="max-w-[1400px] mx-auto relative z-10 space-y-52">
          <motion.div
            {...fadeInUp}
            className="relative flex justify-center px-6 md:px-20"
          >
            <img
              src={gettingTickets1}
              alt=""
              className="
          w-full
          max-w-6xl
          object-contain
          drop-shadow-[0_40px_80px_rgba(0,0,0,0.85)]
        "
            />
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="relative flex justify-center px-6 md:px-20"
          >
            <img
              src={gettingTickets2}
              alt=""
              className="
          w-full
          max-w-6xl
          object-contain
          drop-shadow-[0_40px_80px_rgba(0,0,0,0.85)]
        "
            />
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 flex flex-col items-center gap-16">
        <motion.div {...fadeInUp} className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">
            ENJOY AND WAIT!
          </h2>
          <p className="text-gray-400">See you at the event!</p>
        </motion.div>

        <div className="flex flex-col items-center gap-16 max-w-6xl w-full">
          <motion.div {...fadeInUp} className="w-full flex justify-center">
            <img
              src={enjoyAndWait}
              alt="Final Ticket"
              className="w-full max-w-4xl rounded-3xl"
            />
          </motion.div>
          <motion.div {...fadeInUp} className="w-full space-y-8 text-center">
            <div className="pt-4">
              <button className="bg-[#b333e6] hover:bg-[#a02bd1] text-white px-10 py-3 rounded-full font-bold uppercase tracking-widest transition-all transform hover:scale-105 shadow-lg shadow-purple-500/20 text-sm">
                TRY FIRELIGHT NOW
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-20 bg-gradient-to-b from-[#141414] to-black"></div>
    </div>
  );
}

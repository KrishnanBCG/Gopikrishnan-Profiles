import user_info from "../../data/user_info.js";
import GitHubButton from "react-github-btn";
import { FaArrowCircleUp } from "react-icons/fa";
import ViewCounter from "../../ViewCounter.jsx";
import { useEffect, useState } from "react";

function Footer({ theme }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [showcount , setcount] = useState(false);
  return (
    <>
      <style>{`
        .visitor-wrapper {
          position: relative;
          cursor: pointer;
        }

        .visitor-tooltip {
          position: absolute;
          bottom: 120%;
          left: 50%;
          transform: translateX(-50%);
          background: #000;
          color: #fff;
          padding: 6px 10px;
          border-radius: 4px;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease;
          z-index: 100;
        }

        .visitor-wrapper:hover .visitor-tooltip {
          opacity: 1;
          visibility: visible;
        }
      `}</style>

      <footer className="p-4 text-center md:flex justify-between">
        {/* =========== GITHUB BUTTON =========== */}
        <GitHubButton
          className="self-center"
          href="https://github.com/KrishnanBCG"
          data-color-scheme={theme}
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star https://github.com/KrishnanBCG on GitHub"
        >
          Star on Github
        </GitHubButton>
        {/* =========== USER COPYRIGHT =========== */}
        <p className="text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 text-sm text-center font-light" onClick={()=>setcount(!showcount)}>
          {user_info.footer}
        </p>
        {/* =========== SCROLL ON TOP BUTTON =========== */}
        <button
          onClick={() => scrollToTop()}
          className="text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 mx-auto md:mx-0 text-sm font-light flex gap-2"
        >
          <FaArrowCircleUp className="self-center text-red-800 dark:text-red-500" /> Go back to top
        </button>
        {/* =========== VISITOR COUNT =========== */}
        {/* <div>HI</div> */}
        {showcount && <ViewCounter/>}
        {/* <div className="visitor-wrapper">
          <VisitorCount />
        </div> */}



      </footer>
    </>
  );
}

export default Footer;

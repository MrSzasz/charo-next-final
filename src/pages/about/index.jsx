import Layout from "@/components/Layout/Layout";
import { BiLinkExternal } from "react-icons/bi";

const About = () => {
  return (
    <Layout title="ABOUT | MERCEDES LLANOS">
      <div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-12">
          <img src="https://i.imgur.com/3Bv3oHO.jpg" alt="" />
          <div className="flex flex-col justify-between items-center gap-4 md:gap-0">
            <p className="leading-8">
              Mercedes Llanos (b.1992, Argentina) is a figurative painter,
              drawer and muralist based in New York City. She graduated with an
              MFA from CUNY Hunter College in 2021 and is a grantee of The
              Elizabeth Greenshields Foundation Grant for figurative painting.
              Her practice deals with the surreal aspect of dreams as they
              concern with waking life issues, mainly focusing on power roles in
              domestic partnerships embedded in a South American Patriarchal
              upbringing. In her dreams, she subconsciously navigates the
              repression of freedom firsthand experienced, and that of the
              transgenerational woman collective. Her works not only show
              tension between two opposing forces, but also love and care,
              confusing the viewer as to whether the events portrayed are
              pleasurable or painful, loving or hateful.
            </p>
            <a
              href="https://docs.google.com/document/d/1z-_LImVuLFon0gXyNGiwlEPiKS0CXGSSeQhd83P6iQ4/edit?usp=sharing"
              target="_blank"
              className="border-black rounded-lg p-4 border w-fit tracking-wider hover:bg-black hover:text-white transition-all"
            >
              MERCEDES LLANOS CV
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 py-12">
          <h2 className="text-xl">PRESS</h2>
          <h3>Selected Interviews and writing:</h3>
          <div className="flex flex-col justify-center gap-8 pt-4">
            <a
              className="w-full md:flex text-gray-500 hover:underline hover:text-blue-300 transition-all items-center gap-1"
              target="_blank"
              href="https://blog.utc.edu/news/2022/04/creativity-in-sleep-alum-artist-finds-inspirations-in-dreams/"
            >
              https://blog.utc.edu/news/2022/...
              <BiLinkExternal size={".85em"} />
            </a>
            <a
              className="w-full md:flex text-gray-500 hover:underline hover:text-blue-300 transition-all items-center gap-1"
              target="_blank"
              href="https://academicworks.cuny.edu/hc_sas_etds/801/"
            >
              https://academicworks.cuny.edu/...
              <BiLinkExternal size={".85em"} />
            </a>
            <a
              className="w-full md:flex text-gray-500 hover:underline hover:text-blue-300 transition-all items-center gap-1"
              target="_blank"
              href="https://www.mineralhousemedia.com/media/mercedesllanos/"
            >
              https://www.mineralhousemedia.com/...
              <BiLinkExternal size={".85em"} />
            </a>
            <a
              className="w-full md:flex text-gray-500 hover:underline hover:text-blue-300 transition-all items-center gap-1"
              target="_blank"
              href="https://www.instagram.com/p/BfL4mVXgLmK/"
            >
              https://www.instagram.com/...
              <BiLinkExternal size={".85em"} />
            </a>
            <a
              className="w-full md:flex text-gray-500 hover:underline hover:text-blue-300 transition-all items-center gap-1"
              target="_blank"
              href="http://www.chattanoogapulse.com/arts_entertainment/entertainment-news/the-south-american-art-of-mercedes-llanos/"
            >
              http://www.chattanoogapulse.com/...
              <BiLinkExternal size={".85em"} />
            </a>
            <a
              className="w-full md:flex text-gray-500 hover:underline hover:text-blue-300 transition-all items-center gap-1"
              target="_blank"
              href="https://articleswithsachaqa.wordpress.com/2017/03/30/transformation-mercedes-llanos-interview/"
            >
              https://articleswithsachaqa.wordpress.com/...
              <BiLinkExternal size={".85em"} />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

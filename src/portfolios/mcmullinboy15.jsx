export default function McMullinBoy15() {
  return (
    <>
      <div className="mt-8 w-full grid grid-cols-3">
        <div className="col-span-2">
          <p className="text-center font-bold text-3xl">Andrew McMullin</p>
          <div className="flex justify-center items-center">
            <div className="flex gap-x-8">
              <a
                className="text-blue-500"
                href="https://www.linkedin.com/in/andrew-mcmullin/"
              >
                LinkedIn
              </a>
              <a className="text-blue-500" href="mailto:mcmullinand@gmail.com">
                Email
              </a>
              <a
                className="text-blue-500"
                href="https://portfolio.mcmullin.app/resume"
              >
                Resume
              </a>
              <a
                className="text-blue-500"
                href="https://github.com/mcmullinboy15"
              >
                GitHub
              </a>
            </div>
          </div>
          <p className="text-center">Software Developer @ OriginMedia</p>
          <p className="text-center">Greater Salt Lake City Area</p>
          <p className="text-center w-full mt-8 px-24">
            Passionate Software Engineer with a love for continuous learning and
            a deep interest in Automation, Optimizations, Machine Learning, and
            most of all Software/Full Stack Engineering. From my first semester
            at the community college, I discovered my passion for software
            engineering, and since then, I've been dedicated to expanding my
            knowledge and expertise in all software concepts.
          </p>
        </div>

        <div className="col-span-1 mx-auto">
          <img
            className="rounded-full"
            src="https://portfolio.mcmullin.app/assets/profile_pic_face.jpg"
            height="198"
            width="265"
          />
        </div>
      </div>
    </>
  );
}

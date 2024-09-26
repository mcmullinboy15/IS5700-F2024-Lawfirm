import johniparker from "../assets/johniparker.png";
import mountainmen from "../assets/mountainmen.png";
export default function JohnIParker() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          John Parker
        </h1>
      </div>

      <div className="text-center">
        <div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Developer and Adventurer
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex gap-x-8">
          <a
            className="text-blue-500"
            href="https://www.linkedin.com/in/john-i-parker/"
          >
            LinkedIn
          </a>
          <a className="text-blue-500" href="mailto:johnisaacparker@gmail.com">
            Email
          </a>
          {/* <a
          className="text-blue-500"
          href="https://portfolio.mcmullin.app/resume"
        >
          Resume
        </a> */}
          <a className="text-blue-500" href="https://github.com/johniparker">
            GitHub
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <img
          src={johniparker}
          alt="johniparker"
          className="w-full h-auto"
          height="198"
          width="265"
        />
        <img
          src={mountainmen}
          alt="mountainmen"
          className="w-full h-auto"
          height="198"
          width="265"
        />
      </div>
    </>
  );
}

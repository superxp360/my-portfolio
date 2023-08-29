export default function AboutMe() {
    return (
      <section className="relative text-gray-600 body-font">
        <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover bg-blend-overlay object-center"
          src="/images/backgroundImage.jpg"
          alt="Background Image"
        />
        <div className="absolute inset-0 bg-[#020601] opacity-80"></div>
      </div>
        <div className="container relative mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="m-5 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center border-[6px] border-green-700 rounded w-full h-full mb-5"
              alt="hero"
              src="/images/mePic2.jpg"
            />
          </div>
          <div className="z-10 relative lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font mx-auto font-inter sm:text-6xl text-5xl mb-[60px] font-medium text-[#34C531]"> About Me
                </h1>
                <p className="font-inter sm:text-xl text-xl  mx-auto max-w-xl max-h-lg text-left m-5 leading-relaxed rounded text-[#8BC38A] p-5 bg-[#20581E]">I'm driven to learn and grow in the field of Software Engineering, and I'm excited about the endless possibilities that software engineering offers. With dedication and hard work, I know that I can contribute to the development of innovative solutions that can positively impact people's lives. I'm eager to see where my journey in software engineering will take me, and I'm committed to making the most of every opportunity to learn and grow.</p>
                <div className="flex justify-center m-5 mx-auto">
                <a href="https://www.linkedin.com/in/kevin-fernandez-/" target="_blank" className="inline-flex items-center justify-center mr-12 h-20 w-28 text-white bg-blue-400 border-0 focus:outline-none hover:bg-blue-500 rounded text-lg">
                    <img
                        className="h-20 w-20"
                        alt="LinkedIn Button"
                        src="/images/linkedinLogo.webp"
                    />
                </a>

                    <a href="https://github.com/superxp360" target="_blank" className="ml-4 inline-flex items-center justify-center text-gray-700 bg-green-500 border-0 h-20 w-28 focus:outline-none hover:bg-green-600 rounded text-lg">
                        <img
                            className="h-12 w-12"
                            alt="LinkedIn Button"
                            src="/images/githubLogo2.png"
                        />
                    </a>
                </div>
          </div>
        </div>
      </section>
    );
  }
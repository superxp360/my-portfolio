export default function Hero() {

    return(
        <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img className="object-cover object-center rounded-lg border-green-500 border-8" alt="hero" src="/images/mePic2.jpg" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 text-white font-normal"> Hello, My Name is <strong className="text-green-400"><i>Kevin Fernandez</i></strong>
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed text-left"> I'm currently a student at <strong><a href="https://bocacode.com/candidates/software-engineer/kevin-fernandez" target="_blank" className="text-rose-500">Boca Code</a></strong>, where I'm learning the necessary skills and technologies to become a successful software engineer. I'm driven to learn and grow in this field, and I'm excited about the endless possibilities that software engineering offers. With dedication and hard work, I know that I can contribute to the development of innovative solutions that can positively impact people's lives. I'm eager to see where my journey in software engineering will take me, and I'm committed to making the most of every opportunity to learn and grow. </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"><a href="https://github.com/superxp360?tab=repositories" target="_blank"><img className="w-10"src="/images/githubLogo2.png" /></a> </button>
              
              <button className="ml-4 inline-flex text-gray-400 bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 hover:text-white rounded text-lg"><a href="https://www.linkedin.com/in/kevin-fernandez-467134277/" target="_blank"><img src="/images/linkedinLogo.webp" className="w-10" /></a></button>
            </div>
          </div>
        </div>
      </section>
    
      
    )
}
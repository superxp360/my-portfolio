export default function Projects() {
  return (
    <section className="text-gray-400 body-font bg-gray-900 overflow-hidden" >
      <div className="container px-5 py-24 mx-auto overflow-hidden">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Projects</h1>
            <div className="h-1 w-40 bg-green-500 rounded"></div>
            <p className="mt-2 lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">Check Out Some Projects</p>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="h-full bg-gray-800 bg-opacity-40 p-6 rounded-lg hover:bg-gray-700">
              <a href="https://movie-pic-trivia.web.app/" target="_blank"><img className="h-40 rounded w-full object-cover object-center mb-6" src="/images/quizAppPic2.png" alt="content" /></a>
              <h3 className="tracking-widest text-green-400 text-xs font-medium title-font"></h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">Movie Quiz App</h2>
              <p className="leading-relaxed text-base">The Movie Quiz App is a fun and engaging quiz game that tests your knowledge of popular movies. </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="h-full bg-gray-800 bg-opacity-40 p-6 rounded-lg hover:bg-gray-700">
              <a href="https://tesla-homage-remake.web.app/" target="_blank"><img className="h-40 rounded w-full object-cover object-center mb-6" src="images/teslaSite.png" alt="content" /> </a>
              <h3 className="tracking-widest text-green-400 text-xs font-medium title-font"></h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">Tesla Homeage</h2>
              <p className="leading-relaxed text-base">This is a short tribute website dedicated to the electric car manufacturer Tesla.</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="h-full bg-gray-800 bg-opacity-40 p-6 rounded-lg hover:bg-gray-700">
              <a href="https://carpool-project-kf-web.firebaseapp.com/" target="_blank"><img className="h-40 rounded w-full object-cover object-center mb-6" src="images/finalProjectPic.png" alt="content" /></a>
              <h3 className="tracking-widest text-green-400 text-xs font-medium title-font"></h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">Pool Party</h2>
              <p className="leading-relaxed text-base">A carpooling app that enables users to connect with each other and start a carpool.</p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="h-full bg-gray-800 bg-opacity-40 p-6 rounded-lg hover:bg-gray-700">
              <a href="https://expo.dev/@superxp360/jokes-app"><img className="h-40 rounded w-full object-cover object-center mb-6" src="images/mobileAppPic.jpeg" alt="content" /></a>
              <h2 className="text-lg text-white font-medium title-font mb-4">Joke Generator</h2>
              <p className="leading-relaxed text-base">A mobile app that generates jokes and punchlines.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

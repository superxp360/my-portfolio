export default function ProjectBoard() {
    return (
      <section className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover bg-blend-overlay object-center z-0"
            src="/images/backgroundImage.jpg"
            alt="Background Image"
          />
          <div className="absolute inset-0 bg-[#020601] opacity-80"></div>
        </div>
  
        <div className="flex items-center relative z-10">
          <div className="m-10 mb-[650px] h-[100px]">
            <h1 className="w-[50px] text-6xl text-[#A8EE87]">P</h1>
            <h1 className="w-[50px] text-6xl text-[#A8EE87]">R</h1>
            <h1 className="w-[50px] text-6xl text-[#A8EE87]">O</h1>
            <h1 className="w-[50px] text-6xl text-[#A8EE87]">J</h1>
            <h1 className="w-[50px] text-6xl text-[#A8EE87]">E</h1>
            <h1 className="w-[50px] text-6xl text-[#A8EE87]">C</h1>
            <h1 className="w-[50px] text-6xl text-[#A8EE87]">T</h1>
            <h1 className="w-[50px] text-6xl text-[#A8EE87]">S</h1>
          </div>
  
        <div className="m-10 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <a href="https://movie-pic-trivia.web.app/" target="_blank" class="group relative block border-4 border-green-700 rounded bg-emerald-950">
                <img
                    alt="Developer"
                    src="images/quizAppPic.png"
                    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-10"
                />

                <div class="relative p-4 sm:p-6 lg:p-8">
                    <p class="text-xl font-bold text-white sm:text-2xl">Movie Quiz App</p>

                    <div class="mt-32 sm:mt-48 lg:mt-64">
                    <div
                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <p class="text-md text-white">
                        The Movie Quiz App is a fun and engaging quiz game that tests your knowledge of popular movies.
                        </p>
                    </div>
                    </div>
                </div>
            </a>

            <a href="https://tesla-homage-remake.web.app/" target="_blank" class="group relative block  border-4 border-green-700 rounded bg-emerald-950">
                <img
                    alt="Developer"
                    src="images/teslaSite.png"
                    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-10"
                />

                <div class="relative p-4 sm:p-6 lg:p-8">
                    <p class="text-xl font-bold text-white sm:text-2xl">Tesla Homeage</p>

                    <div class="mt-32 sm:mt-48 lg:mt-64">
                    <div
                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <p class="text-md text-white">
                        This is a short tribute website dedicated to the electric car manufacturer Tesla.
                        </p>
                    </div>
                    </div>
                </div>
            </a>

            <a href="https://carpool-project-kf-web.firebaseapp.com/" target="_blank" class="group relative block  border-4 border-green-700 rounded bg-emerald-950">
                <img
                    alt="Developer"
                    src="images/finalProjectPic.png"
                    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-10"
                />

                <div class="relative p-4 sm:p-6 lg:p-8">
                    <p class="text-xl font-bold text-white sm:text-2xl">Pool Party</p>

                    <div class="mt-32 sm:mt-48 lg:mt-64">
                    <div
                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <p class="text-md text-white">
                        A carpooling app that enables users to connect with each other and start a carpool.
                        </p>
                    </div>
                    </div>
                </div>
            </a>

            <a href="https://expo.dev/@superxp360/jokes-app" target="_blank" class="group relative block border-4 border-green-700 rounded bg-emerald-950">
                <img
                    alt="Developer"
                    src="images/mobileAppPic.jpeg"
                    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-10"
                />

                <div class="relative p-4 sm:p-6 lg:p-8">
                    <p class="text-xl font-bold text-white sm:text-2xl">Joke Generator</p>

                    <div class="mt-32 sm:mt-48 lg:mt-64">
                    <div
                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <p class="text-md text-white">
                        A mobile app that generates jokes and punchlines.
                        </p>
                    </div>
                    </div>
                </div>
            </a>
        </div>
      </div>
      </section>
    );
  }
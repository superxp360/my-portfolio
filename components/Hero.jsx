export default function Hero() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover bg-blend-overlay object-center"
          src="/images/backgroundImage.jpg"
          alt="Background Image"
        />
        <div className="absolute inset-0 bg-[#091206] opacity-80"></div>
      </div>
      <div className="container mx-auto flex flex-col px-5 py-64 justify-center items-center relative z-10">
        <h1 className=" font-inter font-light text-center sm:text-7xl sm:text-center text-4xl mb-4  text-[#E8E8E8]">
          Hello, my name is <em className="text-[#34C531]">Kevin Fernandez</em>
        </h1>
        <p className="font-thin text-center sm:text-3xl sm:text-center text-base mt-5  text-[#E8E8E8]"><em>I am a Full-Stack Software Engineer</em></p>
      </div>
    </section>
  );
}
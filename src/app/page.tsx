"use session";
// import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-8 lg:mb-0 lg:mr-8 text-center lg:text-left">
          <h1 className="text-black text-4xl md:text-6xl font-bold mb-3 bg-white px-4 py-3">
            Welcome to
            <br /> HealthQure+
          </h1>
          <p className="text-white font-bold text-lg md:text-xl">
            Track Your Health, Embrace Your Wellness.
          </p>
        </div>
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/015/316/843/non_2x/schedule-doctor-appointment-2d-isolated-linear-illustration-healthcare-thin-line-flat-character-on-cartoon-background-colorful-editable-scene-for-mobile-website-presentation-vector.jpg"
            className="w-60 h-60 md:w-80 md:h-80 rounded-md"
            alt="Image 1"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center pt-12">
        <div className="mb-8 lg:mb-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMrsyYIAMC7rhI1sk7v0J_-ip-rCRC7buEZpvaIf2Iu-48kKiYCicO6Op9vOJrBVqtPRk&usqp=CAU"
            className="w-60 h-60 md:w-80 md:h-80 rounded-md"
            alt="Image 2"
          />
        </div>
        <div className="lg:w-1/2">
          <p className="text-black text-lg md:text-xl font-bold mb-3 bg-white p-2 text-center">
            About Us!
          </p>
          <p className="text-md md:text-lg font-semibold pt-4">
            At HealthCure, we empower individuals to take charge of their health
            through innovative technology and personalized care. Our platform
            helps you track medications, schedule check-ups, and access vital
            health information. Committed to holistic wellness, we provide the
            resources you need for a healthier life. Join us on this journey to
            better health!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center pt-20">
        <div className="lg:w-1/2">
          <p className="text-black text-lg md:text-xl font-bold mb-3 bg-white px-4 py-2 text-center">
            Meet Our Developers
          </p>
          <div className="space-y-6">
            <div className="bg-gray-700 text-white py-2 font-bold text-center">
              Pradeepta Kumar
            </div>
            <p className="text-md md:text-lg font-semibold">
              A Full Stack Developer, Pradeepta specializes in both front-end
              and back-end technologies, creating efficient and seamless web
              applications.
            </p>
            <div className="bg-gray-700 text-white py-2 font-bold text-center">
              Subhasri Patnaik
            </div>
            <p className="text-md md:text-lg font-semibold">
              As our UI/UX Designer, Subhasri crafts intuitive and engaging
              interfaces, ensuring a user-friendly experience.
            </p>
            <div className="bg-gray-700 text-white py-2 font-bold text-center">
              Karthik Nayak
            </div>
            <p className="text-md md:text-lg font-semibold">
              Karthik, our Business Proposer, drives strategy and identifies
              growth opportunities, aligning our project with market needs.
            </p>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <img
            src="https://img.freepik.com/premium-vector/back-end-development-abstract-concept-vector-illustration_107173-25072.jpg"
            className="w-60 h-60 md:w-80 md:h-80 rounded-md"
            alt="Image 3"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center pt-20">
        <div className="mb-8 lg:mb-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEljqY0dg-8JmXAjALhq1oymxntXRzDX_BWQ&s"
            className="w-60 h-60 md:w-80 md:h-80 rounded-md"
            alt="Image 4"
          />
        </div>
        <div className="lg:w-1/2">
          <p className="text-black text-lg md:text-xl font-bold mb-3 bg-white px-4 py-2 text-center">
            Contribute Your Ideas
          </p>
          <p className="text-md md:text-lg font-semibold pt-4">
            We value your insights! Share your feedback and suggestions to help
            improve our project. Your contributions are key to shaping a
            healthier future—let’s create a better platform together!
          </p>
        </div>
      </div>
    </div>
  );
}
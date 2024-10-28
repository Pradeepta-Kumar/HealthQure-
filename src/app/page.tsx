"use session";
// import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-white h-full w-full py-16">
      <div className="w-[70%] flex justify-between items-center mx-auto">
        <div>
          <h1 className="text-black text-6xl font-bold mb-3 flex justify-center bg-white px-4 py-3">
            Welcome to
            <br /> HealthQure+
          </h1>
          <p className="text-white font-bold md:text-xl mb-8 flex justify-center">
            Track Your Health, Embrace Your Wellness.
          </p>
        </div>
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/015/316/843/non_2x/schedule-doctor-appointment-2d-isolated-linear-illustration-healthcare-thin-line-flat-character-on-cartoon-background-colorful-editable-scene-for-mobile-website-presentation-vector.jpg"
            className="w-80 h-80 rounded-md"
            alt="Image 1"
          />
        </div>
      </div>

      <div className="w-[70%] flex justify-between items-center mx-auto pt-12">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMrsyYIAMC7rhI1sk7v0J_-ip-rCRC7buEZpvaIf2Iu-48kKiYCicO6Op9vOJrBVqtPRk&usqp=CAU"
            className="w-80 h-80 rounded-md"
            alt="Image 2"
          />
        </div>
        <div className="w-[45%]">
          <p className="text-black text-lg md:text-lg font-bold mb-3 flex justify-center bg-white p-2">
            About Us!
          </p>
          <p className="text-md font-semibold pt-4">
            At HealthCure, we empower individuals to take charge of their health
            through innovative technology and personalized care. Our platform
            helps you track medications, schedule check-ups, and access vital
            health information. Committed to holistic wellness, we provide the
            resources you need for a healthier life. Join us on this journey to
            better health!
          </p>
        </div>
      </div>
      <div className="w-[70%] flex justify-between items-center mx-auto pt-20">
        <div className="w-[45%]">
          <p className="text-black text-lg font-bold mb-3 flex justify-center bg-white px-4 py-2">
            Meet Our Developers
          </p>
          <p className="text-md font-semibold pt-4">
            <p className="bg-gray-700 text-white py-1 font-bold text-lg w-[40%] flex justify-center items-center">
              Pradeepta Kumar
            </p>
            A Full Stack Developer, Pradeepta specializes in both front-end and
            back-end technologies, creating efficient and seamless web
            applications. <br /> <br />
            <p className="bg-gray-700 text-white py-1 font-bold text-lg w-[40%] flex justify-center items-center">
              Subhasri Patnaik
            </p>
            As our UI/UX Designer, Subhasri crafts intuitive and engaging
            interfaces, ensuring a user-friendly experience. <br /> <br />
            <p className="bg-gray-700 text-white py-1 font-bold text-lg w-[40%] flex justify-center items-center">
              Karthik Nayak
            </p>
            Karthik, our Business Proposer, drives strategy and identifies
            growth opportunities, aligning our project with market needs.
          </p>
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-vector/back-end-development-abstract-concept-vector-illustration_107173-25072.jpg"
            className="w-80 h-80 rounded-md"
            alt="Image 3"
          />
        </div>
      </div>
      <div className="w-[70%] flex justify-between items-center mx-auto pt-20">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEljqY0dg-8JmXAjALhq1oymxntXRzDX_BWQ&s"
            className="w-80 h-80 rounded-md"
            alt="Image 4"
          />
        </div>
        <div className="w-[45%]">
          <p className="text-black text-lg font-bold mb-3 flex justify-center bg-white px-4 py-2">
            Contribute Your Ideas
          </p>
          <p className="text-md font-semibold pt-4">
            We value your insights! Share your feedback and suggestions to help
            improve our project. Your contributions are key to shaping a
            healthier future—let’s create a better platform together!
          </p>
        </div>
      </div>
    </div>
  );
}

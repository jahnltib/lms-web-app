import { SignInButton } from '@clerk/nextjs';
import Image from 'next/image';
import phone from '@/../../public/phone.png';
import mock from '@/../../public/mock.jpg';

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen bg-gradient-to-tl from-indigo-500 via-blue-600 to-blue-600">
        <div className="flex flex-col items-center justify-center text-center pt-20">
          <div>
            <h1 className="text-5xl font-bold text-white ml-8">
              Study faster ⚡️
            </h1>
            <h2 className="text-5xl font-light text-white mt-2">
              with Lectern.
            </h2>
            <p className="text-lg text-white mt-8 mb-8">
              Make organized flashcards, quizzes and <br />
              summaries with the power of AI.
            </p>
          </div>
          <SignInButton>
            <button className="text-lg text-blue-500 bg-white font-bold py-3 px-7 rounded-full">
              START TODAY
            </button>
          </SignInButton>
          <div className="w-[600px] h-auto rounded-xl mt-10 mb-12">
            <Image
              src={phone}
              alt="Lectern AI-generated flashcards."
              className="drop-shadow-[0px_10px_50px_rgba(0,0,0,0.4)]"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <section className="w-full min-h-[60vh] bg-gray-900 px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center">
            <div className="w-[500px] min-h-[300px] bg-gray-800
                            rounded-md shadow-lg flex items-center justify-center p-8">
              <Image
                src={mock}
                alt="Upload your lecture to generate study materials."
                className="min-h-[300px]"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="order-1 md:order-2 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="max-w-sm">
              <h2 className="text-8xl font-extrabold text-gray-500">1</h2>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Upload your lectures
              </h2>
              <p className="mt-8 text-md text-gray-100">
                With one click, Lectern generates flashcards, quizzes, summaries,
                and organizes it for you.
              </p>
              <SignInButton >
                <button
                  className="mt-8 px-7 py-3 font-bold text-white bg-blue-700 
                            rounded-full shadow-md hover:bg-blue-600 transition"
                >
                  Browse your files
                </button>
              </SignInButton>
            </div>
          </div>
        </section>
        <div className="lg:min-w">
          <div className="w-full min-h-[60vh] bg-gray-900 px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="order-2 md:order-2 w-full md:w-1/2 flex justify-center">
              <div className="w-[500px] min-h-[300px] bg-gray-800
                              rounded-md shadow-lg flex items-center justify-center p-8">
                <Image
                  src={mock}
                  alt="Upload your lecture to generate study materials."
                  className="min-h-[300px]"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col md:items-end items-center text-center md:text-right">
              <div className="max-w-sm">
                <h2 className="text-8xl font-extrabold text-gray-500">2</h2>
                <h2 className="mt-4 text-3xl font-semibold text-white">
                  Study with Lectern
                </h2>
                <p className="mt-8 text-md text-gray-100">
                  Use Lectern&#39;s built in learning system to 
                  review materials, track progress, and more.
                </p>
                <SignInButton >
                  <button
                    className="mt-8 px-7 py-3 font-bold text-white bg-blue-700 
                              rounded-full shadow-md hover:bg-blue-600 transition"
                  >
                    Learn more 
                  </button>
                </SignInButton>
              </div>
            </div>
          </div>
        </div>

        <section className="w-full min-h-[60vh] bg-gray-900 px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="order-2 md:order-2 w-full md:w-1/2 flex justify-center">
            <div className="w-[500px] min-h-[300px] bg-gray-800
                            rounded-md shadow-lg flex items-center justify-center p-8">
              <Image
                src={mock}
                alt="Upload your lecture to generate study materials."
                className="min-h-[300px]"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          <div className="order-2 md:order-2 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="max-w-sm">
              <h2 className="text-8xl font-extrabold text-gray-500">3</h2>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Share your materials
              </h2>
              <p className="mt-8 text-md text-gray-100">
                Collaborate with others and share your
                materials for your peers to review.
              </p>
              <SignInButton >
                <button
                  className="mt-8 px-7 py-3 font-bold text-white bg-blue-700 
                            rounded-full shadow-md hover:bg-blue-600 transition"
                >
                  Learn more 
                </button>
              </SignInButton>
            </div>
          </div>
        </section>

        <section className="w-full min-h-[90vh] bg-transparent px-8 py-20 flex flex-col items-center justify-between">
          <div className='min-w-[80vw] min-h-[70vh] bg-gray-100 rounded-lg'>
          </div>
        </section>
      </main>
    </>
  );
}

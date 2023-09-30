import Image from "next/image";
export default function HowItWorks() {
  return (
    <article className="py-[8rem] custom-container">
      <section className="grid gap-[3rem]">
        <h2 className="text-center blue-dark text-4xl font-bold pb-3">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="grid gap-3">
            <div
              className="w-[50px] h-[50px] rounded-full blue-bg
             text-white flex justify-center items-center font-semibold text-lg justify-self-center"
            >
              1
            </div>
            <h3 className="text-xl font-semibold justify-self-center">
              Record Screen
            </h3>
            <p className="text-center text-gray-500 text-base leading-5 text-[0.88rem] font-[300]">
              Click the Start Recording button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
            <Image
              src="/images/home/how-it-works.svg"
              alt=""
              height={140}
              width={38}
              style={{ width: "auto", height: "100%" }}
              className=" justify-self-center"
            />
          </div>
          <div className="grid gap-3">
            <div
              className="w-[50px] h-[50px] rounded-full blue-bg
             text-white flex justify-center items-center font-semibold text-lg justify-self-center"
            >
              2
            </div>
            <h3 className="text-xl font-semibold justify-self-center">
              Share Your Recording
            </h3>
            <p className="text-center text-gray-500 text-base leading-5 text-[0.88rem] font-[300]">
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </p>
            <Image
              src="/images/home/how-it-works.svg"
              alt=""
              height={140}
              width={38}
              style={{ width: "auto", height: "100%" }}
              className=" justify-self-center"
            />
          </div>
          <div className="grid gap-3">
            <div
              className="w-[50px] h-[50px] rounded-full blue-bg
             text-white flex justify-center items-center font-semibold text-lg justify-self-center"
            >
              3
            </div>
            <h3 className="text-xl font-semibold justify-self-center">
              Learn Effortlessly
            </h3>
            <p className="text-center text-gray-500 text-base leading-5 text-[0.88rem] font-[300]">
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </p>
            <Image
              src="/images/home/how-it-works.svg"
              alt=""
              height={140}
              width={38}
              style={{ width: "auto", height: "100%" }}
              className=" justify-self-center"
            />
          </div>
        </div>
      </section>
    </article>
  );
}

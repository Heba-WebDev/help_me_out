import Image from "next/image";

export default function Features() {
  return (
    <article className="py-[2.5rem] bg-gray-100">
      <section className="bg-white py-[6.5rem]">
        <h2 className="text-center blue-dark text-4xl font-bold pb-3">
          Features
        </h2>
        <p className="text-center text-gray-500 text-base leading-5">
          Key Highlights of Our Extension
        </p>
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 custom-container">
          <div className="flex flex-col gap-6 items-start md:items-center justify-center">
            <div className="flex gap-3">
              <Image
                src="/images/home/features1.svg"
                alt=""
                height={40}
                width={38}
                style={{ width: "35px", height: "48px" }}
              />
              <div className="mt-[6px] flex flex-col gap-1">
                <h3 className="text-[1.1rem] font-semibold">
                  Simple Screen Recording
                </h3>
                <p className="text-gray-600 max-w-[38ch] text-[0.9rem] font-[300]">
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Image
                src="/images/home/features2.svg"
                alt=""
                height={40}
                width={38}
                style={{ width: "35px", height: "48px" }}
              />
              <div className="mt-[6px] flex flex-col gap-1">
                <h3 className="text-[1.1rem] font-semibold">
                  Easy-to-Share URL
                </h3>
                <p className="text-gray-600 max-w-[38ch] text-[0.9rem] font-[300]">
                  Share your recordings instantly with a single link. No
                  attachments, no downloads.
                </p>
              </div>
            </div>
            <div className="flex gap-3 ">
              <Image
                src="/images/home/features3.svg"
                alt=""
                height={40}
                width={38}
                style={{ width: "35px", height: "48px" }}
                className=""
              />
              <div className="mt-[6px] flex flex-col gap-1">
                <h3 className="text-[1.1rem] font-semibold">
                  Revisit Recordings
                </h3>
                <p className="text-gray-600 max-w-[38ch] text-[0.9rem] font-[300]">
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/images/home/features4.svg"
            alt=""
            width={300}
            height={300}
            style={{ width: "100%", height: "100%" }}
            className="w-full max-w-[100%] md:max-w-[95%] lg:max-w-[80%] mt-10 md:mt-0"
          />
        </div>
      </section>
    </article>
  );
}

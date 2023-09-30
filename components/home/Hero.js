import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="py-[8rem] flex flex-col md:grid md:grid-cols-2 gap-[6rem] md:gap-0 custom-container">
      <div className="flex flex-col self-center py-4">
        <h1 className="text-5xl lg:text-6xl blue-dark font-bold pb-[20px] w-full text-center md:text-left md:w-[12ch]">
          Show Them Don&apos;t Just Tell
        </h1>
        <p className="text-[18px] md:text-[16px] lg:text-[18px] leading-7 text-gray-800 pb-[48px] md:w-[34ch] lg:w-[48ch] text-center md:text-left">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <Link
          href=""
          className="blue-bg text-white p-[15px] px-[25px] rounded-md w-fit flex items-center gap-2 self-center md:self-auto"
        >
          Install HelpMeOut <span>&rarr;</span>
        </Link>
      </div>
      <div className="flex flex-row-reverse gap-2 md:gap-4">
        <div className="relative">
          <Image
            src="/images/home/hero_img3.svg"
            alt="woman smiling"
            width={305}
            height={448}
            style={{ width: "300px", height: "auto" }}
          />
          <Image
            src="/images/home/dots-gray.svg"
            alt=""
            width={305}
            height={448}
            style={{ width: "200px", height: "auto" }}
            className="absolute z-[-1] top-[-12%] left-[10.3%] md:left-[16%] lg:left-[68px] xl:left-[120px]"
          />
        </div>
        <div className="flex flex-col justify-between md:justify-around">
          <div>
            <Image
              src="/images/home/hero_img1.svg"
              alt="woman talking and looking at a laptop"
              width={311}
              height={214}
              style={{ width: "311px", height: "auto" }}
            />
          </div>
          <div className="relative">
            <Image
              src="/images/home/hero_img2.svg"
              alt="woman smiling"
              width={311}
              height={214}
              style={{ width: "311px", height: "auto" }}
            />
            <Image
              src="/images/home/dots-cayan.svg.svg"
              alt=""
              width={305}
              height={448}
              style={{ width: "200px", height: "auto" }}
              className="absolute z-[-1] top-[4.7%] md:top-[20%] left-[-5%] md:left-[-12%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

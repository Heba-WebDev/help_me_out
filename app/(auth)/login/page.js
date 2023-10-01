import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="py-[5rem] w-full border border-x-0 border-b-0 mt-[4rem]">
      <header className="grid items-center justify-start custom-container">
        <Link href="/">
          <Image
            src="/images/globals/logo.svg"
            alt="HelpMeOut"
            width={120}
            height={50}
            priority
            style={{ width: "135px", height: "60px" }}
            className="w-auto"
          />
        </Link>
      </header>
      <main className="pt-[2rem] w-full">
        <h2 className="font-bold text-3xl blue-dark text-center pb-3">
          Log in or Sign up
        </h2>
        <p className="text-center text-[0.8rem] font-extralight text-gray-500 max-w-[35ch] m-auto">
          Join millions of others in sharing successful moves on HelpMeOut.
        </p>
        <div className="custom-container grid gap-4 py-8 self-center w-[100%]">
          <Link
            href=""
            className="flex items-center gap-3
          border border-blue-950 rounded-lg justify-center text-sm p-2 md:w-[31.3rem] md:m-auto"
          >
            <Image
              src="/images/auth/Google.svg"
              alt="HelpMeOut"
              width={50}
              height={50}
              priority
              style={{ width: "18px", height: "20px" }}
              className=""
            />
            Continue with Google
          </Link>

          <Link
            href=""
            className="flex items-center gap-3
          border border-blue-950 rounded-lg justify-center text-sm p-2 md:w-[31.3rem] md:m-auto"
          >
            <Image
              src="/images/auth/Facebook.svg"
              alt="HelpMeOut"
              width={50}
              height={50}
              priority
              style={{ width: "18px", height: "20px" }}
              className=""
            />
            Continue with Facebook
          </Link>
        </div>
        <div className="custom-container flex items-center gap-2 pt-2 pb-4 justify-center md:w-[35rem]">
          <div className="w-full h-[3px] bg-gray-200"></div>
          <span className="text-gray-300 text-sm">Or</span>
          <div className="w-full h-[3px] bg-gray-200"></div>
        </div>
        <form className="grid gap-3 custom-container blue-dark">
          <div className="flex flex-col gap-2 text-[0.98rem] w-full md:max-w-[31rem] md:m-auto">
            <lable>Email</lable>
            <input
              type="email"
              placeholder="Enter your email address"
              className="lex items-center gap-3
          border border-gray-300 rounded-lg px-2 h-[36px] text-sm placeholder:w-full placeholder:text-gray-200 placeholder:text-left"
            />
          </div>
          <div className="flex flex-col gap-2 text-[0.98rem] w-full md:max-w-[31rem] md:m-auto">
            <lable>Password</lable>
            <input
              type="password"
              placeholder="Enter your Password"
              className="lex items-center gap-3
          border border-gray-300 rounded-lg px-2 h-[36px] text-sm placeholder:w-full placeholder:text-gray-200 placeholder:text-left"
            />
          </div>
          <button className="blue-bg text-white py-3 rounded-lg custom-container w-full justify-self-center mt-3 md:max-w-[31rem]">
            Sign Up
          </button>
        </form>
      </main>
    </section>
  );
}

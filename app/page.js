import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col h-screen bg-slate-100 font-sans">
      {/* Header */}
      <header className="bg-white text-white px-8 py-6">
        <div className="container mx-auto">
          <div>
            <svg
              className="h-12"
              width="221"
              height="59"
              viewBox="0 0 221 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5811_1262)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.1879 44.6405L42.7246 44.6628C42.0932 43.1967 37.1157 34.8136 35.9457 32.8171C35.3401 31.784 34.2997 29.7285 33.5973 28.8987L27.8644 38.5845L21.5722 38.59C21.8357 37.6611 23.8663 34.4294 24.4736 33.3846C25.4907 31.6324 26.4303 29.96 27.4916 28.1488L32.7643 18.976C32.9212 18.6984 32.9688 18.5967 33.1074 18.3655L33.5987 17.7409C34.1829 18.427 46.7072 40.3773 47.8677 42.3674C48.6859 43.7707 49.4717 45.1563 50.2584 46.4847C50.9429 47.6402 52.1516 49.4528 52.6029 50.5974L20.9703 50.6323L14.223 50.6785L2.56456 50.6299C1.65131 52.4982 -3.68887 58.9538 4.4427 58.9415H49.3461C54.2897 58.9415 59.3996 59.0732 64.3223 58.9415C66.3729 58.8869 68.202 57.0884 67.1825 54.7382L41.8985 11.2989C39.9796 8.10616 38.2101 4.91552 36.2942 1.66728C34.828 -0.818186 32.3433 -0.135566 31.3886 1.2033L28.5746 6.00694C24.7934 12.4965 20.9727 18.8313 17.3659 25.2712C15.5104 28.5819 13.6417 31.6403 11.7545 34.8955C11.0048 36.1889 6.36602 43.9397 6.1879 44.6401V44.6405Z"
                  fill="#DC2626"
                />
                <path
                  d="M82.0575 43.6061C88.5579 43.6061 92.225 39.5415 92.225 32.8369C92.225 26.1743 88.5579 22.1515 82.3494 22.1515H75.4735V43.6061H82.0575ZM78.057 41.3014V24.4562H82.1827C87.183 24.4562 89.725 27.6409 89.725 32.8369C89.725 38.0748 87.183 41.3014 81.8908 41.3014H78.057ZM96.5589 43.6061H109.602V41.3014H99.1425V34.0102H108.769V31.7055H99.1425V24.4562H109.435V22.1515H96.5589V43.6061ZM114.092 43.6061H126.593V41.3014H116.676V22.1515H114.092V43.6061ZM126.59 24.4562H133.3V43.6061H135.883V24.4562H142.592V22.1515H126.59V24.4562ZM144.962 43.6061L147.108 37.53H155.734L157.88 43.6061H160.589L152.755 22.1515H150.088L142.254 43.6061H144.962ZM147.921 35.2254L151.338 25.5457H151.505L154.921 35.2254H147.921ZM163.801 43.6061H183.025V38.6196H169.816V31.7893H181.983V26.8028H169.816V19.9865H182.969V15H163.801V43.6061ZM192.89 15H186.21L196.03 43.6061H203.781L213.587 15H206.92L200.03 36.7339H199.766L192.89 15Z"
                  fill="#DC2626"
                />
              </g>
              <defs>
                <clipPath id="clip0_5811_1262">
                  <rect width="221" height="59" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </header>

      {/* Main content / Hero section */}
      <main className="flex-grow flex items-center justify-center bg-slate-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 font-inter -tracking-[0.04em]">
              Coming Soon
            </h2>
            <p className="text-xl text-slate-600 mb-6 font-inter -tracking-[0.04em]">
              We are coming up with a New Identity. Stay Tuned
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 font-inter">
              Contact Us
            </button>
          </div>
          <div className="md:w-1/2"></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="z-10 p-4 bg-white-200">
        <div className="container mx-auto flex justify-center space-x-4 text-sm text-slate-600">
          <Link
            href="/privacy-policy"
            className="hover:text-red-500 transition duration-300 font-inter -tracking-[0.03em] font-semibold"
          >
            Privacy Policy
          </Link>
          <Link
            href="/tos"
            className="hover:text-red-500 transition duration-300 font-inter -tracking-[0.03em] font-semibold"
          >
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}

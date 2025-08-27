export default function Header() {
  return (
    <>
      <div className="container mx-auto max-w-3xl">
        <nav className="flex items-center justify-between py-4">
          <div className="flex space-x-6 justify-start">
            <a
              href="#"
              aria-current="page"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-black/5 hover:text-black "
            >
              Home
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-black/5 hover:text-black "
            >
              Projects
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-black/5 hover:text-black "
            >
              About
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-black/5 hover:text-black "
            >
              Blogs
            </a>
            <a
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-black/5 hover:text-black "
            >
              Contact
            </a>
          </div>
          <div className="flex justify-items-end w-10 align-center">
            <button className="w-4 cursor-pointer">
              <i className="fa-regular fa-moon"></i>
            </button>
          </div>
        </nav>
        <div className="lg:px- mx-auto w-full max-w-4xl px-6 mt-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 mb-10">
            <img
              className="w-30 h-30"
              src="https://dianapps.com/blog/wp-content/uploads/2023/03/Untitled-design-40.png"
              alt="Image"
            />
            <div className="flex-col flex items-start ">
              <h1 className="text-4xl mb-2 font-bold tracking-tighter md:text-5xl lg:text-5xl">
                <span>Vishal Gupta</span>
              </h1>
              <span>Full-Stack Developer</span>
              <p className="text-sm text-secondary mt-1 opacity-75 ">
                Deoria, Uttar Pradesh
              </p>
            </div>
          </div>
          <div className="grid gap-14 lg:grid-cols-3 ">
            <div className="flex flex-col item-start space-y-4 lg:col-span-2">
              <div className=" flex items-start text-primary text-2xl font-semibold">
                About.
              </div>
              <div className="flex flex-col items-start text-secondary space-y-4 leading-relaxed text-left font-sans opacity-50 ">
                <p>
                  Hey I`m Vishal Kumar gupta, a full-stack developer currently
                  in my final year of B.tech. I build mordern web appications
                  with React.js, Boostrap, Tailiwind CSS, Node.js, amd MongoDB.
                  Besides development, I am also skilled in Data structures &
                  Algorithms and CS fundamental. Practice daily LeetCode
                  problems with Java.
                </p>
                <a href="#" className="font-semibold">
                  <span>
                    More about me.
                    <i className="fa-solid fa-right-to-bracket"></i>
                  </span>
                </a>
              </div>
            </div>
            <aside className="space-y-4">
              <h3 className="flex items-start text-gray-600 dark:text-white mb-2 uppercase tracking-wider font-medium text-sm">
                Status
              </h3>
              <div className="space-y-2 text-sm text-secondary dark:text-gray-400">
                <div className="flex items-center gap-2 text-sm  font-medium opacity-80">
                  <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                  Available for work.
                </div>
                <div className="flex items-center gap-2 text-sm  font-medium opacity-80">
                  <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
                  Open to freelance.
                </div>
              </div>
              <div>
                <h3 className="flex items-start text-gray-600 dark:text-white mb-2 uppercase tracking-wider font-medium text-sm">
                  Focus
                </h3>
                <ul className="space-y-1 text-sm text-secondary dark:text-gray-400 list-disc list-inside">
                  <li>Full-Stack Development</li>
                  <li>DSA & Problem Solving</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

const Footer = (): JSX.Element => {
  return (
    <footer className=" bg-white dark:bg-black w-full py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
          <li className="m-2">
            <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
              FAQ
            </a>
          </li>
          <li className="m-2">
            <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
              About
            </a>
          </li>
          <li className="m-2">
            <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="#">
              Github
            </a>
          </li>
          <li className="m-2">
            <a href="" className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" target="_blank" rel="noopener noreferrer">
              Powered by NotAwakeStudio
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

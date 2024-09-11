import Switcher from '@/Components/Common/Switcher'
import { PowerIcon, UserIcon } from '@heroicons/react/24/outline'
import { Link, usePage } from '@inertiajs/react'

export default function Header() {
    const { auth } = usePage().props
    return (
        <header className="flex flex-wrap sticky top-0 sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
            <nav className="relative container mx-auto sm:flex sm:items-center sm:justify-between px-3 lg:px-0" aria-label="Global">
                <div className="flex items-center justify-between">
                    <Link href={route('homepage')} className="flex items-center space-x-2 text-xl font-semibold dark:text-white" aria-label="Brand">
                        <img src="./gs-logo-slider-6.png" className="h-12 rounded-full" alt="" />
                        <span className="whitespace-nowrap text-gray-400"> </span>
                    </Link>
                    <div className="sm:hidden">
                        <div className="inline px-2"> <Switcher /></div>
                        <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">

                        <Link href={route('homepage')} className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" >Home</Link>
                        <Link href={route('projectpage')} className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" >Projects</Link>
                        {/* <Link href={route('faqpage')} className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" >Faq</Link> */}
                        {/* <Link href={route('reviewpage')} className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" >Reviews</Link> */}
                        {/* <Link href={route('portfoliopage')} className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" >Portfolio</Link> */}
                        <Link href={route('servicepage')} className="font-medium text-gray-800 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" >Service</Link>
                        {/* <Link href={route('blogpage')} className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" >Blog</Link> */}
                        <Link href={route('contact')} className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500" >Contact</Link>

                        {
                            auth.user ?
                                <Link href={route('logout')} method="post" as="button" className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" >
                                    <PowerIcon className="w-4 h-4" />
                                    Logout
                                </Link>
                                :
                                <Link href={route('login')} className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" >
                                    <UserIcon className="w-4 h-4" />
                                    Log in
                                </Link>
                        }
                        <Switcher />

                    </div>
                </div>
            </nav>
        </header>
    )
}

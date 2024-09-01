import CategorySidebar from '@/Components/Frontend/CategorySidebar';
import Pagination from '@/Components/Frontend/Pagination';
import PortfolioComponent from '@/Components/Frontend/PortfolioComponent';
import SkillComponent from '@/Components/Frontend/SkillComponent';
import AppLayout from '@/Layouts/AppLayout';
import { CodeBracketIcon, HomeIcon, PencilIcon } from '@heroicons/react/24/outline';
import { Head, router } from '@inertiajs/react';

export default function PortfolioPage({ portfolios }) {
    // const route = router;
    const currentRoute = route().current()
    const params = route().params;
    return (
        <AppLayout>
            <Head title="Portfolios" />
            <div className="grid grid-cols-12 gap-5">

                <div className="col-span-12 md:col-span-12">
                    <nav className="flex py-4" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Home
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <div className="grid grid-cols-12 gap-3">
                        {[1, 2, 3, 4, 5, 6].map((portfolio, index) => {
                            return <div key={index} className="col-span-4">
                             <div className="relative">
                                <div className="relative h-80  mx-auto rounded-lg">
                                    <img className="h-80 w-full relative h-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" alt="" />
                                    <div className="absolute inset-0 bg-gray-900 opacity-75 rounded-lg"></div>
                                    <div className="absolute inset-0 p-6 flex flex-col items-start">
                                        <span className="text-gray-400">2021</span>
                                        <p className="mb-auto text-xl lg:text-2xl text-white font-bold">Lorem ipsum dolor sit amet consectutar</p>
                                        <a className="inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose" href="#">View Project</a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        })}
                    </div>
                    <div className="py-10">
                        {/* <Pagination pagination={portfolios} links={portfolios.links} /> */}
                    </div>
                </div>
            </div>

        </AppLayout>
    );
}

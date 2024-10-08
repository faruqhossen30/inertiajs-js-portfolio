import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import { CheckCircleIcon, CheckIcon, CodeBracketIcon, HomeIcon, PencilIcon, StarIcon } from '@heroicons/react/24/outline';
import Service from '@/Components/Frontend/Service/Service';
import CategorySidebar from '@/Components/Frontend/CategorySidebar';

export default function ServicePage({ auth, user, services, laravelVersion, phpVersion }) {

    return (
        <AppLayout>
            <Head title="Services" />

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
                                    <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Services</a>
                                </div>
                            </li>
                        </ol>
                    </nav>
                    <div className="grid grid-cols-12">
                        {[1, 2, 3, 4].map((portfolio, index) => {


                            return <div className="col-span-4 ">
                                <div className=" bg-gray-50 px-12 py-16 border hover:shadow-xl">
                                    <CheckCircleIcon className='h-10 w-10 text-red-700 font-bold' />

                                    <h3 className='py-6 text-2xl font-bold'>Shopify Store Setup And Configuration</h3>
                                    <div className=" flex   space-x-2 py-1">

                                        <CheckIcon className='h-10 w-10' />

                                        <sapn className='text-gray-500'>Comprehensive Store Setup, Including Domain Integration And Payment Gateway Setup</sapn>
                                    </div>
                                    <div className=" flex   space-x-2 py-1">
                                        <CheckIcon className='h-8 w-8' />

                                        <span className='text-gray-500'> Theme Installation And Customization For A Unique Look And Feel</span>
                                    </div>
                                    <div className=" flex   space-x-2 py-1">
                                        <CheckIcon className='h-5 w-5' />

                                        <sapn className='text-gray-500'>Initial Product Catalog Setup</sapn>
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

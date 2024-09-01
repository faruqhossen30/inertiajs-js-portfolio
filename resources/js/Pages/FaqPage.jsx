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
                            return <div key={index} className="col-span-6">

                                <div class="hs-accordion-group bg-white rounded-3xl shadow-lg ">
                                    <div class="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-neutral-700 dark:bg-neutral-800 dark:border-transparent" id="hs-active-bordered-heading-one">
                                        <button class="hs-accordion-toggle hs-accordion-active:text-orange-600  inline-flex justify-between items-center gap-x-3 text-xl w-full font-semibold text-start text-gray-800 py-6 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-active-bordered-collapse-one">
                                            Do you provide a complete design style?
                                            <span className='flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-600'>

                                            <svg class="hs-accordion-active:hidden block size-3.5 hs-accordion-active:text-orange-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5v14"></path>
                                            </svg>
                                            <svg class="hs-accordion-active:block hidden size-3.5 hs-accordion-active:text-orange-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                            </svg>
                                            </span>
                                        </button>
                                        <div id="hs-basic-active-bordered-collapse-one" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-active-bordered-heading-one">
                                            <div class="pb-10 px-5">

                                                <p className="text-gray-500 dark:text-neutral-200 font-normal text-lg ">
                                                    Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit
                                                    tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra
                                                    vivamus.
                                                </p>
                                                {/* <p class="text-gray-800 dark:text-neutral-200">
                                                        <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                                    </p> */}
                                            </div>
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

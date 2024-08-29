import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import HeroSection from '@/Components/Homepage/HeroSection';
import ServiceSection from '@/Components/Homepage/ServiceSection';
import FeatureStatus from '@/Components/Homepage/FeatureStatus';
import Feature from '@/Components/Homepage/Feature';
import Testimonial from '@/Components/Homepage/Testimonial';
import { CalendarIcon, CheckBadgeIcon, CheckCircleIcon, PencilSquareIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/24/solid';
import { IoOpenOutline, IoOpenSharp } from 'react-icons/io5';
import { FaOpencart, FaPhoneVolume } from 'react-icons/fa';


export default function Homepage({ auth, user, laravelVersion, phpVersion }) {

    return (
        <AppLayout>
            <Head title="Home" />
            {/* <HeroSection />
            <ServiceSection />
            <FeatureStatus />
            <Feature />
            <Testimonial /> */}


            {/* HeroSection start */}
            <section>
                <div className="text-center">
                    <h1 className=' pt-24  pb-6 text-6xl font-extrabold text-gray-800'>Boost Brands Visibility <br /> and reach first.</h1>
                    <p className='text-lg pb-6 font-normal text-gray-500'>Use and reuse tons of responsive section to create the <br /> perfect layout. Sections are ready.</p>
                    <button className='py-3 px-6 text-base font-medium text-white  border rounded-lg bg-[#5F27FF]'>Try 14 Days free Trial</button>
                    <p className='py-6 text-base text-gray-500'>No Credit Required / Cancel Anything</p>
                </div>
            </section >
            {/* HeroSection End */}

            <section className="relative pt-24 pb-28 bg-black">
                <img className="absolute top-0 left-0 w-full h-full select-none" src="https://static.shuffle.dev/components/preview/180a064e-de28-4be2-a09a-99648ad629ef/assets/public/fily-assets/gradients/gradient-brands.png" alt="" />
                <div className="relative container mx-auto px-4">
                    <h2 className="mb-16 font-heading text-4xl font-medium text-white text-center">They trusted us</h2>
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-wrap justify-center -m-4">
                            <div className="w-auto p-4">
                                <div className="p-2 pr-6 bg-white bg-opacity-5 rounded-xl">
                                    <div className="flex flex-wrap items-center -m-3">
                                        <div className="w-auto p-3">
                                            <div className="flex justify-center items-center w-12 h-12 bg-white bg-opacity-10 rounded-xl">
                                                <img className="h-9" src="https://static.shuffle.dev/components/preview/180a064e-de28-4be2-a09a-99648ad629ef/assets/public/fily-assets/brands/spotify.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="w-auto p-3">
                                            <span className="text-lg font-medium text-white">Spotify</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto p-4">
                                <div className="p-2 pr-6 bg-white bg-opacity-5 rounded-xl">
                                    <div className="flex flex-wrap items-center -m-3">
                                        <div className="w-auto p-3">
                                            <div className="flex justify-center items-center w-12 h-12 bg-white bg-opacity-10 rounded-xl">
                                                {/* <img style="height: 30px;" src="" alt=""/> */}
                                                <img className="h-9" src="https://static.shuffle.dev/components/preview/180a064e-de28-4be2-a09a-99648ad629ef/assets/public/fily-assets/brands/slack2.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="w-auto p-3">
                                            <span className="text-lg font-medium text-white">Slack</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto p-4">
                                <div className="p-2 pr-6 bg-white bg-opacity-5 rounded-xl">
                                    <div className="flex flex-wrap items-center -m-3">
                                        <div className="w-auto p-3">
                                            <div className="flex justify-center items-center w-12 h-12 bg-white bg-opacity-10 rounded-xl">
                                                <img className="h-8" src="https://static.shuffle.dev/components/preview/180a064e-de28-4be2-a09a-99648ad629ef/assets/public/fily-assets/brands/figma.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="w-auto p-3">
                                            <span className="text-lg font-medium text-white">Figma</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto p-4">
                                <div className="p-2 pr-6 bg-white bg-opacity-5 rounded-xl">
                                    <div className="flex flex-wrap items-center -m-3">
                                        <div className="w-auto p-3">
                                            <div className="flex justify-center items-center w-12 h-12 bg-white bg-opacity-10 rounded-xl">
                                                <img className='h-7' src="https://static.shuffle.dev/components/preview/180a064e-de28-4be2-a09a-99648ad629ef/assets/public/fily-assets/brands/apple.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="w-auto p-3">
                                            <span className="text-lg font-medium text-white">Apple</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto p-4">
                                <div className="p-2 pr-6 bg-white bg-opacity-5 rounded-xl">
                                    <div className="flex flex-wrap items-center -m-3">
                                        <div className="w-auto p-3">
                                            <div className="flex justify-center items-center w-12 h-12 bg-white bg-opacity-10 rounded-xl">
                                                <img className='h-[22px]' src="https://static.shuffle.dev/components/preview/180a064e-de28-4be2-a09a-99648ad629ef/assets/public/fily-assets/brands/mastercard.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="w-auto p-3">
                                            <span className="text-lg font-medium text-white">Mastercard</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto p-4">
                                <div className="p-2 pr-6 bg-white bg-opacity-5 rounded-xl">
                                    <div className="flex flex-wrap items-center -m-3">
                                        <div className="w-auto p-3">
                                            <div className="flex justify-center items-center w-12 h-12 bg-white bg-opacity-10 rounded-xl">
                                                <img className='h-6' src="https://static.shuffle.dev/components/preview/180a064e-de28-4be2-a09a-99648ad629ef/assets/public/fily-assets/brands/microsoft.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="w-auto p-3">
                                            <span className="text-lg font-medium text-white">Microsoft</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto p-4">
                                <div className="p-2 pr-6 bg-white bg-opacity-5 rounded-xl">
                                    <div className="flex flex-wrap items-center -m-3">
                                        <div className="w-auto p-3">
                                            <div className="flex justify-center items-center w-12 h-12 bg-white bg-opacity-10 rounded-xl">
                                                <img className='h-8' src="https://static.shuffle.dev/components/preview/180a064e-de28-4be2-a09a-99648ad629ef/assets/public/fily-assets/brands/opera.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="w-auto p-3">
                                            <span className="text-lg font-medium text-white">Opera</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto p-4">
                                <div className="p-2 pr-6 bg-white bg-opacity-5 rounded-xl">
                                    <div className="flex flex-wrap items-center -m-3">
                                        <div className="w-auto p-3">
                                            <div className="flex justify-center items-center w-12 h-12 bg-white bg-opacity-10 rounded-xl">
                                                <img className='h-3' src="https://static.shuffle.dev/components/preview/180a064e-de28-4be2-a09a-99648ad629ef/assets/public/fily-assets/brands/visa.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="w-auto p-3">
                                            <span className="text-lg font-medium text-white">Visa</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto p-4">
                                <div className="p-2 pr-6 bg-white bg-opacity-5 rounded-xl">
                                    <div className="flex flex-wrap items-center -m-3">
                                        <div className="w-auto p-3">
                                            <div className="flex justify-center items-center w-12 h-12 bg-white bg-opacity-10 rounded-xl">
                                                <img className='h-5' src="https://static.shuffle.dev/components/preview/180a064e-de28-4be2-a09a-99648ad629ef/assets/public/fily-assets/brands/brand.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="w-auto p-3">
                                            <span className="text-lg font-medium text-white">Wrike</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Featcher Project start */}
            <section>
                <div className="skew skew-top mr-for-radius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewbox="0 0 10 10" preserveaspectratio="none">
                        <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
                    </svg>
                </div>
                <div className="skew skew-top ml-for-radius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewbox="0 0 10 10" preserveaspectratio="none">
                        <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
                    </svg>
                </div>
                <div className="py-20 bg-gray-50 radius-for-skewed">
                    <div className="container px-4 mx-auto">
                        <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
                            <div className="text-center lg:text-left">
                                <span className="text-green-600 font-bold">Dolor sit amet consectutar</span>
                                <h2 className="text-4xl lg:text-5xl font-bold font-heading">Featured Projects</h2>
                            </div>
                            <a className="hidden md:inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200" href="#">View More Projects</a>
                        </div>
                        <div className="flex flex-wrap -mx-4 mb-4">
                            <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
                                <a href="#">
                                    <img className="h-80 w-full mx-auto object-cover rounded" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="" />
                                </a>
                            </div>
                            <div className="relative mb-4 w-full md:w-1/2 lg:w-1/3 px-4">
                                <div className="relative h-80 mb-5 mx-auto rounded-lg">
                                    <img className="h-80 w-full relative h-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" alt="" />
                                    <div className="absolute inset-0 bg-gray-900 opacity-75 rounded-lg"></div>
                                    <div className="absolute inset-0 p-6 flex flex-col items-start">
                                        <span className="text-gray-400">2021</span>
                                        <p className="mb-auto text-xl lg:text-2xl text-white font-bold">Lorem ipsum dolor sit amet consectutar</p>
                                        <a className="inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose" href="#">View Project</a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
                                <a href="#">
                                    <img className="h-80 w-full mx-auto object-cover rounded" src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=968&q=80" alt="" />
                                </a>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
                                <a href="#">
                                    <img className="h-80 w-full mx-auto object-cover rounded" src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1127&q=80" alt="" />
                                </a>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
                                <a href="#">
                                    <img className="h-80 w-full mx-auto object-cover rounded" src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="" />
                                </a>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
                                <a href="#">
                                    <img className="h-80 w-full mx-auto object-cover rounded" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="text-center"><a className="md:hidden inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200" href="#">View More Projects</a></div>
                    </div>
                </div>
                <div className="skew skew-bottom mr-for-radius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewbox="0 0 10 10" preserveaspectratio="none">
                        <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
                    </svg>
                </div>
                <div className="skew skew-bottom ml-for-radius">
                    <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewbox="0 0 10 10" preserveaspectratio="none">
                        <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
                    </svg>
                </div>
            </section>
            {/* Featcher Project End */}


            {/* Popular Services start */}
            <section>
                <div className="">
                    <div className="flex justify-center">
                        <span className=' py-2 px-3 text-xs text-red-700 bg-red-200 font-semibold border border-red-700 rounded-full'>OUR SOLUTIONS</span>
                    </div>
                    <div className="py-3 flex justify-center">
                        <h1 className='text-gray-900 text-5xl font-extrabold  text-center'>Popular Services</h1>
                    </div>
                </div>

                <div className="grid grid-cols-12">
                    <div className="col-span-4 ">
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
                    <div className="col-span-4 ">
                        <div className=" bg-gray-50 px-12 py-16 border hover:shadow-xl">
                            <PencilSquareIcon className='h-10 w-10 text-red-700 font-bold' />

                            <h3 className='py-6 text-2xl font-bold'>Custom Shopify Theme Development</h3>
                            <div className=" flex   space-x-2 py-1">

                                <CheckIcon className='h-10 w-10' />

                                <sapn className='text-gray-500'> Design And Development Of Custom, Branded Themes</sapn>
                            </div>
                            <div className=" flex   space-x-2 py-1">
                                <CheckIcon className='h-8 w-8' />

                                <span className='text-gray-500'> Mobile-Responsive Design To Ensure A Seamless Shopping Experience</span>
                            </div>
                            <div className=" flex   space-x-2 py-1">
                                <CheckIcon className='h-5 w-5' />

                                <sapn className='text-gray-500'>User Experience (UX) Optimization For Higher Conversions</sapn>
                            </div>
                        </div>

                    </div>
                    <div className="col-span-4 ">
                        <div className=" bg-gray-50 px-12 py-16 border hover:shadow-xl">
                            <ShoppingCartIcon className='h-10 w-10 text-red-700 font-bold' />

                            <h3 className='py-6 text-2xl font-bold'>Custom Shopify Theme Development</h3>
                            <div className=" flex   space-x-2 py-1">

                                <CheckIcon className='h-10 w-10' />

                                <sapn className='text-gray-500'> Design And Development Of Custom, Branded Themes</sapn>
                            </div>
                            <div className=" flex   space-x-2 py-1">
                                <CheckIcon className='h-8 w-8' />

                                <span className='text-gray-500'> Mobile-Responsive Design To Ensure A Seamless Shopping Experience</span>
                            </div>
                            <div className=" flex   space-x-2 py-1">
                                <CheckIcon className='h-5 w-5' />

                                <sapn className='text-gray-500'>User Experience (UX) Optimization For Higher Conversions</sapn>
                            </div>
                        </div>

                    </div>
                    <div className="col-span-4 ">
                        <div className=" bg-gray-50 px-12 py-16 border hover:shadow-xl">
                            <IoOpenOutline className='h-10 w-10 text-red-700 font-bold' />

                            <h3 className='py-6 text-2xl font-bold'>Custom Shopify Theme Development</h3>
                            <div className=" flex   space-x-2 py-1">

                                <CheckIcon className='h-10 w-10' />

                                <sapn className='text-gray-500'> Design And Development Of Custom, Branded Themes</sapn>
                            </div>
                            <div className=" flex   space-x-2 py-1">
                                <CheckIcon className='h-8 w-8' />

                                <span className='text-gray-500'> Mobile-Responsive Design To Ensure A Seamless Shopping Experience</span>
                            </div>
                            <div className=" flex   space-x-2 py-1">
                                <CheckIcon className='h-5 w-5' />

                                <sapn className='text-gray-500'>User Experience (UX) Optimization For Higher Conversions</sapn>
                            </div>
                        </div>

                    </div>
                    <div className="col-span-4 ">
                        <div className=" bg-gray-50 px-12 py-16 border hover:shadow-2xl z-50">
                            <CalendarIcon className='h-10 w-10 text-red-700 font-bold' />

                            <h3 className='py-6 text-2xl font-bold'>Custom Shopify Theme Development</h3>
                            <div className=" flex   space-x-2 py-1">

                                <CheckIcon className='h-10 w-10' />

                                <sapn className='text-gray-500'> Design And Development Of Custom, Branded Themes</sapn>
                            </div>
                            <div className=" flex   space-x-2 py-1">
                                <CheckIcon className='h-8 w-8' />

                                <span className='text-gray-500'> Mobile-Responsive Design To Ensure A Seamless Shopping Experience</span>
                            </div>
                            <div className=" flex   space-x-2 py-1">
                                <CheckIcon className='h-5 w-5' />

                                <sapn className='text-gray-500'>User Experience (UX) Optimization For Higher Conversions</sapn>
                            </div>
                        </div>

                    </div>
                    <div className="col-span-4 ">
                        <div className=" bg-gray-50 px-12 py-16 border hover:shadow-2xl">
                            <FaPhoneVolume className='h-10 w-10 text-red-700 font-bold' />

                            <h3 className='py-6 text-2xl font-bold'>Custom Shopify Theme Development</h3>
                            <div className=" flex   space-x-2 py-1">

                                <CheckIcon className='h-10 w-10' />

                                <sapn className='text-gray-500'> Design And Development Of Custom, Branded Themes</sapn>
                            </div>
                            <div className=" flex   space-x-2 py-1">
                                <CheckIcon className='h-8 w-8' />

                                <span className='text-gray-500'> Mobile-Responsive Design To Ensure A Seamless Shopping Experience</span>
                            </div>
                            <div className=" flex   space-x-2 py-1">
                                <CheckIcon className='h-5 w-5' />

                                <sapn className='text-gray-500'>User Experience (UX) Optimization For Higher Conversions</sapn>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
            {/* Popular Services start */}




            <section className="relative pt-24 pb-32 overflow-hidden">
                <div className="container mx-auto px-4 py-24 bg-gray-50">
                    <h2 className="mb-5 max-w-2xl mx-auto font-heading font-bold text-center text-6xl sm:text-7xl text-gray-900">12k+ Happy Clients</h2>
                    <p className="mb-16 text-base max-w-md mx-auto text-center text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <div className="flex flex-wrap -m-5">
                        <div className="w-full md:w-1/3 p-5">
                            <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
                                <div className="h-full px-7 py-8 bg-white rounded-lg">
                                    <img className="mb-8" src="https://static.shuffle.dev/components/preview/50e32942-5c63-4bbb-9aef-39b50e576581/assets/public/gradia-assets/images/testimonials/avatar.png" alt="" />
                                    <p className="mb-8 text-lg text-gray-900">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
                                    <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">Darrell Steward</h3>
                                    <p className="text-sm text-gray-600">Product Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-5">
                            <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 shadow-5xl transition ease-out duration-1000">
                                <div className="h-full px-7 py-8 bg-white rounded-lg">
                                    <img className="mb-8" src="https://static.shuffle.dev/components/preview/50e32942-5c63-4bbb-9aef-39b50e576581/assets/public/gradia-assets/images/testimonials/avatar2.png" alt="" />
                                    <p className="mb-8 text-lg text-gray-900">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                                    <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">Ronald Richards</h3>
                                    <p className="text-sm text-gray-600">Software Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-5">
                            <div className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
                                <div className="h-full px-7 py-8 bg-white rounded-lg">
                                    <img className="mb-8" src="https://static.shuffle.dev/components/preview/50e32942-5c63-4bbb-9aef-39b50e576581/assets/public/gradia-assets/images/testimonials/avatar3.png" alt="" />
                                    <p className="mb-8 text-lg text-gray-900">“I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”</p>
                                    <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">Darrell Steward</h3>
                                    <p className="text-sm text-gray-600">Product Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-20  bg-white" style={{
                backgroundImage: `url(https://static.shuffle.dev/components/preview/88e9307f-3fef-4ff5-a095-3ea7d814a416/assets/public/flex-ui-assets/elements/pattern-white.svg`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <div className="container px-4 mx-auto bg-gray-50 py-12">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 mb-10">
                            <div className="flex flex-wrap justify-between items-center">
                                <div className="w-full md:w-1/2 mb-10 md:mb-0">
                                    <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">Rich text</span>
                                    <h3 className="mb-4 text-3xl md:text-4xl text-coolGray-900 font-bold tracking-tighter">Beautiful tool that helps you</h3>
                                    <p className="text-lg md:text-xl leading-8 text-coolGray-500 font-semibold">The only SaaS business platform that combines CRM, marketing automation & commerce.</p>
                                </div>
                                <div className="w-full md:w-auto">
                                    <div className="flex flex-wrap justify-center items-center -mb-2"><a className="inline-block py-3 px-6 mb-2 w-full md:w-auto md:mr-5 text-lg leading-7 text-coolGray-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm" href="#">Get Started</a><a className="inline-block py-3 px-6 mb-2 w-full md:w-auto text-lg leading-7 font-medium text-center text-coolGray-500 bg-coolGray-50 hover:bg-coolGray-100 rounded-md" href="#">Learn More</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 mb-5 lg:mb-0">
                            <p className="mb-5 text-lg font-medium leading-7 text-coolGray-500">With a single point of view, Flex integrates customer data and marketing tools in one flexible cloud platform that lets you get business results wherever they show up. Flex is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.</p>
                            <p className="mb-5 text-lg font-medium leading-7 text-coolGray-500">With Flex, you can run your business on one platform, seamlessly across all digital channels—and grow it anywhere. With a single point of view, Flex integrates customer data and marketing tools in one flexible cloud platform that lets you get business results wherever they show up.</p>
                            <p className="text-lg font-medium leading-7 text-coolGray-500">Flex is the only saas business platform that lets you run your business on one platform. Flex is the only saas business platform that lets you run your business on one platform.</p>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <p className="mb-5 text-lg font-medium leading-7 text-coolGray-500">
                                <span>With Flex, you can run your business on one platform, seamlessly across all digital channels—and grow it anywhere. With a single point of view, Flex integrates customer data and marketing tools in one flexible cloud platform that lets you get business results wherever they show up.</span>
                            </p>
                            <ol className="mb-5 list-decimal list-inside text-lg font-medium leading-7 text-coolGray-500">
                                <li>
                                    <span className="text-lg font-medium leading-8 text-coolGray-500">Enterprise software for startups</span>
                                </li>
                                <li>
                                    <span className="text-lg font-medium leading-8 text-coolGray-500">Time is money. Stop jumping from tool to tool with all the hassle of integrations.</span>
                                </li>
                                <li>
                                    <span className="text-lg font-medium leading-8 text-coolGray-500">Now you can manage your entire business on one platform.</span>
                                </li>
                            </ol>
                            <p className="text-lg font-medium leading-7 text-coolGray-500">With a single point of view, Flex integrates customer data and marketing tools in one flexible cloud platform that lets you get business results wherever they show up.</p>
                        </div>
                    </div>
                </div>
            </section>





            <div className="grid grid-cols-12">
                <div className="col-span-6">
                    <div className="w-full  px-4 mb-6 lg:mb-0">
                        <div className="px-8 py-10 mb-6 bg-white rounded-3xl shadow-lg">
                            <div className="flex cursor-pointer group w-full items-start justify-between text-left">
                                <div className="max-w-xl pr-5">
                                    <h3 className="text-xl font-semibold text-black">
                                        Do you provide a complete design style?
                                    </h3>
                                    <div>
                                        <p className="text-lg text-gray-500 mt-3">
                                            Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit
                                            tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra
                                            vivamus.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-900">
                                        <div className="hidden">
                                            <svg
                                                width={17}
                                                height={3}
                                                viewBox="0 0 17 3"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <div className="">
                                            <svg
                                                width={14}
                                                height={14}
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12.8334 6.16671H7.83337V1.16671C7.83337 0.945694 7.74558 0.733732 7.5893 0.577452C7.43302 0.421172 7.22105 0.333374 7.00004 0.333374C6.77903 0.333374 6.56707 0.421172 6.41079 0.577452C6.2545 0.733732 6.16671 0.945694 6.16671 1.16671V6.16671H1.16671C0.945694 6.16671 0.733732 6.2545 0.577452 6.41079C0.421172 6.56707 0.333374 6.77903 0.333374 7.00004C0.333374 7.22105 0.421172 7.43302 0.577452 7.5893C0.733732 7.74558 0.945694 7.83337 1.16671 7.83337H6.16671V12.8334C6.16671 13.0544 6.2545 13.2663 6.41079 13.4226C6.56707 13.5789 6.77903 13.6667 7.00004 13.6667C7.22105 13.6667 7.43302 13.5789 7.5893 13.4226C7.74558 13.2663 7.83337 13.0544 7.83337 12.8334V7.83337H12.8334C13.0544 7.83337 13.2663 7.74558 13.4226 7.5893C13.5789 7.43302 13.6667 7.22105 13.6667 7.00004C13.6667 6.77903 13.5789 6.56707 13.4226 6.41079C13.2663 6.2545 13.0544 6.16671 12.8334 6.16671Z"
                                                    fill="#FF460C"
                                                />
                                            </svg>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  px-4 mb-6 lg:mb-0">
                        <div className="px-8 py-10 mb-6 bg-white rounded-3xl shadow-lg">
                            <div className="flex cursor-pointer group w-full items-start justify-between text-left">
                                <div className="max-w-xl pr-5">
                                    <h3 className="text-xl font-semibold text-black">
                                        Do you provide a complete design style?
                                    </h3>
                                    <div>
                                        <p className="text-lg text-gray-500 mt-3">
                                            Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit
                                            tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra
                                            vivamus.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-900">
                                        <div className="hidden">
                                            <svg
                                                width={17}
                                                height={3}
                                                viewBox="0 0 17 3"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <div className="">
                                            <svg
                                                width={14}
                                                height={14}
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12.8334 6.16671H7.83337V1.16671C7.83337 0.945694 7.74558 0.733732 7.5893 0.577452C7.43302 0.421172 7.22105 0.333374 7.00004 0.333374C6.77903 0.333374 6.56707 0.421172 6.41079 0.577452C6.2545 0.733732 6.16671 0.945694 6.16671 1.16671V6.16671H1.16671C0.945694 6.16671 0.733732 6.2545 0.577452 6.41079C0.421172 6.56707 0.333374 6.77903 0.333374 7.00004C0.333374 7.22105 0.421172 7.43302 0.577452 7.5893C0.733732 7.74558 0.945694 7.83337 1.16671 7.83337H6.16671V12.8334C6.16671 13.0544 6.2545 13.2663 6.41079 13.4226C6.56707 13.5789 6.77903 13.6667 7.00004 13.6667C7.22105 13.6667 7.43302 13.5789 7.5893 13.4226C7.74558 13.2663 7.83337 13.0544 7.83337 12.8334V7.83337H12.8334C13.0544 7.83337 13.2663 7.74558 13.4226 7.5893C13.5789 7.43302 13.6667 7.22105 13.6667 7.00004C13.6667 6.77903 13.5789 6.56707 13.4226 6.41079C13.2663 6.2545 13.0544 6.16671 12.8334 6.16671Z"
                                                    fill="#FF460C"
                                                />
                                            </svg>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  px-4 mb-6 lg:mb-0">
                        <div className="px-8 py-10 mb-6 bg-white rounded-3xl shadow-lg">
                            <div className="flex cursor-pointer group w-full items-start justify-between text-left">
                                <div className="max-w-xl pr-5">
                                    <h3 className="text-xl font-semibold text-black">
                                        Do you provide a complete design style?
                                    </h3>
                                    <div>
                                        <p className="text-lg text-gray-500 mt-3">
                                            Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit
                                            tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra
                                            vivamus.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-900">
                                        <div className="hidden">
                                            <svg
                                                width={17}
                                                height={3}
                                                viewBox="0 0 17 3"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <div className="">
                                            <svg
                                                width={14}
                                                height={14}
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12.8334 6.16671H7.83337V1.16671C7.83337 0.945694 7.74558 0.733732 7.5893 0.577452C7.43302 0.421172 7.22105 0.333374 7.00004 0.333374C6.77903 0.333374 6.56707 0.421172 6.41079 0.577452C6.2545 0.733732 6.16671 0.945694 6.16671 1.16671V6.16671H1.16671C0.945694 6.16671 0.733732 6.2545 0.577452 6.41079C0.421172 6.56707 0.333374 6.77903 0.333374 7.00004C0.333374 7.22105 0.421172 7.43302 0.577452 7.5893C0.733732 7.74558 0.945694 7.83337 1.16671 7.83337H6.16671V12.8334C6.16671 13.0544 6.2545 13.2663 6.41079 13.4226C6.56707 13.5789 6.77903 13.6667 7.00004 13.6667C7.22105 13.6667 7.43302 13.5789 7.5893 13.4226C7.74558 13.2663 7.83337 13.0544 7.83337 12.8334V7.83337H12.8334C13.0544 7.83337 13.2663 7.74558 13.4226 7.5893C13.5789 7.43302 13.6667 7.22105 13.6667 7.00004C13.6667 6.77903 13.5789 6.56707 13.4226 6.41079C13.2663 6.2545 13.0544 6.16671 12.8334 6.16671Z"
                                                    fill="#FF460C"
                                                />
                                            </svg>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-6">
                    <div className="w-full  px-4 mb-6 lg:mb-0">
                        <div className="px-8 py-10 mb-6 bg-white rounded-3xl shadow-lg">
                            <div className="flex cursor-pointer group w-full items-start justify-between text-left">
                                <div className="max-w-xl pr-5">
                                    <h3 className="text-xl font-semibold text-black">
                                        Do you provide a complete design style?
                                    </h3>
                                    <div>
                                        <p className="text-lg text-gray-500 mt-3">
                                            Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit
                                            tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra
                                            vivamus.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-900">
                                        <div className="hidden">
                                            <svg
                                                width={17}
                                                height={3}
                                                viewBox="0 0 17 3"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <div className="">
                                            <svg
                                                width={14}
                                                height={14}
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12.8334 6.16671H7.83337V1.16671C7.83337 0.945694 7.74558 0.733732 7.5893 0.577452C7.43302 0.421172 7.22105 0.333374 7.00004 0.333374C6.77903 0.333374 6.56707 0.421172 6.41079 0.577452C6.2545 0.733732 6.16671 0.945694 6.16671 1.16671V6.16671H1.16671C0.945694 6.16671 0.733732 6.2545 0.577452 6.41079C0.421172 6.56707 0.333374 6.77903 0.333374 7.00004C0.333374 7.22105 0.421172 7.43302 0.577452 7.5893C0.733732 7.74558 0.945694 7.83337 1.16671 7.83337H6.16671V12.8334C6.16671 13.0544 6.2545 13.2663 6.41079 13.4226C6.56707 13.5789 6.77903 13.6667 7.00004 13.6667C7.22105 13.6667 7.43302 13.5789 7.5893 13.4226C7.74558 13.2663 7.83337 13.0544 7.83337 12.8334V7.83337H12.8334C13.0544 7.83337 13.2663 7.74558 13.4226 7.5893C13.5789 7.43302 13.6667 7.22105 13.6667 7.00004C13.6667 6.77903 13.5789 6.56707 13.4226 6.41079C13.2663 6.2545 13.0544 6.16671 12.8334 6.16671Z"
                                                    fill="#FF460C"
                                                />
                                            </svg>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  px-4 mb-6 lg:mb-0">
                        <div className="px-8 py-10 mb-6 bg-white rounded-3xl shadow-lg">
                            <div className="flex cursor-pointer group w-full items-start justify-between text-left">
                                <div className="max-w-xl pr-5">
                                    <h3 className="text-xl font-semibold text-black">
                                        Do you provide a complete design style?
                                    </h3>
                                    <div>
                                        <p className="text-lg text-gray-500 mt-3">
                                            Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit
                                            tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra
                                            vivamus.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-900">
                                        <div className="hidden">
                                            <svg
                                                width={17}
                                                height={3}
                                                viewBox="0 0 17 3"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <div className="">
                                            <svg
                                                width={14}
                                                height={14}
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12.8334 6.16671H7.83337V1.16671C7.83337 0.945694 7.74558 0.733732 7.5893 0.577452C7.43302 0.421172 7.22105 0.333374 7.00004 0.333374C6.77903 0.333374 6.56707 0.421172 6.41079 0.577452C6.2545 0.733732 6.16671 0.945694 6.16671 1.16671V6.16671H1.16671C0.945694 6.16671 0.733732 6.2545 0.577452 6.41079C0.421172 6.56707 0.333374 6.77903 0.333374 7.00004C0.333374 7.22105 0.421172 7.43302 0.577452 7.5893C0.733732 7.74558 0.945694 7.83337 1.16671 7.83337H6.16671V12.8334C6.16671 13.0544 6.2545 13.2663 6.41079 13.4226C6.56707 13.5789 6.77903 13.6667 7.00004 13.6667C7.22105 13.6667 7.43302 13.5789 7.5893 13.4226C7.74558 13.2663 7.83337 13.0544 7.83337 12.8334V7.83337H12.8334C13.0544 7.83337 13.2663 7.74558 13.4226 7.5893C13.5789 7.43302 13.6667 7.22105 13.6667 7.00004C13.6667 6.77903 13.5789 6.56707 13.4226 6.41079C13.2663 6.2545 13.0544 6.16671 12.8334 6.16671Z"
                                                    fill="#FF460C"
                                                />
                                            </svg>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  px-4 mb-6 lg:mb-0">
                        <div className="px-8 py-10 mb-6 bg-white rounded-3xl shadow-lg">
                            <div className="flex cursor-pointer group w-full items-start justify-between text-left">
                                <div className="max-w-xl pr-5">
                                    <h3 className="text-xl font-semibold text-black">
                                        Do you provide a complete design style?
                                    </h3>
                                    <div>
                                        <p className="text-lg text-gray-500 mt-3">
                                            Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit
                                            tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra
                                            vivamus.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-900">
                                        <div className="hidden">
                                            <svg
                                                width={17}
                                                height={3}
                                                viewBox="0 0 17 3"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <div className="">
                                            <svg
                                                width={14}
                                                height={14}
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12.8334 6.16671H7.83337V1.16671C7.83337 0.945694 7.74558 0.733732 7.5893 0.577452C7.43302 0.421172 7.22105 0.333374 7.00004 0.333374C6.77903 0.333374 6.56707 0.421172 6.41079 0.577452C6.2545 0.733732 6.16671 0.945694 6.16671 1.16671V6.16671H1.16671C0.945694 6.16671 0.733732 6.2545 0.577452 6.41079C0.421172 6.56707 0.333374 6.77903 0.333374 7.00004C0.333374 7.22105 0.421172 7.43302 0.577452 7.5893C0.733732 7.74558 0.945694 7.83337 1.16671 7.83337H6.16671V12.8334C6.16671 13.0544 6.2545 13.2663 6.41079 13.4226C6.56707 13.5789 6.77903 13.6667 7.00004 13.6667C7.22105 13.6667 7.43302 13.5789 7.5893 13.4226C7.74558 13.2663 7.83337 13.0544 7.83337 12.8334V7.83337H12.8334C13.0544 7.83337 13.2663 7.74558 13.4226 7.5893C13.5789 7.43302 13.6667 7.22105 13.6667 7.00004C13.6667 6.77903 13.5789 6.56707 13.4226 6.41079C13.2663 6.2545 13.0544 6.16671 12.8334 6.16671Z"
                                                    fill="#FF460C"
                                                />
                                            </svg>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section className="pt-24 pb-36 bg-white overflow-hidden">
                <div className="container px-4 mx-auto bg-gray-50 py-24">
                    <h2 className="mb-4 text-6xl md:text-7xl text-center font-bold font-heading font-heading tracking-px-n leading-tight">Latest from Blog</h2>
                    <p className="mb-24 font-medium text-gray-600 text-center leading-relaxed md:max-w-lg mx-auto">Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condimentum vitae vel purus.</p>
                    <div className="flex flex-wrap -m-8">
                        <div className="w-full md:w-1/2 p-8">
                            <div className="flex flex-wrap lg:items-center -m-4">
                                <div className="w-auto p-4">
                                    <div className="overflow-hidden rounded-xl">
                                        <img className="transform hover:scale-105 transition ease-in-out duration-1000" src="https://static.shuffle.dev/components/preview/238eb578-e531-4cf4-a658-a1ff13c9b896/assets/public/flaro-assets/images/blog/blog.png" alt="" />
                                    </div>
                                </div>
                                <div className="flex-1 p-4">
                                    <div className="md:max-w-xs">
                                        <div className="flex flex-col justify-between h-full">
                                            <div className="mb-6">
                                                <p className="mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px">Product</p>
                                                <a className="inline-block hover:text-gray-800 hover:underline" href="#">
                                                    <h3 className="text-xl font-semibold leading-normal">An IT services company that can grow your business</h3>
                                                </a>
                                            </div>
                                            <div className="flex flex-wrap items-center -m-1">
                                                <div className="w-auto p-1">
                                                    <img src="https://static.shuffle.dev/components/preview/238eb578-e531-4cf4-a658-a1ff13c9b896/assets/public/flaro-assets/images/blog/blog-avatar.png" alt="" />
                                                </div>
                                                <div className="w-auto p-1">
                                                    <p className="text-sm font-semibold leading-relaxed">Wade Warren</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                            <div className="flex flex-wrap lg:items-center -m-4">
                                <div className="w-auto p-4">
                                    <div className="overflow-hidden rounded-xl">
                                        <img className="transform hover:scale-105 transition ease-in-out duration-1000" src="https://static.shuffle.dev/components/preview/238eb578-e531-4cf4-a658-a1ff13c9b896/assets/public/flaro-assets/images/blog/blog2.png" alt="" />
                                    </div>
                                </div>
                                <div className="flex-1 p-4">
                                    <div className="md:max-w-xs">
                                        <div className="flex flex-col justify-between h-full">
                                            <div className="mb-6">
                                                <p className="mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px">Product</p>
                                                <a className="inline-block hover:text-gray-800 hover:underline" href="#">
                                                    <h3 className="text-xl font-semibold leading-normal">How to handle your good employee for the business</h3>
                                                </a>
                                            </div>
                                            <div className="flex flex-wrap items-center -m-1">
                                                <div className="w-auto p-1">
                                                    <img src="https://static.shuffle.dev/components/preview/238eb578-e531-4cf4-a658-a1ff13c9b896/assets/public/flaro-assets/images/blog/blog-avatar2.png" alt="" />
                                                </div>
                                                <div className="w-auto p-1">
                                                    <p className="text-sm font-semibold leading-relaxed">Bessie Cooper</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                            <div className="flex flex-wrap lg:items-center -m-4">
                                <div className="w-auto p-4">
                                    <div className="overflow-hidden rounded-xl">
                                        <img className="transform hover:scale-105 transition ease-in-out duration-1000" src="https://static.shuffle.dev/components/preview/238eb578-e531-4cf4-a658-a1ff13c9b896/assets/public/flaro-assets/images/blog/blog3.png" alt="" />
                                    </div>
                                </div>
                                <div className="flex-1 p-4">
                                    <div className="md:max-w-xs">
                                        <div className="flex flex-col justify-between h-full">
                                            <div className="mb-6">
                                                <p className="mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px">Product</p>
                                                <a className="inline-block hover:text-gray-800 hover:underline" href="#">
                                                    <h3 className="text-xl font-semibold leading-normal">New consulting for all kind offer related to IT services</h3>
                                                </a>
                                            </div>
                                            <div className="flex flex-wrap items-center -m-1">
                                                <div className="w-auto p-1">
                                                    <img src="https://static.shuffle.dev/components/preview/238eb578-e531-4cf4-a658-a1ff13c9b896/assets/public/flaro-assets/images/blog/blog-avatar2.png" alt="" />
                                                </div>
                                                <div className="w-auto p-1">
                                                    <p className="text-sm font-semibold leading-relaxed">Albert Flores</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                            <div className="flex flex-wrap lg:items-center -m-4">
                                <div className="w-auto p-4">
                                    <div className="overflow-hidden rounded-xl">
                                        <img className="transform hover:scale-105 transition ease-in-out duration-1000" src="https://static.shuffle.dev/components/preview/238eb578-e531-4cf4-a658-a1ff13c9b896/assets/public/flaro-assets/images/blog/blog4.png" alt="" />
                                    </div>
                                </div>
                                <div className="flex-1 p-4">
                                    <div className="md:max-w-xs">
                                        <div className="flex flex-col justify-between h-full">
                                            <div className="mb-6">
                                                <p className="mb-1.5 text-sm text-gray-500 font-medium uppercase tracking-px">Product</p>
                                                <a className="inline-block hover:text-gray-800 hover:underline" href="#">
                                                    <h3 className="text-xl font-semibold leading-normal">How life insurance helps you during financial insolvency</h3>
                                                </a>
                                            </div>
                                            <div className="flex flex-wrap items-center -m-1">
                                                <div className="w-auto p-1">
                                                    <img src="https://static.shuffle.dev/components/preview/238eb578-e531-4cf4-a658-a1ff13c9b896/assets/public/flaro-assets/images/blog/blog-avatar2.png" alt="" />
                                                </div>
                                                <div className="w-auto p-1">
                                                    <p className="text-sm font-semibold leading-relaxed">Jerome Bell</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative py-20 overflow-hidden">
                <img
                    className="absolute top-0 left-0"
                    src="shttps://static.shuffle.dev/components/preview/2f808e47-944e-42cf-b821-2358251e0600/assets/public/saturn-assets/images/footers/blue-light-left.png"
                    alt=""
                />
                <img
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                    src="https://static.shuffle.dev/components/preview/2f808e47-944e-42cf-b821-2358251e0600/assets/public/saturn-assets/images/footers/orange-light-bottom.png"
                    alt=""
                />
                <div className="relative container px-4 mx-auto">
                    <div className="max-w-7xl mx-auto">
                        <div className="pb-10 mb-10 border-b border-gray-100 items-center">
                            <div className="flex flex-wrap -mx-4 items-center">
                                <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
                                    <a className="inline-block" href="#">
                                        <img
                                            className="h-15"
                                            src="https://static.shuffle.dev/components/preview/2f808e47-944e-42cf-b821-2358251e0600/assets/public/saturn-assets/logos/logo-saturn-dark.svg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="w-full lg:w-1/2 px-4">
                                    <div className="sm:flex -mb-4 items-center lg:justify-end">
                                        <span className="inline-block text-gray-900 mb-4 mr-8">
                                            Ready to get collaborate?
                                        </span>
                                        <a
                                            className="relative group inline-block w-full sm:w-auto py-3 px-5 mb-4 text-center text-sm font-semibold text-orange-50 bg-orange-900 rounded-md overflow-hidden"
                                            href="#"
                                        >
                                            <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-105 transition duration-500" />
                                            <span className="relative">Get Started</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-4 mb-18">
                            <div className="w-full lg:w-2/5 px-4 mb-12 lg:mb-0">
                                <div className="xs:max-w-xs">
                                    <h4 className="font-heading text-2xl font-semibold text-gray-900 mb-4">
                                        Subscribe to our newsletter
                                    </h4>
                                    <form action="">
                                        <label
                                            className="block mb-1.5 text-sm font-semibold text-gray-900"
                                            htmlFor=""
                                        >
                                            Email
                                        </label>
                                        <div className="xs:flex items-center">
                                            <div className="relative mb-4 xs:mb-0 xs:mr-4">
                                                <span className="absolute left-0 top-1/2 ml-4 transform -translate-y-1/2">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM18.59 6L12.71 11.88C12.617 11.9737 12.5064 12.0481 12.3846 12.0989C12.2627 12.1497 12.132 12.1758 12 12.1758C11.868 12.1758 11.7373 12.1497 11.6154 12.0989C11.4936 12.0481 11.383 11.9737 11.29 11.88L5.41 6H18.59ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7.41L9.88 13.29C10.4425 13.8518 11.205 14.1674 12 14.1674C12.795 14.1674 13.5575 13.8518 14.12 13.29L20 7.41V17Z"
                                                            fill="#80818C"
                                                        />
                                                    </svg>
                                                </span>
                                                <input
                                                    className="w-full p-12 pr-4 py-4 text-sm text-gray-500 placeholder-gray-400 rounded-lg bg-white border border-gray-200 outline-none"
                                                    type="email"
                                                    placeholder="pat@shuffle.dev"
                                                />
                                                <div
                                                    data-lastpass-icon-root=""
                                                    style={{
                                                        position: "relative !important",
                                                        height: "0px !important",
                                                        width: "0px !important",
                                                        float: "left !important"
                                                    }}
                                                />
                                            </div>
                                            <button
                                                className="flex flex-shrink-0 ml-auto xs:ml-0 items-center justify-center w-12 h-12 text-orange-50 bg-orange-900 hover:bg-gray-900 rounded-full transition duration-200"
                                                type="submit"
                                            >
                                                <svg
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M20.3398 9.32L6.33976 2.32C5.78725 2.04501 5.16338 1.94711 4.55319 2.03965C3.94301 2.13219 3.37622 2.41067 2.93009 2.83711C2.48396 3.26356 2.18021 3.81722 2.06025 4.42261C1.94029 5.028 2.00996 5.65565 2.25976 6.22L4.65976 11.59C4.71422 11.7198 4.74226 11.8592 4.74226 12C4.74226 12.1408 4.71422 12.2802 4.65976 12.41L2.25976 17.78C2.05646 18.2367 1.97051 18.737 2.00974 19.2354C2.04896 19.7337 2.2121 20.2144 2.48434 20.6337C2.75658 21.053 3.12928 21.3976 3.56858 21.6362C4.00788 21.8748 4.49984 21.9999 4.99976 22C5.46799 21.9953 5.92925 21.886 6.34976 21.68L20.3498 14.68C20.8464 14.4302 21.2638 14.0473 21.5555 13.5741C21.8471 13.1009 22.0016 12.5559 22.0016 12C22.0016 11.4441 21.8471 10.8991 21.5555 10.4259C21.2638 9.95269 20.8464 9.56981 20.3498 9.32H20.3398ZM19.4498 12.89L5.44976 19.89C5.26592 19.9783 5.05949 20.0082 4.85815 19.9758C4.6568 19.9435 4.47017 19.8503 4.32327 19.7089C4.17638 19.5674 4.07624 19.3844 4.03629 19.1844C3.99634 18.9844 4.01849 18.777 4.09976 18.59L6.48976 13.22C6.5207 13.1483 6.54741 13.0748 6.56976 13H13.4598C13.725 13 13.9793 12.8946 14.1669 12.7071C14.3544 12.5196 14.4598 12.2652 14.4598 12C14.4598 11.7348 14.3544 11.4804 14.1669 11.2929C13.9793 11.1054 13.725 11 13.4598 11H6.56976C6.54741 10.9252 6.5207 10.8517 6.48976 10.78L4.09976 5.41C4.01849 5.22296 3.99634 5.01555 4.03629 4.81557C4.07624 4.61559 4.17638 4.4326 4.32327 4.29115C4.47017 4.14969 4.6568 4.05653 4.85815 4.02415C5.05949 3.99177 5.26592 4.02173 5.44976 4.11L19.4498 11.11C19.6136 11.1939 19.751 11.3214 19.847 11.4784C19.943 11.6355 19.9938 11.816 19.9938 12C19.9938 12.184 19.943 12.3645 19.847 12.5216C19.751 12.6786 19.6136 12.8061 19.4498 12.89V12.89Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/3 lg:w-1/5 px-4 mb-8 sm:mb-0">
                                <h5 className="text-lg font-semibold text-gray-900 mb-4">Services</h5>
                                <ul>
                                    <li className="mb-4">
                                        <a
                                            className="inline-block text-gray-500 hover:text-gray-600"
                                            href="#"
                                        >
                                            Email Marketing
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a
                                            className="inline-block text-gray-500 hover:text-gray-600"
                                            href="#"
                                        >
                                            Campaigns
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a
                                            className="inline-block text-gray-500 hover:text-gray-600"
                                            href="#"
                                        >
                                            Branding
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="inline-block text-gray-500 hover:text-gray-600"
                                            href="#"
                                        >
                                            Offline
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full sm:w-1/3 lg:w-1/5 px-4 mb-8 sm:mb-0">
                                <h5 className="text-lg font-semibold text-gray-900 mb-3">About</h5>
                                <ul>
                                    <li className="mb-4">
                                        <a
                                            className="inline-block text-gray-500 hover:text-gray-600"
                                            href="#"
                                        >
                                            Our Story
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a
                                            className="inline-block text-gray-500 hover:text-gray-600"
                                            href="#"
                                        >
                                            Benefits
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a
                                            className="inline-block text-gray-500 hover:text-gray-600"
                                            href="#"
                                        >
                                            Team
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="inline-block text-gray-500 hover:text-gray-600"
                                            href="#"
                                        >
                                            Careers
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full sm:w-1/3 lg:w-1/5 px-4">
                                <h5 className="text-lg font-semibold text-gray-900 mb-4">Help</h5>
                                <ul>
                                    <li className="mb-4">
                                        <a
                                            className="inline-block text-gray-500 hover:text-gray-600"
                                            href="#"
                                        >
                                            FAQs
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="inline-block text-gray-500 hover:text-gray-600"
                                            href="#"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="sm:flex items-center justify-between">
                            <div className="sm:flex mb-6 sm:mb-0 items-center">
                                <a
                                    className="inline-block mr-6 sm:mr-12 text-gray-900 hover:text-gray-600"
                                    href="#"
                                >
                                    Terms &amp; Conditions
                                </a>
                                <a
                                    className="inline-block text-gray-900 hover:text-gray-600"
                                    href="#"
                                >
                                    Privacy Policy
                                </a>
                            </div>
                            <div className="flex items-center">
                                <a
                                    className="inline-block mr-5 hover:bg-orange-50 rounded-md p-1"
                                    href="#"
                                >
                                    <img src="https://static.shuffle.dev/components/preview/2f808e47-944e-42cf-b821-2358251e0600/assets/public/saturn-assets/images/footers/icon-facebook.svg" alt="" />
                                </a>
                                <a
                                    className="inline-block mr-5 hover:bg-orange-50 rounded-md p-1"
                                    href="#"
                                >
                                    <img src="https://static.shuffle.dev/components/preview/2f808e47-944e-42cf-b821-2358251e0600/assets/public/saturn-assets/images/footers/icon-facebook.svg" alt="" />
                                </a>
                                <a
                                    className="inline-block mr-5 hover:bg-orange-50 rounded-md p-1"
                                    href="#"
                                >
                                    <img src="https://static.shuffle.dev/components/preview/2f808e47-944e-42cf-b821-2358251e0600/assets/public/saturn-assets/images/footers/icon-youtube.svg" alt="" />
                                </a>
                                <a
                                    className="inline-block hover:bg-orange-50 rounded-md p-1"
                                    href="#"
                                >
                                    <img src="https://static.shuffle.dev/components/preview/2f808e47-944e-42cf-b821-2358251e0600/assets/public/saturn-assets/images/footers/icon-linkedin.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </AppLayout >
    );
}

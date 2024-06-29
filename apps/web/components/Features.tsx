// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

// const features = [
//     {
//         name: 'Text to speech',
//         description:
//             'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//         icon: CloudArrowUpIcon,
//     },
//     {
//         name: 'Sign chart',
//         description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
//         icon: LockClosedIcon,
//     },
//     {
//         name: 'Learning Module',
//         description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
//         icon: ServerIcon,
//     },
// ];


import { SpeakerWaveIcon, ChatBubbleLeftRightIcon, BookOpenIcon } from '@heroicons/react/20/solid';
import log_img from '../public/disableP.png'
import Image from 'next/image';

const features = [
    {
        name: 'Text to speech',
        description: 'This feature converts written text into spoken words, enhancing accessibility for users with visual impairments.',
        icon: SpeakerWaveIcon,
    },
    {
        name: 'Screen Reader',
        description: 'This feature ensures that users can easily access and understand the content without needing to read it visually.',
        icon: ChatBubbleLeftRightIcon, // Use a chat bubble icon for sign language representation
    },
    {
        name: 'Learning Module',
        description: 'This module offers various learning tools and resources designed to support diverse learning needs.',
        icon: BookOpenIcon,
    },
];




export default function Features() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Accessibility Features</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                            Our commitment to making technology accessible
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <Image
                        src={log_img}
                        alt="Product screenshot"
                        className="w-[35rem] mt-10 max-w-none rounded-2xl shadow-xl ring-1 ring-gray-400/10 sm:w-[45rem] md:-ml-4 lg:-ml-0"
                        width={2000}
                        height={1000}
                    />
                </div>
            </div>
        </div>
    );
}

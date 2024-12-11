import ChooseUsCardTitle from "../common/ChooseUsCardTitle"
import Description from "../common/Description"
import { Bulb, Bundle, Comparison, Gas, Internet, NoService, Support, TimeMoney } from "./icons"


export const HEADER_LINK = [
    {
        title: 'About',
        link: '#about',
    },
    {
        title: 'How It Works',
        link: '#works'
    },
    {
        title: 'Services',
        link: '#services'
    },
    {
        title: 'Testimonials',
        link: '#testimonials'
    },
    {
        title: 'Why Us',
        link: '#us'
    },
    {
        title: 'FAQ',
        link: '#faq'
    },
]
export const ENERGY_PLANS_LIST = [
    'Save money by finding cheaper deals.',
    'Get better customer service.',
    'Explore greener, more sustainable energy options.',
]
export const COMPANY_LOGO = [
    {
        logo: '/assets/images/webp/energy-logo.webp',
        alt:'energy-logo',
        myLink: '#energy',
        myClass:'h-[62px] max-md:h-14 max-sm:h-10'
    },
    {
        logo: '/assets/images/webp/blue-nrg-logo.webp',
        alt:'blue-nrg-logo',
        myLink: '#nrg',
        myClass:'h-[42px] max-md:h-9 max-sm:h-7'
    },
    {
        logo: '/assets/images/webp/dodo-logo.webp',
        alt:'dodo-logo',
        myLink: '#dodo',
        myClass:'h-8 max-md:h-7 max-sm:h-6'
        
    },
    {
        logo: '/assets/images/webp/origin-logo.webp',
        alt:'origin-logo',
        myLink: '#origin',
        myClass:'h-[62px] max-md:h-14 max-sm:h-10'
    },
    {
        logo: '/assets/images/webp/ovo-logo.webp',
        alt:'ovo-logo',
        myLink: '#ovo',
        myClass:'h-[62px] max-md:h-14 max-sm:h-10'
    },
    {
        logo: '/assets/images/webp/sumo-logo.webp',
        alt:'sumo-logo',
        myLink: '#sumo',
        myClass:'h-11 max-md:h-10 max-sm:h-9'
    },
    {
        logo: '/assets/images/webp/agl-logo.webp',
        alt:'agl-logo',
        myLink: '#agl',
        myClass:'h-[62px] max-md:h-14 max-sm:h-10'
    },
     
]
export const SIMPLE_STEPS_LIST = [
    {
        image: '/assets/images/webp/location.webp',
        alt: 'location',
        title: "Enter Your Location and Preferences",
        content: 'Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.'
    },
    {
        image: '/assets/images/webp/compare-providers.webp',
        alt: 'compare-providers',
        title: "Compare Providers",
        content: 'Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.'
    },
    {
        image: '/assets/images/webp/girl-with-heater.webp',
        alt: 'girl-with-heater',
        title: "Switch Easily",
        content: 'Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.'
    },
    {
        image: '/assets/images/webp/best-plan.webp',
        alt: 'best-plan',
        title: "Choose the Best Plan",
        content: 'Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.'
    },
]
export const UTILITY_COMPARISONS = [
    {   
        icon:<Bulb/>,
        title: 'Electricity Plan Comparisons',
        description: 'Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider.'
    },
    {
        icon: <Gas/>,
        title: 'Gas Plan Comparisons',
        description: 'Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider.'
    },
    {
        icon:<Internet/>,
        title: 'Internet Plan Comparisons',
        description: 'Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider.'
    },
    {
        icon:<Bundle/>,
        title: 'Bundle Packages',
        description: 'Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider.'
    },
]
export const CHOOSE_US = [
    {   
        icon:<Comparison/>,
        title: <ChooseUsCardTitle customColor='text-babyBlack' text='Simplified Comparison Process' />,
        description: <Description myOpacity='opacity-90' customColor='text-deepBlue' text="Our intuitive platform lets you compare the best utility providers in one place, helping you make a quick and informed decision." /> 
    },
    {
        icon: <TimeMoney/>,
        title: <ChooseUsCardTitle customColor='text-babyBlack' text='Save Time and Money' />,
        description: <Description myOpacity='opacity-90' customColor='text-deepBlue' text="With up-to-date plans and pricing, you can be sure you’re getting the most competitive rates available." /> 
    },
    {
        icon:<NoService/>,
        title: <ChooseUsCardTitle customColor='text-babyBlack' text='No Service Interruptions' />,
        description: <Description myOpacity='opacity-90' customColor='text-deepBlue' text="We take care of the entire switching process so you can enjoy a hassle-free experience with zero downtime." /> 
    },
    {
        icon: <Support/>,
        title: <ChooseUsCardTitle customColor='text-babyBlack' text='Comprehensive Support' />,
        description: <Description myOpacity='opacity-90' customColor='text-deepBlue' text="Whether you need assistance selecting a plan or during the switch, our dedicated support team is here to help every step of the way." />
    },
]
export const OUR_TESTIMONIALS = [
    {
        profileImg: '/assets/images/webp/cameron.webp',
        alt: 'cameron',
        name: "Cameron",
        id: <Description text='@cameron' customColor='text-black' myOpacity='opacity-50'/>,
        rating: '/assets/images/webp/rating.webp',
        ratingAlt: 'rating',
        content: <Description customColor="text-deepBlue" myOpacity='opacity-90' text="Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum." />
    },
    {
        profileImg: '/assets/images/webp/ronald.webp',
        alt: 'ronald',
        name: "Ronald",
        id: <Description text='@ronald' customColor='text-black' myOpacity='opacity-50'/>,
        rating: '/assets/images/webp/rating.webp',
        ratingAlt: 'rating',
        content: <Description customColor="text-deepBlue" myOpacity='opacity-90' text="Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum." />
    },
    {
        profileImg: '/assets/images/webp/jay-shah.webp',
        alt: 'jay-shah',
        name: "Jay Shah",
        id: <Description text='@jayshah' customColor='text-black' myOpacity='opacity-50'/>,
        rating: '/assets/images/webp/rating.webp',
        ratingAlt: 'rating',
        content: <Description customColor="text-deepBlue" myOpacity='opacity-90' text="Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum." />
    },
]


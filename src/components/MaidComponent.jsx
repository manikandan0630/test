import Navbar from './Navbar/Navbar';
import CommonServiceHero from './commonserviceHero';
import CommonCardPromise from './commonCardPromise';
import FeedbackCard from './feedbackCard';
import MaidCare from '../assets/Group52.png';
import Banner from './Banner';
import Banner4 from '../assets/banner-4.png';
import CookingFeature from './CookingTypesSection';
import hero4 from '../assets/hero-4.png';
import WhyChooseUs from './whyuChooseus';
import Footer from './footer';
import Maid1 from '../assets/maid-1.png'
import Maid2 from '../assets/maid-2.png'
import Maid3 from '../assets/maid-3.png'
import Maid4 from '../assets/maid-4.png';
import Header from './header'
const MaidComponent = () => {
    const data = {
        centerImage: "../assets/hero-1 (1).png",
        items: [
            {
                icon: Maid1,
                title: "Housekeeping Maids",
                description: "Trained housekeeping maids who manage daily cleaning, dusting, mopping, bathroom cleaning, and overall home upkeep — ensuring your home stays fresh, tidy, and welcoming every day."
            },
            {
                icon: Maid4,
                title: "Deep Cleaning Maids",
                description: "Professionals skilled in detailed cleaning of kitchens, bathrooms, appliances, furniture, corners, and hard-to-reach areas to restore your home’s shine through thorough deep cleaning sessions."
            },
            {
                icon: Maid2,
                title: "Full-Time Home Managers",
                description: "Experienced maids who handle end-to-end household tasks including cleaning, laundry, ironing, organizing, kitchen assistance, and daily upkeep, keeping everything in perfect order."
            },
            {
                icon: Maid3,
                title: "Stay-In & Non-Stay Options",
                description: "Choose between live-in maids for complete day-long home management or non-stay maids who arrive for scheduled daily tasks — both offering dependable, consistent service."
            }
        ]
    };
    const items = [
        "Maids Who Maintain Exceptional Hygiene & Cleaning Standards",
        "Complete Household Cleaning & Organization Support",
        "Flexible Stay-in and Non-Stay Options",
        "Specialized Expertise for Every Healthcare Need",
        "Personal Guidance Throughout Your Healthcare Journey",
    ]; 
    return (
        <>
            <Header />
            <div className=''>
                <Navbar />
                <CommonServiceHero title="Hire reliable maids who keep your home clean, organized, and running smoothly." description={`Flexible stay-in and non-stay arrangements with trained professionals skilled in daily cleaning, deep cleaning, laundry, utensil washing, and overall household maintenance.
Experience spotless housekeeping and seamless home management by verified, trustworthy staff`} image={MaidCare} />
                <CookingFeature centerImage={hero4} items={data.items} />
                <Banner description="For every home and every cleanliness requirement, we take a thoughtful, personal approach to connect you with a maid who understands your living style, routines, and expectations.  Your comfort, our commitment, delivered with consistency, care, and reliability." imageSrc={Banner4} tag1="Your cleanliness needs, our heartfelt solutions. With" tag2="a well-kept home comes home" />
                <CommonCardPromise />
                <WhyChooseUs items={items} />
                <FeedbackCard />
                <Footer />
            </div>
        </>
    )
}

export default MaidComponent;
import Navbar from './Navbar/Navbar';
import CommonServiceHero from './commonserviceHero';
import CookingTypesSection from './CookingTypesSection';
import FeedbackCard from './feedbackCard';
import BabyCare from '../assets/Group48.png';
import Banner from './Banner';
import Banner2 from '../assets/banner-2.png';
import hero2 from '../assets/hero-2.png'
import CommonCardPromise from './commonCardPromise';
import WhyChooseUs from './whyuChooseus';
import Footer from './footer';
import Baby1 from '../assets/baby-1.png';
import Baby2 from '../assets/baby-2.png';
import Baby3 from '../assets/baby-3.png';
import Baby4 from '../assets/baby-4.png';
import Header from './header'
const BabyCareComponent = () => {
    const data = {
        centerImage: "../assets/hero-1 (1).png",
        items: [
            {
                icon: Baby1,
                title: "Newborn Baby Care Takers",
                description: "Specialized caregivers trained in newborn care including feeding schedules, sleep routines, diaper changes, and gentle handling techniques, ensuring your precious baby receives expert care during those crucial early months."
            },
            {
                icon: Baby2,
                title: "Infant Care Takers",
                description: "Experienced caregivers skilled in infant development activities, feeding transitions, sleep training, and early learning stimulation, supporting your baby's growth milestones with patience and expertise."
            },
            {
                icon: Baby3,
                title: "Toddler Care Takers",
                description: "Professional caregivers who understand toddler behavior, safety requirements, engaging activities, and developmental needs, creating nurturing environments that encourage learning and exploration."
            },
            {
                icon: Baby4,
                title: "Stay-In & Non-Stay Options",
                description: "Choose between live-in caregivers for round-the-clock baby care and support or daily caregivers who work scheduled hours - both maintaining the same high standards of safety and loving attention."
            }
        ]
    };
    const items = [
        "Caregivers Who Maintain Exceptional Safety and Hygiene Standards",
        "Complete Development Support and Activity Planning",
        "Flexible Stay-In and Non-Stay Options",
        "Specialized Expertise for Every Developmental Stage",
        "Personal Guidance Throughout Your Childcare Journey",
    ];
    return (
        <>
            <Header />
            <div className=''>
                <Navbar />
                <CommonServiceHero title="Hire experienced nanny who provide loving, attentive care for your precious little ones." description={`Flexible stay-in and non-stay arrangements with specialized expertise in newborn, infant, and toddler care.Experience professional and nurturing childcare by verified, trained caregivers.`}
                    image={BabyCare} />
                <CookingTypesSection centerImage={hero2}
                    items={data.items} />
                <Banner imageSrc={Banner2} description="For every baby and every developmental stage, we take a thoughtful, personal approach to connect you with a caregiver who truly understands your child's unique needs and your family's parenting style. Your child's safety, our commitment, delivered with love, expertise, and dependability." tag1="Your childcare needs, our heartfelt solutions. With" tag2=" professional baby care comes home" />
                <CommonCardPromise />
                <WhyChooseUs items={items} />
                <FeedbackCard />
                <Footer />
            </div>
        </>
    )
}

export default BabyCareComponent;
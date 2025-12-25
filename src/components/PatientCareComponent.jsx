import Navbar from './Navbar/Navbar';
import CommonServiceHero from './commonserviceHero';
import CookingFeature from './CookingTypesSection';
import FeedbackCard from './feedbackCard';
import PatientCare from '../assets/Group409.png';
import Banner from './Banner';
import Banner3 from '../assets/banner-3.png';
import hero3 from '../assets/hero-3.png'
import CommonCardPromise from './commonCardPromise';
import WhyChooseUs from './whyuChooseus';
import Footer from './footer';
import Patient1 from '../assets/Patient-1.png'
import Patient2 from '../assets/Patient-2.png'
import Patient3 from '../assets/Patient-3.png'
import Patient4 from '../assets/Patient-4.png';
import Header from './header'
const PatientCareComponent = () => {
    const data = {
        centerImage: "../assets/hero-1 (1).png",
        items: [
            {
                icon: Patient3,
                title: "Elderly Care",
                description: "Our compassionate caregivers provide elderly support including daily living assistance, medication reminders, mobility help, and companionship, ensuring your aging loved ones receive dignified care in the comfort of home."
            },
            {
                icon: Patient4,
                title: "Patient Care",
                description: "Caregivers skilled in post-operative care, chronic illness management, rehabilitation support, and recovery assistance, providing personalized attention during healing and medical treatment periods."
            },
            {
                icon: Patient1,
                title: "Nursing Care",
                description: "Qualified nursing assistants experienced in medical procedures, vital monitoring, wound care, and clinical support, delivering professional healthcare services under medical supervision in your home setting."
            },
            {
                icon: Patient2,
                title: "Stay-In & Non-Stay Options",
                description: "Choose between live-in caregivers for round-the-clock medical support and monitoring or daily caregivers who provide scheduled care visits - both maintaining the same high standards of professional healthcare and compassionate attention."
            }
        ]
    };
    const items = [
        "Caregivers Who Maintain Exceptional Medical Hygiene and Safety Standards",
        "Complete Health Monitoring and Care Coordination",
        "Flexible Stay-in and Non-Stay Options",
        "Specialized Expertise for Every Healthcare Need",
        "Personal Guidance Throughout Your Healthcare Journey",
    ];
    return (
        <>
            <Header />  
            <div className=''>
                <Navbar />
                <CommonServiceHero title="Hire compassionate caregivers who provide dedicated support for your loved ones' health and well-being" description={`Flexible stay-in and non-stay arrangements with specialized expertise in elderly care, patient care, and nursing assistance.
Experience professional and empathetic healthcare support by verified, trained caregivers.`} image={PatientCare} />
                <CookingFeature centerImage={hero3} items={data.items} />
                <Banner imageSrc={Banner3} description="For every health condition and every care requirement, we take a thoughtful, personal approach to connect you with a caregiver who truly understands your loved one's medical needs and your family's concerns. Your peace of mind, our commitment, delivered with expertise, compassion, and dependability." tag1="Your healthcare needs, our heartfelt solutions. With" tag2="  professional patient care comes home." />
                <CommonCardPromise />
                <WhyChooseUs items={items} />
                <FeedbackCard />
                <Footer />
            </div>
        </>
    )
}

export default PatientCareComponent;
import Navbar from './Navbar/Navbar';
import CommonServiceHero from './commonserviceHero';
import CookingTypesSection from './CookingTypesSection';
import FeedbackCard from './feedbackCard';
import Cook from '../assets/Group47.png'
import Banner from './Banner';
import Banner1 from '../assets/banner-1.png';
import hero1 from '../assets/hero-1.png'
import CommonCardPromise from './commonCardPromise';
import WhyChooseUs from './whyuChooseus';
import Footer from './footer';
import Cook1 from '../assets/cook-1.png';
import Cook3 from '../assets/Cook-3.png';
import Cook4 from '../assets/cook-4.png';
import Cook5 from '../assets/Cook-5.png';
import Header from './header'
const CookComponent = () => {
    const data = {
        centerImage: "../assets/hero-1 (1).png",
        items: [
            {
                icon: Cook1,
                title: "Vegetarian & Non-Vegetarian Cooks",
                description: "Versatile cooks skilled in preparing both vegetarian and non-vegetarian dishes, ensuring every family member's dietary preferences are perfectly catered to in your home kitchen."
            },
            {
                icon: Cook3,
                title: "Brahmin Cooks",
                description: "Traditional cooks who follow strict purity standards and religious dietary practices, specializing in authentic vegetarian preparations with complete adherence to Brahmin cooking traditions."
            },
            {
                icon: Cook4,
                title: "North Indian Cuisine Specialists",
                description: "Expert cooks specializing in rich North Indian cuisines including Punjabi, Rajasthani, and Delhi-style dishes, bringing authentic regional flavors to your family table."
            },
            {
                icon: Cook5,
                title: "Stay-In & Non-Stay Options",
                description: "Choose between live-in cooks for round-the-clock meal preparation or daily cooks who work scheduled hours."
            }
        ]
    };
    const items = [
        "Cooks Who Maintain Exceptional Cleanliness Standards",
        "Complete Menu Planning and Grocery Management",
        "Flexible Stay-in and Non-Stay Options",
        "Specialized Expertise for Every Healthcare Need",
        "Personal Guidance Throughout Your Healthcare Journey",
    ];
    return (
        <>
            <Header />
            <div className=''>
                
                <Navbar />
                <CommonServiceHero title="Hire skilled home cooks who bring authentic flavors to your kitchen." description={`Flexible stay-in and non-stay arrangements.
Specialized expertise in veg, non-veg & regional cuisines.
Experience traditional and contemporary cooking by verified professionals.`}
                    image={Cook} />
                <CookingTypesSection centerImage={hero1}
                    items={data.items} />
                <Banner imageSrc={Banner1} description="For every kitchen and every dietary requirement, we take a thoughtful, personal approach to connect you with a cook who truly understands your family's taste and traditions. Your preferences, our commitment, delivered with freshness, authenticity, and dependability." tag1="Your culinary needs, our heartfelt solutions. With" tag2=" home-cooking comes home" />
                <CommonCardPromise />
                <WhyChooseUs items={items} />
                <FeedbackCard />
                <Footer />
            </div>


        </>
    )
}

export default CookComponent;
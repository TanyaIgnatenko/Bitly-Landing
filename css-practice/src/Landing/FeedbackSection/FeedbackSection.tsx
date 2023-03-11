import FeedbackCarousel from "./FeedbackCarousel/FeedbackCarousel";

import styles from './FeedbackSection.module.css';

const feedbacks = [
    {
        text: 'Our goal was to implement a system that would not interrupt the gameplay experience when a new update was announced, and we found QR Codes to be the perfect answer.',
        author: {
            name: 'Juan Zacarias',
            role: 'Game Product Manager, Motive Studios EA',
        }
    },
    {
        text: 'Bitly is user-friendly and accessible. It’s the one-stop-shop for all link-associated things.',
        author: {
            name: 'Jashima W.',
            role: 'Founder, Ode Brand & Marketing Consultancy',
        }
    },
    {
        text: 'The more I use Bitly, the more valuable it becomes to me. It cuts my time down because it saves all my information, and it gives me insight into which links are most popular and have the most clicks.',
        author: {
            name: 'Mary H.',
            role: 'YouTube Influencer',
        }
    },
    {
        text: 'We found QR Code Generator an easy platform to use and integrate with our information delivery process. We find the system allows fast editing and design that enables us to deliver updated information quickly. Our online delivery of rich, multimedia content is made easy by our partnership with QR Code Generator, and sets out a new, green way forward in tourism.',
        author: {
            name: 'Frank Willoughby',
            role: 'Owner, Downtown City Maps',
        }
    },
    {
        text: 'Bitly has enabled us to build trust with clients by giving them branded short links that carry the main message of the link and that carries our brand. Bitly also gives us data analytics on who is clicking our links which helps us carry the clients forward in the advertising process.',
        author: {
            name: 'Thankdeka M.',
            role: 'Project Manager',
        }
    },
];
const FeedbackSection = () => {
    return (
        <div className={styles.contentWrapper}>
            <h3 className={styles.title}>What Bitly customers are saying</h3>
            <FeedbackCarousel className={styles.carousel} slides={feedbacks} />
        </div>
    );
};

export default FeedbackSection;
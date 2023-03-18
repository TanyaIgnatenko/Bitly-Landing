import React, {FC, useCallback, useState} from "react";
import cn from 'classnames';

import styles from './FeedbackCarousel.module.css';

type FeedbackCarousel = {
    slides: {
        text: string;
        author: {
            name: string;
            role: string;
        }
    }[];
    className?: string;
}

const FeedbackCarousel: FC<FeedbackCarousel> = ({slides, className}) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const handleNextClick = useCallback(() => {
        setCurrentSlideIndex(i => i === (slides.length - 1) ? 0 : i + 1);
    }, [slides.length]);
    const handlePrevClick = useCallback(() => {
        setCurrentSlideIndex(i => i === 0 ? slides.length - 1 : i - 1);
    }, [slides.length]);

    return (
        <div className={cn(styles.container, className)}>
            <div className={styles.slide}>
                <img
                    src="https://docrdsfx76ssb.cloudfront.net/static/1678306332/pages/wp-content/uploads/2021/11/Quote.svg"
                    className={styles.citationIcon}
                    width="80"
                    height="80"
                    alt=""
                />
                <img
                    src="https://docrdsfx76ssb.cloudfront.net/static/1678306332/pages/wp-content/uploads/2021/11/stars-quote-widget.png"
                    className={styles.scoreImage}
                    width="110"
                    height="24"
                    alt="Review score: 5 stars"
                />
                <p className={styles.text}>{slides[currentSlideIndex].text}</p>
                <p className={styles.author}>{slides[currentSlideIndex].author.name} – {slides[currentSlideIndex].author.role}</p>
            </div>
            <div className={styles.navigation}>
                <button className={styles.prevButton} onClick={handlePrevClick} aria-label="Previous feedback" />
                {slides.map((s, i) => (
                    <div
                        key={i}
                        className={cn(styles.circle, {
                            [styles.activeCircle]: i === currentSlideIndex,
                        })}
                    />
                ))}
                <button className={styles.nextButton} onClick={handleNextClick} aria-label="Next feedback"/>
            </div>
        </div>
    );
};

export default FeedbackCarousel;
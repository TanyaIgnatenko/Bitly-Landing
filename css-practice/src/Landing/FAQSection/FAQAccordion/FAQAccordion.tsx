import {useCallback, useState } from 'react';
import cn from 'classnames';

import styles from './FAQAccordion.module.css';

const items = [
    {
        question: 'What is a URL shortener?',
        answerParagraphs: [
            'A URL shortener, also known as a link shortener, seems like a simple tool, but it is a service that can have a dramatic impact on your marketing efforts.',
            'Link shorteners work by transforming any long URL into a shorter, more readable link. When a user clicks the shortened version, they’re automatically forwarded to the destination URL.',
            'Think of a short URL as a more descriptive and memorable nickname for your long webpage address. You can, for example, use a short URL like bit.ly/CelebrateBitly so people will have a good idea about where your link will lead before they click it.',
            'If you’re contributing content to the online world, you need a URL shortener.',
            'Make your URLs stand out with our easy to use free link shortener above.',
        ],
        answerActionLink: null,
        answerActionLinkLabel: null,
    },
    {
        question: 'Benefits of a short URL',
        answerParagraphs: [
            'How many people can even remember a long web address, especially if it has tons of characters and symbols? A short URL can make your link more memorable. Not only does it allow people to easily recall and share your link with others, it can also dramatically improve traffic to your content.',
            'On a more practical side, a short URL is also easier to incorporate into your collateral – whether you’re looking to engage with your customers offline or online.',
            'Bitly is the best URL shortener for everyone, from influencers to small brands to large enterprises, who are looking for a simple way to create, track and manage their links.',
        ],
        answerActionLink: 'https://bitly.com/pages/pricing',
        answerActionLinkLabel: 'Find a plan that works for you',
    },
    {
        question: 'What is a custom URL shortener?',
        answerParagraphs: [
            'A custom URL shortener, sometimes referred to as a branded URL shortener, lets you brand your links.',
            'For example, instead of bit.ly/2m75BWD, you could use a custom short URL like yourbrnd.co/2m75BWD.',
            'There are several benefits of branding your short links. Branded links build trust between your audience and your business, drive more clicks, give your audience a preview of where they are being taken and increase brand awareness.',
            'A link shortening service that includes custom short URLs is vital to improving audience engagement with your communications. A short URL is good, but a custom URL works every time.',
        ],
        answerActionLink: null,
        answerActionLinkLabel: null,
    },
    {
        question: 'What is a QR Code?',
        answerParagraphs: [
            'Quick response or QR, is a type of barcode that can store a multitude of information. The obvious difference between a QR Code and Barcode is its appearance. A QR Code is always in the shape of a square and contains smaller, even blocks similar to Tetris. A Barcode, on the other hand, has vertical bars in different thicknesses and is often accompanied by a serial number.',
        ],
        answerActionLink: null,
        answerActionLinkLabel: null,
    },
    {
        question: 'What can a QR Code do?',
        answerParagraphs: [
            'Because of its versatility, a QR Code can be programmed to do a multitude of things. It can be split into two formats: Dynamic and Static. A Dynamic QR Code is useful for businesses or nonprofits in their marketing strategy because of its advantages. Though it needs a subscription to work, it is a small price to pay compared to the benefits it offers. Dynamic QR Code solutions are editable, which means if you made a mistake and only noticed it after the QR Codes are printed, you can easily log in to the dashboard and fix them without changing the appearance of the already printed Codes.',
        ],
        answerActionLink: null,
        answerActionLinkLabel: null,
    },
    {
        question: 'What is a Link-in-bio?',
        answerParagraphs: [
            'The term “Link-in-bio” refers to the clickable URL that you can add to your profile section for social media. Most social media platforms give you the option to add a link in your bio to take followers to your website, product page, content or some other important page.',
        ],
        answerActionLink: null,
        answerActionLinkLabel: null,
    },
    {
        question: 'Why choose Bitly?',
        answerParagraphs: [
            'Whether you’re sharing one link or scan or millions, our platform was built to help you make every point of connection between your content and your audience ignite action.',
            'It’s why the most recognized brands in the world love our platform.',
        ],
        answerActionLink: 'https://bitly.com/pages/pricing',
        answerActionLinkLabel: 'Get started today',
    },
];

const FAQAccordion = () => {
    const [openedItemIndex, setOpenedItemIndex] = useState<number | null>(null);
    const handleItemClick = useCallback((e: React.MouseEvent) => {
        const itemIndex = +e.currentTarget.dataset.index;
        setOpenedItemIndex(i => itemIndex === i ? null : itemIndex);
    }, []);

    return (
        <div className={styles.container}>
            {items.map((i, index) => (
                    <div className={styles.itemContainer}>
                        <button
                            data-index={index}
                            className={cn(styles.itemHeader, {
                                [styles.opened]: index === openedItemIndex,
                                [styles.notFirst]: index !== 0,
                            })}
                            onClick={handleItemClick}
                        >
                            <p className={styles.itemTitle}>
                                {i.question}
                            </p>
                        </button>
                        <div className={cn(styles.itemContent, {[styles.opened]: index === openedItemIndex})}>
                            {i.answerParagraphs.map(p => (
                                <p className={styles.answerParagraph}>
                                    {p}
                                </p>
                            ))}
                            {i.answerActionLink && (
                                <p className={styles.answerParagraph}>
                                    <a href={i.answerActionLink} className={styles.answerActionLink}>
                                        {i.answerActionLinkLabel}
                                    </a>
                                </p>
                            )}
                        </div>
                </div>
            ))}
        </div>
    )
};

export default FAQAccordion;
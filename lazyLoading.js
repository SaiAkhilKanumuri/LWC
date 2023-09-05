// lazyLoading.js
import { LightningElement, track } from 'lwc';

export default class LazyLoading extends LightningElement {
    @track isEmoji1Visible = false;
    @track isEmoji2Visible = false;

    connectedCallback() {
        // Delay the start of observing the images by 2 seconds (adjust as needed)
        setTimeout(() => {
            // Create Intersection Observer for emoji1.png
            const emoji1Observer = new IntersectionObserver(this.handleEmoji1Intersection.bind(this), {
                root: null,
                rootMargin: '0px',
                threshold: 0.1, // Adjust as needed
            });

            // Create Intersection Observer for emoji2.png
            const emoji2Observer = new IntersectionObserver(this.handleEmoji2Intersection.bind(this), {
                root: null,
                rootMargin: '0px',
                threshold: 0.1, // Adjust as needed
            });

            // Attach the Intersection Observers to the image elements
            emoji1Observer.observe(this.template.querySelector('.emoji1-img'));
            
            // Delay the observation of emoji2.png by 2 seconds
            setTimeout(() => {
                emoji2Observer.observe(this.template.querySelector('.emoji2-img'));
            }, 2000); // Adjust the delay time as needed (in milliseconds)
        }, 2000); // Adjust the delay time as needed (in milliseconds)
    }

    // Define the image URLs
    get emoji1Url() {
        return '/resource/lazyEmojiAssets/emoji1.png'; // Replace with your static resource path
    }

    get emoji2Url() {
        return '/resource/lazyEmojiAssets/emoji2.png'; // Replace with your static resource path
    }

    handleEmoji1Intersection(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                this.isEmoji1Visible = true;
            }
        });
    }

    handleEmoji2Intersection(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                this.isEmoji2Visible = true;
            }
        });
    }
}
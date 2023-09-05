import { LightningElement, track } from 'lwc';

export default class CacheData extends LightningElement {
    @track userName = '';
    @track userEmail = '';
    @track searchName = '';
    userCache = new Map();

    handleNameChange(event) {
        this.userName = event.target.value;
    }

    handleEmailChange(event) {
        this.userEmail = event.target.value;
    }

    addToCache() {
        if (this.userName && this.userEmail) {
            this.userCache.set(this.userName, this.userEmail);
            this.userName = '';
            this.userEmail = '';
        }
    }

    handleSearchChange(event) {
        this.searchName = event.target.value;
    }

    searchInCache() {
        if (this.searchName) {
            const email = this.userCache.get(this.searchName);
            if (email) {
                alert(`Email address for ${this.searchName}: ${email}`);
            } else {
                alert(`${this.searchName} not found in the cache.`);
            }
        }
    }
}

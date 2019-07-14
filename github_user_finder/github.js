class GitHub {
    constructor() {
        this.clientId = 'cb77a52ed2a57e7732fb';
        this.clientSecret = 'e30f6d2f83c134cb94ad25b2bf1d1d21e3c6fc50';
        this.reposCount = 5;
        this.reposSort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        };
    }
}
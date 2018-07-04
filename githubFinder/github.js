class Github {
    constructor() {
        this.client_id = '584ce129920ff7d5cb06';
        this.client_secret = '193561024edcfaa067b87dc2008502e18131e639';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';

    }

    async getUser(user) {
        const profileUrl = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        const profileResponse =   await fetch(profileUrl);
        const profile = await profileResponse.json();
        const repoUrl = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
        const repoResponse =   await fetch(repoUrl);
        const repos = await repoResponse.json()
        

        return {
            profile,
            repos
        };

    }
}
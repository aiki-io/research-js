class Ui {
    constructor() {
        this.$profile = $('#profile');   
    }
    showUser(user) {
        const html = `
        <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">
                    View Profile
                </a>

                <div class="col-md-9">
                    <span class="babdge badge-primary">
                        Public repos: ${user.public_repos}
                    </span>
                    <span class="babdge badge-secondary">
                        Public gists: ${user.public_gists}
                    </span>
                    <span class="babdge badge-success">
                        Followers: ${user.followers}
                    </span>
                    <span class="babdge badge-info">
                        Following: ${user.following}
                    </span>
                    <br>
                    <br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>

                </div>
            </div>
        </div>
    </div>
        `;
        this.$profile.html(html);   
    }

    showRepos(repos) {
        $.each(repos, (ndx, repo) => {
            const html = `
                <div class = "card card-body mb-3">
                  <div class = "row">
                    <div class="col-md-6">
                        <a href = "${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="babdge badge-primary">
                            Stars: ${repo.stargazers_count}
                        </span>
                        <span class="babdge badge-secondary">
                            Watchers: ${repo.watchers_count}
                        </span>
                        <span class="babdge badge-success">
                            Forks: ${repo.forks_count}
                        </span>
                    </div>
                  </div>
                </div>
            `
            const div = $(html);
            this.$profile.append(div);
        });
    }

    clearProfile() {
        this.$profile.empty();
    }

    showAlert(msg, cls) {
        const div = $('<div/>')
        div.addClass(cls);
        div.text(msg);
        this.$profile.append(div);
        setTimeout(() => {
            div.remove();
        }, 3000)
    }
}
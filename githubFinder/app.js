$(() => {
    const github = new Github();
    const ui = new Ui();
    $searchUser = $('#search-user')
    $searchUser.keyup((e) => {
        const userText = e.target.value;
        if (userText != '') {
            
           github.getUser(userText)
                .then((data) => {
                    if (data.profile.login !== userText) {
                        ui.clearProfile();
                        ui.showAlert('User not found', 'alert alert-danger');
                    } else {
                        ui.showUser(data.profile);
                        ui.showRepos(data.repos);
                    }
                });
        } else {
            ui.clearProfile();

        }
    });
});
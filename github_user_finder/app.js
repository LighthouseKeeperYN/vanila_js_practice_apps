const gitHub = new GitHub;
const ui = new Ui;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', e => {
    const userText = e.target.value;

    if (userText !== '') {
        gitHub.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.clearProfile();
                    ui.showAlert('User not found', 'alert alert-danger')
                } else {
                    ui.clearProfile();
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    } else {
        ui.clearProfile();
    }

});
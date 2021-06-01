var getUserRepos = function() {
        //fetch("https://api.github.com/users/octocat/repos"); //made an http request
        fetch("https://api.github.com/users/octocat/repos").then(function(response) {
            console.log("inside", response);
        });

        console.log("outside")
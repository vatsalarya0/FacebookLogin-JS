// Initialize the Facebook SDK
window.fbAsyncInit = function() {
    FB.init({
        appId      : '1336413153573222',
        cookie     : true,
        xfbml      : true,
        version    : 'v11.0'
    });
      
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            // User is logged in, redirect to your app's home page
            window.location.href = 'http://google.com/';
        }
    });
};

// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Handle login button click event
document.getElementById('fb-login-btn').addEventListener('click', function() {
    // Call the Facebook login function
    FB.login(function(response) {
        if (response.authResponse) {
            // User is logged in, redirect to your app's home page
            window.location.href = 'http://google.com/';
        }
    }, {scope: 'ads_management'});
});
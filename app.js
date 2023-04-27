<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Facebook Login Example</title>
  <style>
    /* Add some basic styles for the login button */
    body{
        display: flex;
        min-height: 100vh;
        align-items: center;
        justify-content: center;
    }
    button {
      background-color: #3b5998;
      color: white;
      border: none;
      padding: 12px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <!-- Add a button for Facebook login -->
  <button onclick="login()">Log in with Facebook</button>

  <!-- Load the Facebook SDK asynchronously -->
  <script async defer src="https://connect.facebook.net/en_US/sdk.js"></script>

  <script>
  function login() {
    FB.login(function(response) {
      if (response.authResponse) {
        console.log('You are now logged in with Facebook.');
        // You can now access the user's Facebook data
        // using the response.authResponse.accessToken
      } else {
        console.log('Facebook login failed.');
      }
    }, {scope: 'public_profile,email'});
  }

  // Initialize the Facebook SDK
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1336413153573222',
      cookie     : true,
      xfbml      : true,
      version    : 'v11.0'
    });
  }
</script>

</body>
</html>

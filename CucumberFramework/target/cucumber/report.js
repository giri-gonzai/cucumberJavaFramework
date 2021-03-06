$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("StackOverFlow_Login.feature");
formatter.feature({
  "line": 1,
  "name": "Registered user is able to login using correct login credentials",
  "description": "",
  "id": "registered-user-is-able-to-login-using-correct-login-credentials",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6572959527,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login into StackOverFlow website",
  "description": "",
  "id": "registered-user-is-able-to-login-using-correct-login-credentials;login-into-stackoverflow-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on the StackOverFlow website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Clicks on the Login Link and is navigated to login page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters valid username",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters valid password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User is logged in the site",
  "keyword": "Then "
});
formatter.match({
  "location": "StackOverFlow_Login_Steps.user_is_on_the_StackOverFlow_website()"
});
formatter.result({
  "duration": 3808653500,
  "status": "passed"
});
formatter.match({
  "location": "StackOverFlow_Login_Steps.clicks_on_the_Login_Link_and_is_navigated_to_login_page()"
});
formatter.result({
  "duration": 5921557569,
  "status": "passed"
});
formatter.match({
  "location": "StackOverFlow_Login_Steps.user_enters_valid_username()"
});
formatter.result({
  "duration": 329890482,
  "status": "passed"
});
formatter.match({
  "location": "StackOverFlow_Login_Steps.user_enters_valid_password()"
});
formatter.result({
  "duration": 274230117,
  "status": "passed"
});
formatter.match({
  "location": "StackOverFlow_Login_Steps.user_clicks_on_login()"
});
formatter.result({
  "duration": 5182914780,
  "status": "passed"
});
formatter.match({
  "location": "StackOverFlow_Login_Steps.user_is_logged_in_the_site()"
});
formatter.result({
  "duration": 104746190,
  "error_message": "java.lang.AssertionError: expected:\u003cfalse\u003e but was:\u003ctrue\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat CucumberFramework.steps.StackOverFlow_Login_Steps.user_is_logged_in_the_site(StackOverFlow_Login_Steps.java:65)\r\n\tat ✽.Then User is logged in the site(StackOverFlow_Login.feature:10)\r\n",
  "status": "failed"
});
formatter.uri("StackOverFlow_Login2.feature");
formatter.feature({
  "line": 1,
  "name": "Registered user is able to login using correct login credentials",
  "description": "",
  "id": "registered-user-is-able-to-login-using-correct-login-credentials",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12778108223,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login into StackOverFlow website",
  "description": "",
  "id": "registered-user-is-able-to-login-using-correct-login-credentials;login-into-stackoverflow-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on the StackOverFlow website2",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Clicks on the Login Link and is navigated to login page2",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters valid username2",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters valid password2",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on login2",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User is logged in the site2",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 36
    }
  ],
  "location": "StackOverFlow_Login_Steps.user_is_on_the_StackOverFlow_website(int)"
});
formatter.result({
  "duration": 4858246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 55
    }
  ],
  "location": "StackOverFlow_Login_Steps.clicks_on_the_Login_Link_and_is_navigated_to_login_page(int)"
});
formatter.result({
  "duration": 281773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "StackOverFlow_Login_Steps.user_enters_valid_username(int)"
});
formatter.result({
  "duration": 260313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "StackOverFlow_Login_Steps.user_enters_valid_password(int)"
});
formatter.result({
  "duration": 306497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "StackOverFlow_Login_Steps.user_clicks_on_login(int)"
});
formatter.result({
  "duration": 251916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 26
    }
  ],
  "location": "StackOverFlow_Login_Steps.user_is_logged_in_the_site(int)"
});
formatter.result({
  "duration": 264512,
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/AL Moin Webtech/git/qaauto/App360v43/src/test/resources/Createapp.feature");
formatter.feature({
  "line": 1,
  "name": "signup Test On Web Application",
  "description": "",
  "id": "signup-test-on-web-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login into the application.",
  "description": "",
  "id": "signup-test-on-web-application;login-into-the-application.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login_the_application"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "navigates to website url.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter user name as \"\u003cUsername or Email\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter user password as \"\u003cpassword\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on sign in button.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "After login see the logout button.",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click Settings from the top nav on app site after login.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click Users button.",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;login-into-the-application.;",
  "rows": [
    {
      "cells": [
        "Username or Email",
        "password"
      ],
      "line": 13,
      "id": "signup-test-on-web-application;login-into-the-application.;;1"
    },
    {
      "cells": [
        "shadab",
        "YY0807pp!"
      ],
      "line": 14,
      "id": "signup-test-on-web-application;login-into-the-application.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Login into the application.",
  "description": "",
  "id": "signup-test-on-web-application;login-into-the-application.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login_the_application"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "navigates to website url.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter user name as \"shadab\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter user password as \"YY0807pp!\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on sign in button.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "After login see the logout button.",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click Settings from the top nav on app site after login.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click Users button.",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_step.navigates_to_website_url()"
});
formatter.result({
  "duration": 8806770495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab",
      "offset": 20
    }
  ],
  "location": "Login_step.user_name(String)"
});
formatter.result({
  "duration": 182460606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "YY0807pp!",
      "offset": 24
    }
  ],
  "location": "Login_step.enter_password(String)"
});
formatter.result({
  "duration": 234733097,
  "status": "passed"
});
formatter.match({
  "location": "Login_step.click_on_sign_in_button()"
});
formatter.result({
  "duration": 8685781943,
  "status": "passed"
});
formatter.match({
  "location": "App360_create_user.see_the_logout_button()"
});
formatter.result({
  "duration": 2436475499,
  "status": "passed"
});
formatter.match({
  "location": "App360_create_user.click_Settings_from_the_top_nav_on_App_site_after_login()"
});
formatter.result({
  "duration": 300342489,
  "status": "passed"
});
formatter.match({
  "location": "App360_create_user.click_Users_button()"
});
formatter.result({
  "duration": 1588676079,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 16,
      "value": "#@Verfiy_the_AllField_validation"
    },
    {
      "line": 17,
      "value": "#Scenario Outline:"
    },
    {
      "line": 18,
      "value": "#Then Click Settings from the top nav on app site after login."
    },
    {
      "line": 19,
      "value": "#Then Click Users button."
    },
    {
      "line": 20,
      "value": "#Then Click the New User button."
    },
    {
      "line": 21,
      "value": "#Then Click on role drop down option and select consultant"
    },
    {
      "line": 22,
      "value": "#Then Click on Status filed and select Active"
    },
    {
      "line": 23,
      "value": "#Then Enter login \"\u003cLogin Name\u003e\"."
    },
    {
      "line": 24,
      "value": "#Then Enter first name as \"\u003cFirst Name\u003e\"."
    },
    {
      "line": 25,
      "value": "#Then Enter last name as \"\u003cLast Name\u003e\"."
    },
    {
      "line": 26,
      "value": "#Then Enter email as \"\u003cEmail\u003e\"."
    },
    {
      "line": 27,
      "value": "#Then Enter password as \"\u003cPassword\u003e\"."
    },
    {
      "line": 28,
      "value": "#Then Enter confirm password as \"\u003cConfirm Password\u003e\"."
    },
    {
      "line": 29,
      "value": "#Then Click on confirm button."
    },
    {
      "line": 30,
      "value": "#Then Verify \"\u003cLogin NameValTest\u003e\" for the validation message of Login name."
    },
    {
      "line": 31,
      "value": "#Then Verify \"\u003cEmailValTest\u003e\" for the validation message of the email address field."
    },
    {
      "line": 32,
      "value": "#Then Verify  \"\u003cPasswordValTest\u003e\" for the validation message of the password field."
    },
    {
      "line": 33,
      "value": "#Then Verify  \"\u003cConfirm PasswordValTest\u003e\" for the validation message of confirm password field."
    },
    {
      "line": 34,
      "value": "#Examples:"
    },
    {
      "line": 35,
      "value": "#| Login Name | First Name | Last Name | Email              | Password   | Confirm Password | Login NameValTest       | EmailValTest                        | PasswordValTest                                                                                                                           | Confirm PasswordValTest                                 |"
    },
    {
      "line": 36,
      "value": "#|            | test       | test      | shadab@gmail.com   | Qwe12345   | Qwe12345         | This value is required. |                                     |                                                                                                                                           |                                                         |"
    },
    {
      "line": 37,
      "value": "#| shadab     | test       | test      | shadab@@gmail.com  | Qwe12345   | Qwe12345         |                         | This value should be a valid email. |                                                                                                                                           |                                                         |"
    },
    {
      "line": 38,
      "value": "#| shadab     | test       | test      | shadab@gmail.com   | qwe12345   |                  |                         |                                     | Please enter a password between 8 and 30 characters, including one uppercase, one lowercase and one digit, and do not include login name. |                                                         |"
    },
    {
      "line": 39,
      "value": "#| shadab     | test       | test      | shadab98@gmail.com | Qatest.123 | Qatest.1234      |                         |                                     |                                                                                                                                           | The password and password confirmation are not the same |"
    }
  ],
  "line": 41,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@create_new_user"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Click the New User button.",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click on role drop down option and select consultant",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on Status filed and select Active",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Enter login name as \"\u003cLogin Name\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Enter first name as \"\u003cFirst Name\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Enter last name as \"\u003cLast Name\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Enter Enter email test \"\u003cEmail\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Enter password as \"\u003cPassword\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Enter confirm password as \"\u003cConfirm Password\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on confirm button.",
  "keyword": "Then "
});
formatter.examples({
  "line": 53,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;;",
  "rows": [
    {
      "cells": [
        "Login Name",
        "First Name",
        "Last Name",
        "Email",
        "Password",
        "Confirm Password"
      ],
      "line": 54,
      "id": "signup-test-on-web-application;;;1"
    },
    {
      "cells": [
        "shadab",
        "test",
        "test",
        "shadab@gmail.com",
        "Qatest.123",
        "Qatest.123"
      ],
      "line": 55,
      "id": "signup-test-on-web-application;;;2"
    },
    {
      "cells": [
        "shadab",
        "test",
        "test",
        "shadab@gmail.com",
        "Qatest.123",
        "Qatest.123"
      ],
      "line": 56,
      "id": "signup-test-on-web-application;;;3"
    },
    {
      "cells": [
        "shadab",
        "test",
        "test",
        "shadab@gmail.com",
        "Qatest.123",
        "Qatest.123"
      ],
      "line": 57,
      "id": "signup-test-on-web-application;;;4"
    },
    {
      "cells": [
        "shadab",
        "test",
        "test",
        "shadab@gmail.com",
        "Qatest.123",
        "Qatest.123"
      ],
      "line": 58,
      "id": "signup-test-on-web-application;;;5"
    },
    {
      "cells": [
        "shadab",
        "test",
        "test",
        "shadab@gmail.com",
        "Qatest.123",
        "Qatest.123"
      ],
      "line": 59,
      "id": "signup-test-on-web-application;;;6"
    },
    {
      "cells": [
        "shadab",
        "test",
        "test",
        "shadab@gmail.com",
        "Qatest.123",
        "Qatest.123"
      ],
      "line": 60,
      "id": "signup-test-on-web-application;;;7"
    },
    {
      "cells": [
        "shadab",
        "test",
        "test",
        "shadab@gmail.com",
        "Qatest.123",
        "Qatest.123"
      ],
      "line": 61,
      "id": "signup-test-on-web-application;;;8"
    },
    {
      "cells": [
        "shadab",
        "test",
        "test",
        "shadab@gmail.com",
        "Qatest.123",
        "Qatest.123"
      ],
      "line": 62,
      "id": "signup-test-on-web-application;;;9"
    },
    {
      "cells": [
        "shadab",
        "test",
        "test",
        "shadab@gmail.com",
        "Qatest.123",
        "Qatest.123"
      ],
      "line": 63,
      "id": "signup-test-on-web-application;;;10"
    },
    {
      "cells": [
        "shadab",
        "test",
        "test",
        "shadab@gmail.com",
        "Qatest.123",
        "Qatest.123"
      ],
      "line": 64,
      "id": "signup-test-on-web-application;;;11"
    },
    {
      "cells": [
        "shadab",
        "test",
        "test",
        "shadab@gmail.com",
        "Qatest.123",
        "Qatest.123"
      ],
      "line": 65,
      "id": "signup-test-on-web-application;;;12"
    },
    {
      "cells": [
        "shadab",
        "test",
        "test",
        "shadab@gmail.com",
        "Qatest.123",
        "Qatest.123"
      ],
      "line": 66,
      "id": "signup-test-on-web-application;;;13"
    },
    {
      "cells": [
        "shadab",
        "test",
        "test",
        "shadab@gmail.com",
        "Qatest.123",
        "Qatest.123"
      ],
      "line": 67,
      "id": "signup-test-on-web-application;;;14"
    },
    {
      "cells": [
        "shadab",
        "test",
        "test",
        "shadab@gmail.com",
        "Qatest.123",
        "Qatest.123"
      ],
      "line": 68,
      "id": "signup-test-on-web-application;;;15"
    },
    {
      "cells": [
        "shadab",
        "test",
        "test",
        "shadab@gmail.com",
        "Qatest.123",
        "Qatest.123"
      ],
      "line": 69,
      "id": "signup-test-on-web-application;;;16"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 55,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@create_new_user"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Click the New User button.",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click on role drop down option and select consultant",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on Status filed and select Active",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Enter login name as \"shadab\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Enter first name as \"test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Enter last name as \"test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Enter Enter email test \"shadab@gmail.com\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Enter password as \"Qatest.123\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Enter confirm password as \"Qatest.123\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on confirm button.",
  "keyword": "Then "
});
formatter.match({
  "location": "App360_create_user.click_the_New_User_button()"
});
formatter.result({
  "duration": 1961233299,
  "status": "passed"
});
formatter.match({
  "location": "App360_create_user.click_on_role_drop_down_option_and_select_consultant()"
});
formatter.result({
  "duration": 1810953166,
  "status": "passed"
});
formatter.match({
  "location": "App360_create_user.click_on_Status_filed_and_select_Active()"
});
formatter.result({
  "duration": 333260296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_login_name(String)"
});
formatter.result({
  "duration": 437560389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_first_name(String)"
});
formatter.result({
  "duration": 372656775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 20
    }
  ],
  "location": "App360_create_user.enter_last_name(String)"
});
formatter.result({
  "duration": 355360760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab@gmail.com",
      "offset": 24
    }
  ],
  "location": "App360_create_user.enter_Enter_email_test(String)"
});
formatter.result({
  "duration": 1540158702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 19
    }
  ],
  "location": "App360_create_user.enter_user_password(String)"
});
formatter.result({
  "duration": 423387932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 27
    }
  ],
  "location": "App360_create_user.enter_user_confirm_password(String)"
});
formatter.result({
  "duration": 400867023,
  "status": "passed"
});
formatter.match({
  "location": "App360_create_user.click_on_confirm_button()"
});
formatter.result({
  "duration": 4230809538,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@create_new_user"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Click the New User button.",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click on role drop down option and select consultant",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on Status filed and select Active",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Enter login name as \"shadab\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Enter first name as \"test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Enter last name as \"test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Enter Enter email test \"shadab@gmail.com\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Enter password as \"Qatest.123\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Enter confirm password as \"Qatest.123\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on confirm button.",
  "keyword": "Then "
});
formatter.match({
  "location": "App360_create_user.click_the_New_User_button()"
});
formatter.result({
  "duration": 1302843381,
  "status": "passed"
});
formatter.match({
  "location": "App360_create_user.click_on_role_drop_down_option_and_select_consultant()"
});
formatter.result({
  "duration": 1787598033,
  "status": "passed"
});
formatter.match({
  "location": "App360_create_user.click_on_Status_filed_and_select_Active()"
});
formatter.result({
  "duration": 287261589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_login_name(String)"
});
formatter.result({
  "duration": 377575891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_first_name(String)"
});
formatter.result({
  "duration": 306475384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 20
    }
  ],
  "location": "App360_create_user.enter_last_name(String)"
});
formatter.result({
  "duration": 325473178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab@gmail.com",
      "offset": 24
    }
  ],
  "location": "App360_create_user.enter_Enter_email_test(String)"
});
formatter.result({
  "duration": 1516275125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 19
    }
  ],
  "location": "App360_create_user.enter_user_password(String)"
});
formatter.result({
  "duration": 419448373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 27
    }
  ],
  "location": "App360_create_user.enter_user_confirm_password(String)"
});
formatter.result({
  "duration": 423175487,
  "status": "passed"
});
formatter.match({
  "location": "App360_create_user.click_on_confirm_button()"
});
formatter.result({
  "duration": 4239869991,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@create_new_user"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Click the New User button.",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click on role drop down option and select consultant",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on Status filed and select Active",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Enter login name as \"shadab\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Enter first name as \"test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Enter last name as \"test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Enter Enter email test \"shadab@gmail.com\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Enter password as \"Qatest.123\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Enter confirm password as \"Qatest.123\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on confirm button.",
  "keyword": "Then "
});
formatter.match({
  "location": "App360_create_user.click_the_New_User_button()"
});
formatter.result({
  "duration": 1341519859,
  "status": "passed"
});
formatter.match({
  "location": "App360_create_user.click_on_role_drop_down_option_and_select_consultant()"
});
formatter.result({
  "duration": 1798363376,
  "status": "passed"
});
formatter.match({
  "location": "App360_create_user.click_on_Status_filed_and_select_Active()"
});
formatter.result({
  "duration": 259515342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_login_name(String)"
});
formatter.result({
  "duration": 371046996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_first_name(String)"
});
formatter.result({
  "duration": 309860720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 20
    }
  ],
  "location": "App360_create_user.enter_last_name(String)"
});
formatter.result({
  "duration": 320986064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab@gmail.com",
      "offset": 24
    }
  ],
  "location": "App360_create_user.enter_Enter_email_test(String)"
});
formatter.result({
  "duration": 1439178168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 19
    }
  ],
  "location": "App360_create_user.enter_user_password(String)"
});
formatter.result({
  "duration": 353580758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 27
    }
  ],
  "location": "App360_create_user.enter_user_confirm_password(String)"
});
formatter.result({
  "duration": 396779464,
  "status": "passed"
});
formatter.match({
  "location": "App360_create_user.click_on_confirm_button()"
});
formatter.result({
  "duration": 4194764173,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@create_new_user"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Click the New User button.",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click on role drop down option and select consultant",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on Status filed and select Active",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Enter login name as \"shadab\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Enter first name as \"test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Enter last name as \"test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Enter Enter email test \"shadab@gmail.com\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Enter password as \"Qatest.123\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Enter confirm password as \"Qatest.123\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on confirm button.",
  "keyword": "Then "
});
formatter.match({
  "location": "App360_create_user.click_the_New_User_button()"
});
formatter.result({
  "duration": 1777111801,
  "status": "passed"
});
formatter.match({
  "location": "App360_create_user.click_on_role_drop_down_option_and_select_consultant()"
});
formatter.result({
  "duration": 1768018016,
  "status": "passed"
});
formatter.match({
  "location": "App360_create_user.click_on_Status_filed_and_select_Active()"
});
formatter.result({
  "duration": 261347788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_login_name(String)"
});
formatter.result({
  "duration": 375284333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_first_name(String)"
});
formatter.result({
  "duration": 337191410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 20
    }
  ],
  "location": "App360_create_user.enter_last_name(String)"
});
formatter.result({
  "duration": 294785595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab@gmail.com",
      "offset": 24
    }
  ],
  "location": "App360_create_user.enter_Enter_email_test(String)"
});
formatter.result({
  "duration": 1453439070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 19
    }
  ],
  "location": "App360_create_user.enter_user_password(String)"
});
formatter.result({
  "duration": 347758531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 27
    }
  ],
  "location": "App360_create_user.enter_user_confirm_password(String)"
});
formatter.result({
  "duration": 373747443,
  "status": "passed"
});
formatter.match({
  "location": "App360_create_user.click_on_confirm_button()"
});
formatter.result({
  "duration": 4207719296,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@create_new_user"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Click the New User button.",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click on role drop down option and select consultant",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on Status filed and select Active",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Enter login name as \"shadab\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Enter first name as \"test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Enter last name as \"test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Enter Enter email test \"shadab@gmail.com\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Enter password as \"Qatest.123\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Enter confirm password as \"Qatest.123\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on confirm button.",
  "keyword": "Then "
});
formatter.match({
  "location": "App360_create_user.click_the_New_User_button()"
});
formatter.result({
  "duration": 20797204709,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20.78 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027169.254.26.86\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\ALMOIN~1\\AppData\\Local\\Temp\\scoped_dir13536_6794}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d68.0.3440.106, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 0a6862426dc8fe27fe5d50ab195dba80\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat TestRunner.loginSteps.App360_create_user.click_the_New_User_button(App360_create_user.java:71)\r\n\tat ✽.Then Click the New User button.(C:/Users/AL Moin Webtech/git/qaauto/App360v43/src/test/resources/Createapp.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "App360_create_user.click_on_role_drop_down_option_and_select_consultant()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_Status_filed_and_select_Active()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_login_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_first_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 20
    }
  ],
  "location": "App360_create_user.enter_last_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab@gmail.com",
      "offset": 24
    }
  ],
  "location": "App360_create_user.enter_Enter_email_test(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 19
    }
  ],
  "location": "App360_create_user.enter_user_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 27
    }
  ],
  "location": "App360_create_user.enter_user_confirm_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_confirm_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 60,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@create_new_user"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Click the New User button.",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click on role drop down option and select consultant",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on Status filed and select Active",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Enter login name as \"shadab\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Enter first name as \"test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Enter last name as \"test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Enter Enter email test \"shadab@gmail.com\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Enter password as \"Qatest.123\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Enter confirm password as \"Qatest.123\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on confirm button.",
  "keyword": "Then "
});
formatter.match({
  "location": "App360_create_user.click_the_New_User_button()"
});
formatter.result({
  "duration": 20086101410,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20.09 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027169.254.26.86\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\ALMOIN~1\\AppData\\Local\\Temp\\scoped_dir13536_6794}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d68.0.3440.106, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 0a6862426dc8fe27fe5d50ab195dba80\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat TestRunner.loginSteps.App360_create_user.click_the_New_User_button(App360_create_user.java:71)\r\n\tat ✽.Then Click the New User button.(C:/Users/AL Moin Webtech/git/qaauto/App360v43/src/test/resources/Createapp.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "App360_create_user.click_on_role_drop_down_option_and_select_consultant()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_Status_filed_and_select_Active()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_login_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_first_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 20
    }
  ],
  "location": "App360_create_user.enter_last_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab@gmail.com",
      "offset": 24
    }
  ],
  "location": "App360_create_user.enter_Enter_email_test(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 19
    }
  ],
  "location": "App360_create_user.enter_user_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 27
    }
  ],
  "location": "App360_create_user.enter_user_confirm_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_confirm_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 61,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@create_new_user"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Click the New User button.",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click on role drop down option and select consultant",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on Status filed and select Active",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Enter login name as \"shadab\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Enter first name as \"test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Enter last name as \"test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Enter Enter email test \"shadab@gmail.com\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Enter password as \"Qatest.123\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Enter confirm password as \"Qatest.123\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on confirm button.",
  "keyword": "Then "
});
formatter.match({
  "location": "App360_create_user.click_the_New_User_button()"
});
formatter.result({
  "duration": 20098132087,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20.10 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027169.254.26.86\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\ALMOIN~1\\AppData\\Local\\Temp\\scoped_dir13536_6794}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d68.0.3440.106, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 0a6862426dc8fe27fe5d50ab195dba80\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat TestRunner.loginSteps.App360_create_user.click_the_New_User_button(App360_create_user.java:71)\r\n\tat ✽.Then Click the New User button.(C:/Users/AL Moin Webtech/git/qaauto/App360v43/src/test/resources/Createapp.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "App360_create_user.click_on_role_drop_down_option_and_select_consultant()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_Status_filed_and_select_Active()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_login_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_first_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 20
    }
  ],
  "location": "App360_create_user.enter_last_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab@gmail.com",
      "offset": 24
    }
  ],
  "location": "App360_create_user.enter_Enter_email_test(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 19
    }
  ],
  "location": "App360_create_user.enter_user_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 27
    }
  ],
  "location": "App360_create_user.enter_user_confirm_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_confirm_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 62,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@create_new_user"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Click the New User button.",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click on role drop down option and select consultant",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on Status filed and select Active",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Enter login name as \"shadab\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Enter first name as \"test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Enter last name as \"test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Enter Enter email test \"shadab@gmail.com\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Enter password as \"Qatest.123\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Enter confirm password as \"Qatest.123\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on confirm button.",
  "keyword": "Then "
});
formatter.match({
  "location": "App360_create_user.click_the_New_User_button()"
});
formatter.result({
  "duration": 20086083632,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20.09 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027169.254.26.86\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\ALMOIN~1\\AppData\\Local\\Temp\\scoped_dir13536_6794}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d68.0.3440.106, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 0a6862426dc8fe27fe5d50ab195dba80\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat TestRunner.loginSteps.App360_create_user.click_the_New_User_button(App360_create_user.java:71)\r\n\tat ✽.Then Click the New User button.(C:/Users/AL Moin Webtech/git/qaauto/App360v43/src/test/resources/Createapp.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "App360_create_user.click_on_role_drop_down_option_and_select_consultant()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_Status_filed_and_select_Active()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_login_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_first_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 20
    }
  ],
  "location": "App360_create_user.enter_last_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab@gmail.com",
      "offset": 24
    }
  ],
  "location": "App360_create_user.enter_Enter_email_test(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 19
    }
  ],
  "location": "App360_create_user.enter_user_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 27
    }
  ],
  "location": "App360_create_user.enter_user_confirm_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_confirm_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 63,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@create_new_user"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Click the New User button.",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click on role drop down option and select consultant",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on Status filed and select Active",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Enter login name as \"shadab\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Enter first name as \"test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Enter last name as \"test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Enter Enter email test \"shadab@gmail.com\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Enter password as \"Qatest.123\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Enter confirm password as \"Qatest.123\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on confirm button.",
  "keyword": "Then "
});
formatter.match({
  "location": "App360_create_user.click_the_New_User_button()"
});
formatter.result({
  "duration": 20084264075,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20.08 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027169.254.26.86\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\ALMOIN~1\\AppData\\Local\\Temp\\scoped_dir13536_6794}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d68.0.3440.106, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 0a6862426dc8fe27fe5d50ab195dba80\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat TestRunner.loginSteps.App360_create_user.click_the_New_User_button(App360_create_user.java:71)\r\n\tat ✽.Then Click the New User button.(C:/Users/AL Moin Webtech/git/qaauto/App360v43/src/test/resources/Createapp.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "App360_create_user.click_on_role_drop_down_option_and_select_consultant()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_Status_filed_and_select_Active()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_login_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_first_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 20
    }
  ],
  "location": "App360_create_user.enter_last_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab@gmail.com",
      "offset": 24
    }
  ],
  "location": "App360_create_user.enter_Enter_email_test(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 19
    }
  ],
  "location": "App360_create_user.enter_user_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 27
    }
  ],
  "location": "App360_create_user.enter_user_confirm_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_confirm_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 64,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@create_new_user"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Click the New User button.",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click on role drop down option and select consultant",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on Status filed and select Active",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Enter login name as \"shadab\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Enter first name as \"test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Enter last name as \"test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Enter Enter email test \"shadab@gmail.com\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Enter password as \"Qatest.123\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Enter confirm password as \"Qatest.123\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on confirm button.",
  "keyword": "Then "
});
formatter.match({
  "location": "App360_create_user.click_the_New_User_button()"
});
formatter.result({
  "duration": 20113473879,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20.10 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027169.254.26.86\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\ALMOIN~1\\AppData\\Local\\Temp\\scoped_dir13536_6794}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d68.0.3440.106, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 0a6862426dc8fe27fe5d50ab195dba80\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat TestRunner.loginSteps.App360_create_user.click_the_New_User_button(App360_create_user.java:71)\r\n\tat ✽.Then Click the New User button.(C:/Users/AL Moin Webtech/git/qaauto/App360v43/src/test/resources/Createapp.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "App360_create_user.click_on_role_drop_down_option_and_select_consultant()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_Status_filed_and_select_Active()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_login_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_first_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 20
    }
  ],
  "location": "App360_create_user.enter_last_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab@gmail.com",
      "offset": 24
    }
  ],
  "location": "App360_create_user.enter_Enter_email_test(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 19
    }
  ],
  "location": "App360_create_user.enter_user_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 27
    }
  ],
  "location": "App360_create_user.enter_user_confirm_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_confirm_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 65,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@create_new_user"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Click the New User button.",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click on role drop down option and select consultant",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on Status filed and select Active",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Enter login name as \"shadab\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Enter first name as \"test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Enter last name as \"test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Enter Enter email test \"shadab@gmail.com\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Enter password as \"Qatest.123\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Enter confirm password as \"Qatest.123\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on confirm button.",
  "keyword": "Then "
});
formatter.match({
  "location": "App360_create_user.click_the_New_User_button()"
});
formatter.result({
  "duration": 20059172053,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20.06 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027169.254.26.86\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\ALMOIN~1\\AppData\\Local\\Temp\\scoped_dir13536_6794}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d68.0.3440.106, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 0a6862426dc8fe27fe5d50ab195dba80\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat TestRunner.loginSteps.App360_create_user.click_the_New_User_button(App360_create_user.java:71)\r\n\tat ✽.Then Click the New User button.(C:/Users/AL Moin Webtech/git/qaauto/App360v43/src/test/resources/Createapp.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "App360_create_user.click_on_role_drop_down_option_and_select_consultant()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_Status_filed_and_select_Active()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_login_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_first_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 20
    }
  ],
  "location": "App360_create_user.enter_last_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab@gmail.com",
      "offset": 24
    }
  ],
  "location": "App360_create_user.enter_Enter_email_test(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 19
    }
  ],
  "location": "App360_create_user.enter_user_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 27
    }
  ],
  "location": "App360_create_user.enter_user_confirm_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_confirm_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 66,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;;;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@create_new_user"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Click the New User button.",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click on role drop down option and select consultant",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on Status filed and select Active",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Enter login name as \"shadab\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Enter first name as \"test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Enter last name as \"test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Enter Enter email test \"shadab@gmail.com\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Enter password as \"Qatest.123\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Enter confirm password as \"Qatest.123\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on confirm button.",
  "keyword": "Then "
});
formatter.match({
  "location": "App360_create_user.click_the_New_User_button()"
});
formatter.result({
  "duration": 20068308505,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20.07 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027169.254.26.86\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\ALMOIN~1\\AppData\\Local\\Temp\\scoped_dir13536_6794}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d68.0.3440.106, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 0a6862426dc8fe27fe5d50ab195dba80\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat TestRunner.loginSteps.App360_create_user.click_the_New_User_button(App360_create_user.java:71)\r\n\tat ✽.Then Click the New User button.(C:/Users/AL Moin Webtech/git/qaauto/App360v43/src/test/resources/Createapp.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "App360_create_user.click_on_role_drop_down_option_and_select_consultant()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_Status_filed_and_select_Active()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_login_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_first_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 20
    }
  ],
  "location": "App360_create_user.enter_last_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab@gmail.com",
      "offset": 24
    }
  ],
  "location": "App360_create_user.enter_Enter_email_test(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 19
    }
  ],
  "location": "App360_create_user.enter_user_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 27
    }
  ],
  "location": "App360_create_user.enter_user_confirm_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_confirm_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 67,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;;;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@create_new_user"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Click the New User button.",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click on role drop down option and select consultant",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on Status filed and select Active",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Enter login name as \"shadab\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Enter first name as \"test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Enter last name as \"test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Enter Enter email test \"shadab@gmail.com\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Enter password as \"Qatest.123\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Enter confirm password as \"Qatest.123\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on confirm button.",
  "keyword": "Then "
});
formatter.match({
  "location": "App360_create_user.click_the_New_User_button()"
});
formatter.result({
  "duration": 20104708982,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20.10 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027169.254.26.86\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\ALMOIN~1\\AppData\\Local\\Temp\\scoped_dir13536_6794}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d68.0.3440.106, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 0a6862426dc8fe27fe5d50ab195dba80\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat TestRunner.loginSteps.App360_create_user.click_the_New_User_button(App360_create_user.java:71)\r\n\tat ✽.Then Click the New User button.(C:/Users/AL Moin Webtech/git/qaauto/App360v43/src/test/resources/Createapp.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "App360_create_user.click_on_role_drop_down_option_and_select_consultant()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_Status_filed_and_select_Active()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_login_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_first_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 20
    }
  ],
  "location": "App360_create_user.enter_last_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab@gmail.com",
      "offset": 24
    }
  ],
  "location": "App360_create_user.enter_Enter_email_test(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 19
    }
  ],
  "location": "App360_create_user.enter_user_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 27
    }
  ],
  "location": "App360_create_user.enter_user_confirm_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_confirm_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 68,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;;;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@create_new_user"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Click the New User button.",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click on role drop down option and select consultant",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on Status filed and select Active",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Enter login name as \"shadab\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Enter first name as \"test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Enter last name as \"test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Enter Enter email test \"shadab@gmail.com\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Enter password as \"Qatest.123\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Enter confirm password as \"Qatest.123\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on confirm button.",
  "keyword": "Then "
});
formatter.match({
  "location": "App360_create_user.click_the_New_User_button()"
});
formatter.result({
  "duration": 20093449417,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20.08 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027169.254.26.86\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\ALMOIN~1\\AppData\\Local\\Temp\\scoped_dir13536_6794}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d68.0.3440.106, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 0a6862426dc8fe27fe5d50ab195dba80\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat TestRunner.loginSteps.App360_create_user.click_the_New_User_button(App360_create_user.java:71)\r\n\tat ✽.Then Click the New User button.(C:/Users/AL Moin Webtech/git/qaauto/App360v43/src/test/resources/Createapp.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "App360_create_user.click_on_role_drop_down_option_and_select_consultant()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_Status_filed_and_select_Active()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_login_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_first_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 20
    }
  ],
  "location": "App360_create_user.enter_last_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab@gmail.com",
      "offset": 24
    }
  ],
  "location": "App360_create_user.enter_Enter_email_test(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 19
    }
  ],
  "location": "App360_create_user.enter_user_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 27
    }
  ],
  "location": "App360_create_user.enter_user_confirm_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_confirm_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 69,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;;;16",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@create_new_user"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "Click the New User button.",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click on role drop down option and select consultant",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on Status filed and select Active",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Enter login name as \"shadab\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Enter first name as \"test\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Enter last name as \"test\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Enter Enter email test \"shadab@gmail.com\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Enter password as \"Qatest.123\".",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Enter confirm password as \"Qatest.123\".",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on confirm button.",
  "keyword": "Then "
});
formatter.match({
  "location": "App360_create_user.click_the_New_User_button()"
});
formatter.result({
  "duration": 20090179191,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20.09 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027169.254.26.86\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\ALMOIN~1\\AppData\\Local\\Temp\\scoped_dir13536_6794}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d68.0.3440.106, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 0a6862426dc8fe27fe5d50ab195dba80\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027btn btn-sm btn-primary\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat TestRunner.loginSteps.App360_create_user.click_the_New_User_button(App360_create_user.java:71)\r\n\tat ✽.Then Click the New User button.(C:/Users/AL Moin Webtech/git/qaauto/App360v43/src/test/resources/Createapp.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "App360_create_user.click_on_role_drop_down_option_and_select_consultant()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_Status_filed_and_select_Active()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_login_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 21
    }
  ],
  "location": "App360_create_user.enter_first_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 20
    }
  ],
  "location": "App360_create_user.enter_last_name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab@gmail.com",
      "offset": 24
    }
  ],
  "location": "App360_create_user.enter_Enter_email_test(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 19
    }
  ],
  "location": "App360_create_user.enter_user_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Qatest.123",
      "offset": 27
    }
  ],
  "location": "App360_create_user.enter_user_confirm_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "App360_create_user.click_on_confirm_button()"
});
formatter.result({
  "status": "skipped"
});
});
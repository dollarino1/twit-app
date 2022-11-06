URL = http://localhost:5000/

Registration - /api/user/ POST
    {
        "name": "",
        "email": "",
        "password": ""
    }
Login - /api/user/ POST
    {
        "email": "",
        "password": ""
    }

----------------------------------------------------------------------

Search user by name or email - /api/user?search=${name} GET, include token as Bearer

----------------------------------------------------------------------
Create or Access a 1on1 chat - /api/chat/ POST, include token as Bearer
    {
        "userId": "asdasd21312id",
    }
Fetch all chats - /api/chat/ GET, include token as Bearer
----------------------------------------------------------------------

Create group chat - /api/chat/group POST, include token as Bearer
    {
        "name": "Test name",
        "users": "[\"123123123id\",\"213123asddid\"]"
    }

Rename group chat - /api/chat/rename PUT, include token as Bearer
    {
        "chatId": "",
        "chatName": ""
    }
Add user to group chat - /api/chat/groupadd PUT, include token as Bearer
    {
        "chatId": "",
        "userId": ""
    }
Remove user from group chat - /api/chat/groupremove PUT, include token as Bearer
    {
        "chatId": "",
        "userId": ""
    }
----------------------------------------------------------------------
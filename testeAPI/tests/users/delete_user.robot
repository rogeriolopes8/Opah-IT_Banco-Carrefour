*** Settings ***
Resource    ../../resources/keywords.robot
Library     RequestsLibrary
Library     JSONLibrary
Library     String
Library     Collections

*** Keywords ***
Create Test User For Delete
    Create Session    ${SESSION_NAME}    ${BASE_URL}
    Get Token
    ${headers}=    Create Auth Headers
    ${rand}=    Generate Random String    5    [LOWER]
    ${email}=    Set Variable    delete.${rand}@teste.com
    ${body}=    Create Dictionary
    ...    nome=Usuário Delete
    ...    email=${email}
    ...    password=1234
    ...    administrador=true
    ${response}=    POST On Session    ${SESSION_NAME}    ${USERS_ENDPOINT}    json=${body}    headers=${headers}    expected_status=201
    ${json}=    Set Variable    ${response.json()}
    ${user_id}=    Get From Dictionary    ${json}    _id
    RETURN    ${user_id}

*** Test Cases ***
Delete User Successfully
    [Tags]    DELETE    happy_path
    ${user_id}=    Create Test User For Delete
    ${headers}=    Create Auth Headers
    ${endpoint}=    Set Variable    ${USERS_ENDPOINT}/${user_id}
    ${response}=    DELETE On Session    ${SESSION_NAME}    ${endpoint}    headers=${headers}    expected_status=200
    ${json}=    Set Variable    ${response.json()}
    Log To Console    ${json}
    Should Contain    ${json}    message

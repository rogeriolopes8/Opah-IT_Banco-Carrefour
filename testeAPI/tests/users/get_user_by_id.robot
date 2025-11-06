*** Settings ***
Resource    ../../resources/keywords.robot
Library     RequestsLibrary
Library     JSONLibrary
Library     String
Library     Collections

*** Keywords ***
Create Test User And Return Id And Email
    Create Session    ${SESSION_NAME}    ${BASE_URL}
    Get Token
    ${headers}=    Create Auth Headers
    ${rand}=    Generate Random String    5    [LOWER]
    ${email}=    Set Variable    getid.${rand}@teste.com
    ${body}=    Create Dictionary
    ...    nome=Usuário GetById
    ...    email=${email}
    ...    password=1234
    ...    administrador=true
    ${response}=    POST On Session    ${SESSION_NAME}    ${USERS_ENDPOINT}    json=${body}    headers=${headers}    expected_status=201
    ${json}=    Set Variable    ${response.json()}
    ${user_id}=    Get From Dictionary    ${json}    _id
    RETURN    ${user_id}    ${email}

*** Test Cases ***
Get User By Id Successfully
    [Tags]    GET    single
    ${user_id}    ${email}=    Create Test User And Return Id And Email
    ${headers}=    Create Auth Headers
    ${endpoint}=    Set Variable    ${USERS_ENDPOINT}/${user_id}
    ${response}=    GET On Session    ${SESSION_NAME}    ${endpoint}    headers=${headers}    expected_status=200
    ${json}=    Set Variable    ${response.json()}
    ${returned_email}=    Get From Dictionary    ${json}    email
    Should Be Equal    ${returned_email}    ${email}

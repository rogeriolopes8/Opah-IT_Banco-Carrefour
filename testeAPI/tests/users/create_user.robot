*** Settings ***
Resource    ../../resources/keywords.robot
Library     RequestsLibrary
Library     JSONLibrary
Library     String
Library     Collections

*** Test Cases ***
Create New User Successfully
    [Tags]    POST    happy_path
    Create Session    ${SESSION_NAME}    ${BASE_URL}
    Get Token
    ${headers}=    Create Auth Headers
    ${rand}=    Generate Random String    5    [LOWER]
    ${email}=    Set Variable    rogerio.${rand}@teste.com
    ${body}=    Create Dictionary
    ...    nome=Rogério QA
    ...    email=${email}
    ...    password=1234
    ...    administrador=true
    ${response}=    POST On Session    ${SESSION_NAME}    ${USERS_ENDPOINT}    json=${body}    headers=${headers}    expected_status=201
    ${json}=    Set Variable    ${response.json()}
    Log To Console    ${json}
    Should Contain    ${json}    message

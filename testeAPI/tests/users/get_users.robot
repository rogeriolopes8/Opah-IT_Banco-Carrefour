*** Settings ***
Resource    ../../resources/keywords.robot
Library     RequestsLibrary
Library     JSONLibrary
Library     Collections

*** Test Cases ***
Get All Users Successfully
    [Tags]    GET    list
    Create Session    ${SESSION_NAME}    ${BASE_URL}
    Get Token
    ${headers}=    Create Auth Headers
    ${response}=    GET On Session    ${SESSION_NAME}    ${USERS_ENDPOINT}    headers=${headers}    expected_status=200
    ${json}=    Set Variable    ${response.json()}
    Log To Console    ${json}
    Should Contain    ${json}    usuarios

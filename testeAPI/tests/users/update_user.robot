*** Settings ***
Resource    ../../resources/keywords.robot
Library     RequestsLibrary
Library     JSONLibrary
Library     String
Library     Collections

*** Keywords ***
Create Test User For Update
    [Documentation]    Cria um usuário específico para ser atualizado
    Create Session    ${SESSION_NAME}    ${BASE_URL}
    Get Token
    ${headers}=    Create Auth Headers
    ${rand}=    Generate Random String    5    [LOWER]
    ${email}=    Set Variable    update.${rand}@teste.com
    ${body}=    Create Dictionary
    ...    nome=Usuário Update
    ...    email=${email}
    ...    password=1234
    ...    administrador=true
    ${response}=    POST On Session    ${SESSION_NAME}    ${USERS_ENDPOINT}    json=${body}    headers=${headers}    expected_status=201
    ${json}=    Set Variable    ${response.json()}
    ${user_id}=    Get From Dictionary    ${json}    _id
    RETURN    ${user_id}

*** Test Cases ***
Update User Successfully
    [Tags]    PUT    happy_path
    ${user_id}=    Create Test User For Update
    ${headers}=    Create Auth Headers
    ${rand2}=    Generate Random String    5    [LOWER]
    ${new_email}=    Set Variable    updated.${rand2}@teste.com
    ${update_body}=    Create Dictionary
    ...    nome=Usuário Atualizado
    ...    email=${new_email}
    ...    password=4321
    ...    administrador=true
    ${endpoint}=    Set Variable    ${USERS_ENDPOINT}/${user_id}
    ${response}=    PUT On Session    ${SESSION_NAME}    ${endpoint}    json=${update_body}    headers=${headers}    expected_status=any
    Log To Console    Update status: ${response.status_code}
    Log To Console    Update body: ${response.text}
    Should Be Equal As Numbers    ${response.status_code}    200
    ${json}=    Set Variable    ${response.json()}
    Should Contain    ${json}    message

*** Settings ***
Library    RequestsLibrary
Library    JSONLibrary
Library    Collections
Resource   variables.robot

*** Variables ***
${SESSION_NAME}    api

*** Keywords ***
Ensure Admin User Exists
    [Documentation]    Garante que exista um usuário administrador para login
    ${body}=    Create Dictionary
    ...    nome=Admin QA
    ...    email=${EMAIL}
    ...    password=${PASSWORD}
    ...    administrador=true
    ${response}=    POST On Session    ${SESSION_NAME}    ${USERS_ENDPOINT}    json=${body}    expected_status=any
    ${status}=    Set Variable    ${response.status_code}
    Log To Console    Create admin status: ${status}
    IF    ${status} != 201 and ${status} != 400
        Fail    Status inesperado ao criar usuário admin: ${status}
    END

Get Token
    [Documentation]    Faz login na API e guarda o token JWT na variável ${TOKEN}
    Ensure Admin User Exists
    ${body}=    Create Dictionary    email=${EMAIL}    password=${PASSWORD}
    ${response}=    POST On Session    ${SESSION_NAME}    ${LOGIN_ENDPOINT}    json=${body}    expected_status=any
    Log To Console    Login status: ${response.status_code}
    Log To Console    Login body: ${response.text}
    Should Be Equal As Numbers    ${response.status_code}    200
    ${json}=    Set Variable    ${response.json()}
    ${token}=   Get From Dictionary    ${json}    authorization
    Set Suite Variable    ${TOKEN}    Bearer ${token}

Create Auth Headers
    [Documentation]    Cria o header com Authorization e Content-Type
    ${headers}=    Create Dictionary    Authorization=${TOKEN}    Content-Type=application/json
    RETURN    ${headers}

Get All Users
    [Documentation]    Retorna todos os usuários cadastrados
    ${headers}=    Create Auth Headers
    ${response}=    GET On Session    ${SESSION_NAME}    ${USERS_ENDPOINT}    headers=${headers}    expected_status=200
    RETURN    ${response}

Get User By Id
    [Documentation]    Retorna um usuário específico pelo ID
    [Arguments]    ${user_id}
    ${headers}=    Create Auth Headers
    ${endpoint}=    Set Variable    ${USERS_ENDPOINT}/${user_id}
    ${response}=    GET On Session    ${SESSION_NAME}    ${endpoint}    headers=${headers}    expected_status=200
    RETURN    ${response}

Update User
    [Documentation]    Atualiza os dados de um usuário existente
    [Arguments]    ${user_id}    ${body}
    ${headers}=    Create Auth Headers
    ${endpoint}=    Set Variable    ${USERS_ENDPOINT}/${user_id}
    ${response}=    PUT On Session    ${SESSION_NAME}    ${endpoint}    json=${body}    headers=${headers}    expected_status=200
    RETURN    ${response}

Delete User
    [Documentation]    Exclui um usuário pelo ID
    [Arguments]    ${user_id}
    ${headers}=    Create Auth Headers
    ${endpoint}=    Set Variable    ${USERS_ENDPOINT}/${user_id}
    ${response}=    DELETE On Session    ${SESSION_NAME}    ${endpoint}    headers=${headers}    expected_status=200
    RETURN    ${response}

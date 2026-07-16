*** Settings ***

Library    OperatingSystem
Library    SeleniumLibrary
Library    Collections
Library    ScreenCapLibrary


Test Setup
...    Run Keywords
...    Create Result Folder
...    AND
...    Start Video Recording
...    alias=test_record
...    name=${VIDEO_DIR}/test_${TEST NAME}.mp4
...    AND
...    Open Test Browser


Test Teardown
...    Run Keywords
...    Capture Screenshot Result
...    AND
...    Stop Video Recording
...    alias=test_record
...    AND
...    Close All Browsers


*** Variables ***
${URL}                  file:///C:/Users/user/Desktop/azd-qa-assessment-existing-agent-nakornl/web/index.html

${nationalIDNew}        1101700203451
${nationalIDExisting}   1101700203452
${nationalIDService}    1101700203453

${RESULT_DIR}           ${CURDIR}/result
${SCREENSHOT_DIR}       ${RESULT_DIR}/screenshot
${VIDEO_DIR}            ${RESULT_DIR}/video



*** Keywords ***

Open Test Browser
    Open Browser
    ...    ${URL}
    ...    chrome

    Maximize Browser Window
    Wait Until Page Contains Element
    ...    xpath=//body
    ...    timeout=10s

Create Result Folder
    Create Directory    ${RESULT_DIR}
    Create Directory    ${SCREENSHOT_DIR}
    Create Directory    ${VIDEO_DIR}


Capture Screenshot Result
    Capture Page Screenshot
    ...    ${SCREENSHOT_DIR}/${TEST NAME}.png


Wait Existing Agent Page Loaded
    Wait Until Page Contains
    ...    Existing Agent Verification
    ...    timeout=10s


Input National ID New Applicant

    Wait Until Element Is Visible
    ...    xpath=//*[@id="national-id-input"]
    ...    timeout=10s

    Input Text
    ...    xpath=//*[@id="national-id-input"]
    ...    ${nationalIDNew}

Input National ID Existing Applicant

    Wait Until Element Is Visible
    ...    xpath=//*[@id="national-id-input"]
    ...    timeout=10s

    Input Text
    ...    xpath=//*[@id="national-id-input"]
    ...    ${nationalIDExisting}

Input National ID Service Applicant

    Wait Until Element Is Visible
    ...    xpath=//*[@id="national-id-input"]
    ...    timeout=10s

    Input Text
    ...    xpath=//*[@id="national-id-input"]
    ...    ${nationalIDService}


Click Button Check Existing Agent

    Wait Until Element Is Enabled
    ...    xpath=//*[@id="check-existing-agent-button"]
    ...    timeout=10s

    Click Element
    ...    xpath=//*[@id="check-existing-agent-button"]

*** Test Cases ***

New Applicant
    Input National ID New Applicant
    Click Button Check Existing Agent
    Sleep    10s
    element_should_contain Verification Status   xpath=//*[@id="verification-status"]    New Applicant
    element_should_contain Reference Number   xpath=//*[@id="reference-no"]    EXA-1784203993433
    element_should_contain Checked By   xpath=//*[@id="checked-by"]   Existing Agent Service
    Sleep    10s


Existing Applicant
    Input National ID Existing Applicant
    Click Button Check Existing Agent
    Sleep    10s
    element_should_contain Verification Status   xpath=//*[@id="verification-status"]    Existing Agent
    element_should_contain Agent Code   xpath=//*[@id="agent-code"]    AG123456
    element_should_contain Agent Name   xpath=//*[@id="agent-name"]    John Doe
    element_should_contain Branch  xpath=//*[@id="agent-branch"]   Bangkok 01
    Sleep    10s


Service Applicant
    Input National ID Service Applicant
    Click Button Check Existing Agent
    Wait Existing Agent Page Loaded
    Sleep    10s
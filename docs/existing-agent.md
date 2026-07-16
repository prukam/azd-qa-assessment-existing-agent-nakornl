# Existing Agent Verification Assessment

## Background

Before a new applicant can continue the registration process, the system must verify whether the applicant has already been registered as an insurance agent.

Applicants who already exist in the system are **not allowed** to continue the registration process.

---

# User Story

**As an Agent Lead**

I want to verify whether an applicant already exists in the system

So that duplicate agent registrations can be prevented.

---

# Acceptance Criteria

## AC1 - New Applicant

**Given** Agent Lead is on the Existing Agent Verification page

**When** Agent Lead enters a valid National ID that does not exist in the system

**And** clicks **Check Existing Agent**

**Then** the system shall display **New Applicant**

**And** the system shall display the verification summary

**And** the **Continue Registration** button shall be enabled.

---

## AC2 - Existing Agent

**Given** Agent Lead is on the Existing Agent Verification page

**When** Agent Lead enters a National ID that already exists in the system

**And** clicks **Check Existing Agent**

**Then** the system shall display **Existing Agent**

**And** the system shall display the existing agent information

**And** the **Continue Registration** button shall remain disabled.

---

## AC3 - National ID is Empty

**Given** Agent Lead is on the Existing Agent Verification page

**And** National ID field is empty

**When** Agent Lead clicks **Check Existing Agent**

**Then** the system shall display a validation error.

---

## AC4 - Invalid National ID Format

**Given** Agent Lead is on the Existing Agent Verification page

**When** Agent Lead enters an invalid National ID

**And** clicks **Check Existing Agent**

**Then** the system shall display a validation error.

---

## AC5 - Existing Agent Service Unavailable

**Given** Agent Lead is on the Existing Agent Verification page

**When** Agent Lead submits a valid National ID

**And** the Existing Agent service is unavailable

**Then** the system shall display **Service Unavailable**

**And** the **Continue Registration** button shall remain disabled.

---

# Part 1 – Requirement Review

Review the User Story and Acceptance Criteria.

Identify:

* Requirement Gaps
* Assumptions
* Risks

---

## Candidate Answer

### Requirement Gaps

1.

2.

3.

---

### Assumptions

1.

2.

3.

---

### Risks

1.

2.

3.

---

# Part 2 – Additional Acceptance Criteria

If you believe any Acceptance Criteria are missing, propose additional Acceptance Criteria using **Given / When / Then** format.

---

## Candidate Answer

### AC6

```gherkin
Given

When

Then
```

---

### AC7

```gherkin
Given

When

Then
```

---

### AC8

```gherkin
Given

When

Then
```

---

# Part 3 – Test Scenario Design

Design test scenarios for the Existing Agent Verification feature.

For each scenario provide:

* Scenario ID
* Scenario Name
* Related Acceptance Criteria

---

## Candidate Answer

| Scenario ID | Scenario Name | Related AC |
| ----------- | ------------- | ---------- |
| SC-001      |               |            |
| SC-002      |               |            |
| SC-003      |               |            |
| SC-004      |               |            |
| SC-005      |               |            |

> You may add more scenarios if necessary.

---

# Part 4 – Test Case Design

Select **at least 3 scenarios** from Part 3.

Create detailed Test Cases including:

* Test Case ID
* Related Scenario
* Preconditions
* Test Data
* Test Steps
* Expected Results

---

## Candidate Answer

### TC-001

**Related Scenario**

**Preconditions**

**Test Data**

**Test Steps**

1.

2.

3.

**Expected Results**

1.

2.

3.

---

### TC-002

**Related Scenario**

**Preconditions**

**Test Data**

**Test Steps**

1.

2.

3.

**Expected Results**

1.

2.

3.

---

### TC-003

**Related Scenario**

**Preconditions**

**Test Data**

**Test Steps**

1.

2.

3.

**Expected Results**

1.

2.

3.

---

# Part 5 – Automation Assessment

Implement Robot Framework automation tests for the sample Existing Agent Verification application under:

```text
web/
```

For the **New Applicant** scenario, your automation should verify:

* Verification Status
* Reference Number
* Checked By
* Continue Registration button state

For the **Existing Agent** scenario, your automation should verify:

* Status
* Agent Code
* Agent Name
* Branch
* Continue Registration button state

For service error or validation scenarios, your automation should verify:

* Result message
* Continue Registration button remains disabled

Place all Robot Framework scripts under:

```text
scripts/
```

You may create any folder structure under the `scripts` directory.

---

## Candidate Answer

### Automation Scope

Describe what you automated.

---

### Locator Strategy

Explain:

* Which locators you selected
* Why you selected them
* Which locators you intentionally avoided

---

### Wait Strategy

Explain how your automation handles delayed responses from the application.

---

### Known Limitations

List any assumptions or limitations in your automation solution.

---

# Part 6 – Submission Summary

Provide a short summary that could be used as your Pull Request description.

---

## Candidate Answer

### Summary

### Covered Test Cases

### Assumptions

### Known Limitations

# AZD QA Automation Assessment

## Objective

This assessment evaluates your ability to:

* Review software requirements
* Design Test Scenarios
* Design Test Cases
* Implement Robot Framework automation tests
* Demonstrate good Git practices

---

# Repository Structure

```text
azd-qa-automation-assessment-existing-agent/

├── README.md
├── docs/
│   └── existing-agent.md
├── web/
│   ├── existing-agent.html
│   ├── style.css
│   └── app.js
├── scripts/
│   └── .gitkeep
└── .gitignore
```

---

# Instructions

1. Create your own repository from this template.
2. Review and answer all questions in `docs/existing-agent.md`.
3. Review the sample web application under `web/`.
4. Implement Robot Framework automation scripts under `scripts/`.
5. Commit your work using meaningful commit messages.
6. Create your own branch using the following format:

```text
candidate/<your-name>
```

Example:

```text
candidate/john-doe
```

7. Push your branch to the remote repository.
8. Submit:

* Repository URL
* Branch Name

---

# Test Environment

The sample web application is located under:

```text
web/
```

Start a local web server from the repository root.

Example:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080/web/index.html
```

---

# Test Data

| National ID     | Expected Result       |
| --------------- | --------------------- |
| `1101700203451` | `New Applicant`       |
| `1101700203452` | `Existing Agent`      |
| `1101700203453` | `Service Unavailable` |

When the applicant is a **New Applicant**, the system should display:

| Field         | Value                                                     |
| ------------- | --------------------------------------------------------- |
| Status        | New Applicant                                             |
| Reference No. | EXA-20260626-000123 *(Reference number format may vary.)* |
| Checked By    | Existing Agent Service                                    |

The **Continue Registration** button should be enabled only when the result is **New Applicant**.

When the applicant is an **Existing Agent**, the system should display:

| Field      | Value          |
| ---------- | -------------- |
| Status     | Existing Agent |
| Agent Code | AG123456       |
| Agent Name | John Doe       |
| Branch     | Bangkok 01     |

The **Continue Registration** button should remain disabled.

---

# Validation Rules

National ID

* Required
* Numeric only
* Exactly 13 digits

Expected validation messages

| Input                           | Expected Result                      |
| ------------------------------- | ------------------------------------ |
| Empty                           | `National ID is required`            |
| Less than 13 digits             | `National ID must contain 13 digits` |
| More than 13 digits             | `National ID must contain 13 digits` |
| Contains non-numeric characters | `National ID must be numeric`        |

---

# Automation Expectations

Your automation solution should demonstrate:

* Stable locator strategy
* Explicit wait strategy
* Reusable keywords
* Clear assertions
* Maintainable project structure
* Clean and readable Robot Framework code

For the **New Applicant** scenario, your automation should verify:

* Status
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

---

# Submission Checklist

Before submitting, ensure that:

* All questions in `docs/existing-agent.md` have been answered.
* Robot Framework scripts are placed under `scripts/`.
* Your solution has been committed to your own branch.
* Your branch has been pushed successfully.
* Your repository URL and branch name are ready to be shared.

Good luck!

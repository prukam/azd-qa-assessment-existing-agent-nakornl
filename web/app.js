const nationalIdInput = document.querySelector('#national-id-input');
const checkExistingAgentButton = document.querySelector('#check-existing-agent-button');
const existingAgentResult = document.querySelector('#existing-agent-result');

const summarySection = document.querySelector('#verification-summary-section');
const verificationStatus = document.querySelector('#verification-status');
const referenceNo = document.querySelector('#reference-no');
const checkedBy = document.querySelector('#checked-by');

const referenceRow = document.querySelector('#reference-row');
const checkedByRow = document.querySelector('#checked-by-row');

const agentCodeRow = document.querySelector('#agent-code-row');
const agentNameRow = document.querySelector('#agent-name-row');
const agentBranchRow = document.querySelector('#agent-branch-row');

const agentCode = document.querySelector('#agent-code');
const agentName = document.querySelector('#agent-name');
const agentBranch = document.querySelector('#agent-branch');

const continueRegistrationButton = document.querySelector('#continue-registration-button');

function setResult(message, type) {
  existingAgentResult.textContent = message;
  existingAgentResult.className = `result ${type || ""}`.trim();
}

function hideSummary() {
  summarySection.hidden = true;

  verificationStatus.textContent = "-";
  referenceNo.textContent = "-";
  checkedBy.textContent = "-";

  agentCode.textContent = "-";
  agentName.textContent = "-";
  agentBranch.textContent = "-";

  referenceRow.hidden = false;
  checkedByRow.hidden = false;

  agentCodeRow.hidden = true;
  agentNameRow.hidden = true;
  agentBranchRow.hidden = true;

  continueRegistrationButton.disabled = true;
}

function generateReferenceNo() {
  return `EXA-${Date.now()}`;
}

function showNewApplicantSummary() {
  summarySection.hidden = false;

  verificationStatus.textContent = "New Applicant";
  referenceNo.textContent = generateReferenceNo();
  checkedBy.textContent = "Existing Agent Service";

  referenceRow.hidden = false;
  checkedByRow.hidden = false;

  agentCodeRow.hidden = true;
  agentNameRow.hidden = true;
  agentBranchRow.hidden = true;

  continueRegistrationButton.disabled = false;
}

function showExistingAgentSummary() {
  summarySection.hidden = false;

  verificationStatus.textContent = "Existing Agent";

  referenceRow.hidden = true;
  checkedByRow.hidden = true;

  agentCodeRow.hidden = false;
  agentNameRow.hidden = false;
  agentBranchRow.hidden = false;

  agentCode.textContent = "AG123456";
  agentName.textContent = "John Doe";
  agentBranch.textContent = "Bangkok 01";

  continueRegistrationButton.disabled = true;
}

function validateNationalId(nationalId) {
  if (!nationalId) {
    return "National ID is required";
  }

  if (!/^\d+$/.test(nationalId)) {
    return "National ID must be numeric";
  }

  if (nationalId.length !== 13) {
    return "National ID must contain 13 digits";
  }

  return null;
}

checkExistingAgentButton.addEventListener("click", () => {
  const nationalId = nationalIdInput.value.trim();

  hideSummary();

  const validationError = validateNationalId(nationalId);

  if (validationError) {
    setResult(validationError, "error");
    return;
  }

  checkExistingAgentButton.disabled = true;
  setResult("Checking Existing Agent...", "loading");

  const delay = Math.floor(Math.random() * 10000) + 500;

  setTimeout(() => {
    if (nationalId === "1101700203451") {
      setResult("New Applicant", "success");
      showNewApplicantSummary();
    } else if (nationalId === "1101700203452") {
      setResult("Existing Agent", "error");
      showExistingAgentSummary();
    } else if (nationalId === "1101700203453") {
      setResult("Service Unavailable", "error");
    } else {
      setResult("Existing Agent", "error");
      showExistingAgentSummary();
    }

    checkExistingAgentButton.disabled = false;
  }, delay);
});
// --- STEP BY STEP PROCESSING ARCHITECTURE ---

// DOM Phase Wrappers
const phase1 = document.querySelector('#phase1');
const phase2 = document.querySelector('#phase2');
const phase3 = document.querySelector('#phase3');

// DOM Step Headings Indicators
const step1Indicator = document.querySelector('#step1Indicator');
const step2Indicator = document.querySelector('#step2Indicator');
const step3Indicator = document.querySelector('#step3Indicator');

// DOM Validation Alert Box
const validationAlert = document.querySelector('#validationAlert');

// Capture Buttons Links
const nextToPhase2 = document.querySelector('#nextToPhase2');
const nextToPhase3 = document.querySelector('#nextToPhase3');
const restartBtn = document.querySelector('#restartBtn');

// Input Streams Nodes Selection
const firstName = document.querySelector('#firstName');
const middleName = document.querySelector('#middleName');
const lastName = document.querySelector('#lastName');
const extName = document.querySelector('#extName');
const currentAge = document.querySelector('#currentAge');
const currentAddress = document.querySelector('#currentAddress');
const permanentAddress = document.querySelector('#permanentAddress');
const currentBirthday = document.querySelector('#currentBirthday');

// Target Previews Injections Nodes Selection
const previewName = document.querySelector('#previewName');
const previewCurrent = document.querySelector('#previewCurrent');
const previewPermanent = document.querySelector('#previewPermanent');
const restartBtnPhase3 = document.querySelector('#restartBtnPhase3');

const savedFirstName = localStorage.getItem('savedFirstName');
const savedLastName = localStorage.getItem('savedLastName');


// TRANSITION ACTION 1: Processing Name Streams
nextToPhase2.addEventListener('click', () => {
    // Reset dynamic visibility validation container flags
    validationAlert.classList.add('d-none');

    // Capture data values, then apply basic processing filters
    const fNameClean = firstName.value.trim();
    const lNameClean = lastName.value.trim();
    const mNameClean = middleName.value.trim();
    const eNameClean = extName.value.trim();
    const caNameClean = currentAge.value.trim();
    const cbNameClean = currentBirthday.value.trim();
    const ageValue = Number(caNameClean);

    if (fNameClean === "" || lNameClean === "" || mNameClean === "" || eNameClean === "" || caNameClean === "" || cbNameClean === "") {
        validationAlert.classList.remove('d-none');
        validationAlert.textContent = "Validation Failure: All name, age, and birthday fields are required.";
        return;
    }
    else if (/^\d+$/.test(fNameClean) || /^\d+$/.test(lNameClean) || /^\d+$/.test(mNameClean) || /^\d+$/.test(eNameClean)) {
        validationAlert.classList.remove('d-none');
        validationAlert.textContent = "Validation Failure: Please do not input numbers in your name.";
        return;
    }
    else if (Number.isNaN(ageValue)) {
        validationAlert.classList.remove('d-none');
        validationAlert.textContent = "Validation Failure: Please enter a valid numeric age.";
        return;
    }
    else if (ageValue > 100) {
        validationAlert.classList.remove('d-none');
        validationAlert.textContent = "Error: Age cannot be greater than 100.";
        return;
    }
    else if (ageValue < 12) {
        validationAlert.classList.remove('d-none');
        validationAlert.textContent = "Ages less than 12 aren't allowed on this website.";
        return;
    }

    else {
        // remember basic user identity for future visits
        localStorage.setItem('savedFirstName', fNameClean);
        localStorage.setItem('savedLastName', lNameClean);

        // Advance visual stage indicator layout frames
        phase1.classList.add('d-none');
        phase2.classList.remove('d-none');

        step1Indicator.className = "text-muted flex-fill";
        step2Indicator.className = "text-primary border-bottom border-3 border-primary pb-1 flex-fill";
        return;
    }
});

// TRANSITION ACTION 2: Processing Location Layout Streams
nextToPhase3.addEventListener('click', () => {
    validationAlert.classList.add('d-none');

    const currentAddrClean = currentAddress.value.trim();
    const permAddrClean = permanentAddress.value.trim();

    // Strict layout validation check
    if (currentAddrClean === "" || permAddrClean === "") {
        validationAlert.classList.remove('d-none');
        validationAlert.textContent = "Validation Failure: Both Address fields are required fields!";
        return;
    }

    // Form string manipulation manipulations for Corporate HR Uniformity standards
    const formattedFirst = firstName.value.trim().toUpperCase();
    const formattedMiddle = middleName.value.trim() !== "" ? middleName.value.trim().toUpperCase() + " " : "";
    const formattedLast = lastName.value.trim().toUpperCase();
    const formattedExt = extName.value.trim() !== "" ? ", " + extName.value.trim().toUpperCase() : "";

    // Target injections handling
    previewName.textContent = `${formattedLast}, ${formattedFirst} ${formattedMiddle}${formattedExt}`;
    previewCurrent.textContent = currentAddrClean.toUpperCase();
    previewPermanent.textContent = permAddrClean.toUpperCase();

    // Switch panel layout view via d-none modifications
    phase2.classList.add('d-none');
    phase3.classList.remove('d-none');

    step2Indicator.className = "text-muted flex-fill";
    step3Indicator.className = "text-success border-bottom border-3 border-success pb-1 flex-fill";
});

// RESTART INTERFACES STATE ACTIONS
function resetForm() {
    firstName.value = "";
    middleName.value = "";
    lastName.value = "";
    extName.value = "";
    currentAge.value = "";
    currentBirthday.value = "";
    currentAddress.value = "";
    permanentAddress.value = "";
    previewName.textContent = "--";
    previewCurrent.textContent = "--";
    previewPermanent.textContent = "--";
    validationAlert.classList.add('d-none');
    phase2.classList.add('d-none');
    phase3.classList.add('d-none');
    phase1.classList.remove('d-none');
    step1Indicator.className = "text-primary border-bottom border-3 border-primary pb-1 flex-fill";
    step2Indicator.className = "text-muted pb-1 flex-fill";
    step3Indicator.className = "text-muted flex-fill";
}

restartBtn.addEventListener('click', resetForm);
restartBtnPhase3.addEventListener('click', resetForm);
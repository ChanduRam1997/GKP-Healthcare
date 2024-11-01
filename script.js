function submitForm() {
    // Validate form fields
    const name = document.getElementById('patient-name').value;
    const id = document.getElementById('patient-id').value;
    const testType = document.getElementById('test-type').value;
    const result = document.getElementById('result').value;
    const date = document.getElementById('date').value;

    if (!name || !id || !testType || !result || !date) {
        alert("Please fill in all fields.");
        return;
    }

    // Display confirmation message
    document.getElementById('confirmation').classList.remove('hidden');
    
    // Reset the form
    document.getElementById('lab-report-form').reset();
}

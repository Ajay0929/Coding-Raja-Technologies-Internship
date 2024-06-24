document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners, initialize components
});

function addEducation() {
    let educationSection = document.getElementById('education-section');
    let newEducation = document.createElement('div');
    newEducation.innerHTML = `
        <div class="form-group">
            <label for="school">School</label>
            <input type="text" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="degree">Degree</label>
            <input type="text" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="year">Year</label>
            <input type="number" class="form-control" required>
        </div>
    `;
    educationSection.appendChild(newEducation);
}

function addWork() {
    let workSection = document.getElementById('work-section');
    let newWork = document.createElement('div');
    newWork.innerHTML = `
        <div class="form-group">
            <label for="company">Company</label>
            <input type="text" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="role">Role</label>
            <input type="text" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="work-year">Year</label>
            <input type="number" class="form-control" required>
        </div>
    `;
    workSection.appendChild(newWork);
}

function addSkill() {
    let skillsSection = document.getElementById('skills-section');
    let newSkill = document.createElement('div');
    newSkill.innerHTML = `
        <div class="form-group">
            <label for="skill">Skill</label>
            <input type="text" class="form-control" required>
        </div>
    `;
    skillsSection.appendChild(newSkill);
}

function selectTemplate() {
    // Function to select and apply the chosen template
}

function previewResume() {
    let resumePreview = document.getElementById('resume-preview');
    let form = document.getElementById('resumeForm');

    let name = form.querySelector('#name').value;
    let email = form.querySelector('#email').value;
    let phone = form.querySelector('#phone').value;
    
    let educationSection = '';
    document.querySelectorAll('#education-section .form-group').forEach((edu, index) => {
        let school = edu.querySelector('#school') ? edu.querySelector('#school').value : edu.querySelectorAll('input')[0].value;
        let degree = edu.querySelector('#degree') ? edu.querySelector('#degree').value : edu.querySelectorAll('input')[1].value;
        let year = edu.querySelector('#year') ? edu.querySelector('#year').value : edu.querySelectorAll('input')[2].value;
        educationSection += <p><strong>${school}</strong>, ${degree}, ${year}</p>;
    });

    let workSection = '';
    document.querySelectorAll('#work-section .form-group').forEach((work, index) => {
        let company = work.querySelector('#company') ? work.querySelector('#company').value : work.querySelectorAll('input')[0].value;
        let role = work.querySelector('#role') ? work.querySelector('#role').value : work.querySelectorAll('input')[1].value;
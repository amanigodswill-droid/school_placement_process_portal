document.addEventListener('DOMContentLoaded', () => {

    let selectedLevel = "";


    // 1. LEVEL SELECTOR (KCPE / KCSE)
    
    const levelOptions = document.querySelectorAll('.level-option');

    levelOptions.forEach(option => {
        option.addEventListener('click', () => {
            levelOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            selectedLevel = option.textContent;
        });
    });

    
    // 2. PROFILE IMAGE UPLOAD + SAVE
    const camIcon = document.querySelector('.cam-icon');
    const uploadInput = document.getElementById('upload');
    const profilePic = document.querySelector('.profile-pic');

    camIcon.addEventListener('click', () => uploadInput.click());

    uploadInput.addEventListener('change', () => {
        const file = uploadInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                profilePic.src = e.target.result;

                // Save image to localStorage
                localStorage.setItem('profileImage', e.target.result);
            };

            reader.readAsDataURL(file);
        }
    });

    // Load saved image (if exists)
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
        profilePic.src = savedImage;
    }
    // 3. MATH GRADE INTERACTION
    const mathGradeSelect = document.getElementById('math-grade');
    const infoBox = document.querySelector('.info-box');

    mathGradeSelect.addEventListener('change', (e) => {
        if (e.target.value === 'A') {
            infoBox.style.border = "2px solid #4a90e2";
            infoBox.classList.add('animate-pulse');
        } else {
            infoBox.style.border = "none";
            infoBox.classList.remove('animate-pulse');
        }
    });


    // 4. SAVE DATA FUNCTION

    function saveData() {

        const data = {
            fullName: document.getElementById('fullName').value,
            dob: document.getElementById('dateOfBirth').value,
            gender: document.getElementById('gender').value,
            nationality: document.getElementById('nationality').value,
            level: selectedLevel,
            graduationYear: document.getElementById('graduationYear').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('physicalAddress').value,

            // KCPE
            schoolName: document.getElementById('schoolName').value,
            yearOfCompletion: document.getElementById('yearOfCompletion').value,
            meanScore: document.getElementById('meanScore').value,

            // KCSE
            secondarySchool: document.getElementById('secondarySchoolName').value,
            englishGrade: document.getElementById('english-grade').value,
            mathGrade: document.getElementById('math-grade').value
        };

        localStorage.setItem('studentData', JSON.stringify(data));
    }


    // 5. VALIDATION
    
    function validateForm() {
        const inputs = document.querySelectorAll('input, textarea, select');
        let isValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                input.style.border = "1px solid red";
                isValid = false;
            } else {
                input.style.border = "none";
            }
        });

        if (!selectedLevel) {
            alert("Please select your academic level (KCPE or KCSE)");
            isValid = false;
        }

        return isValid;
    }

    
    // 6. SAVE BUTTON
    const saveBtn = document.querySelector('.save-btn');

    saveBtn.addEventListener('click', () => {

        if (!validateForm()) {
            alert("Please fill all required fields.");
            return;
        }

        saveData();

        saveBtn.innerText = "Saving...";
        saveBtn.disabled = true;

        setTimeout(() => {
            saveBtn.innerText = "Saved!";
            
            setTimeout(() => {
                window.location.href = "Profile.html";
            }, 800);
        }, 1000);
    });
    // 7. DISCARD BUTTON FUNCTION

    const discardBtn = document.querySelector('.discard-btn');

    discardBtn.addEventListener('click', () => {
        const confirmDiscard = confirm("Are you sure you want to discard all changes?");

        if (confirmDiscard) {

            // Clear all inputs
            document.querySelectorAll('input, textarea, select').forEach(el => {
                el.value = "";
            });

            // Reset level selection
            levelOptions.forEach(o => o.classList.remove('active'));
            selectedLevel = "";

            // Reset image
            profilePic.src = "https://via.placeholder.com/100";

            // Optional: clear saved data
            localStorage.removeItem('studentData');

            alert("All changes discarded.");
        }
    });

});


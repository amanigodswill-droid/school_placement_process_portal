 document.addEventListener('DOMContentLoaded', () => {

            const data = JSON.parse(localStorage.getItem('studentData'));

            if (!data) return;

            document.getElementById('fullName').textContent = data.fullName;
            document.getElementById('dob').textContent = data.dob;
            document.getElementById('gender').textContent = data.gender;
            document.getElementById('nationality').textContent = data.nationality;
            document.getElementById('level').textContent = data.level;
            document.getElementById('graduationYear').textContent = data.graduationYear;
            document.getElementById('email').textContent = data.email;
            document.getElementById('phone').textContent = data.phone;
            document.getElementById('address').textContent = data.address;

            document.getElementById('schoolName').textContent = data.schoolName;
            document.getElementById('yearOfCompletion').textContent = data.yearOfCompletion;
            document.getElementById('meanScore').textContent = data.meanScore;

            document.getElementById('secondarySchool').textContent = data.secondarySchool;
            document.getElementById('englishGrade').textContent = data.englishGrade;
            document.getElementById('mathGrade').textContent = data.mathGrade;

            // IMAGE
            const savedImage = localStorage.getItem('profileImage');
            if (savedImage) {
                document.getElementById('profilePic').src = savedImage;
            }

        });
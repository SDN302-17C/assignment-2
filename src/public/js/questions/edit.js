document.getElementById('options').addEventListener('input', function() {
    const options = this.value.split(';').map(option => option.trim());
    const correctAnswerSelect = document.getElementById('correctAnswer');
    correctAnswerSelect.innerHTML = '<option value="" disabled>-- Select your correct answer --</option>';
    options.forEach((option, index) => {
        correctAnswerSelect.innerHTML += `<option value="${index}">${option}</option>`;
    });
});

document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const question = {
        text: document.getElementById('text').value,
        options: document.getElementById('options').value.split(';').map(option => option.trim()),
        keywords: document.getElementById('keywords').value.split(';').map(keyword => keyword.trim()),
        correctAnswerIndex: parseInt(document.getElementById('correctAnswer').value)
    };

    fetch(`/api/questions/${document.getElementById('questionForm').action.split('/').pop()}?_method=PUT`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(question)
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => { throw new Error(text) });
        }
        return response.json();
    })
    .then(data => {
        const successAlert = document.getElementById('successAlert');
        successAlert.classList.remove('d-none');
        setTimeout(() => {
            window.location.href = `/questions/${document.getElementById('questionForm').action.split('/').pop()}`;
        }, 2000);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('backButton').addEventListener('click', function() {
    window.history.back();
});
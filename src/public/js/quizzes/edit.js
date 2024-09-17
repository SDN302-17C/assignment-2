document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('quizForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const quizId = document.getElementById('quizForm').action.split('/').pop().split('?')[0];
        const quiz = {
            title: document.getElementById('title').value,
            description: document.getElementById('description').value
        };

        fetch(`/api/quizzes/${quizId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quiz)
        })
        .then(response => response.json())
        .then(data => {
            const successAlert = document.getElementById('successAlert');
            successAlert.classList.remove('d-none');
            setTimeout(() => {
                window.location.href = '/quizzes/' + quizId;
            }, 2000);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    document.getElementById('backButton').addEventListener('click', function() {
        window.history.back();
    });
});
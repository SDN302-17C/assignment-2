# Test API

## Tool 
- Manual API testing
    - Thunder Client (VSCode Extension)
    - Postman 
    - JMeter 
- Automated API testing
    - Katalon Studio
    - akaAT Studio

<br>

## Test URL

### Questions 
![GET](https://img.shields.io/badge/-GET-blue?style=flat-square&logo=add&logoColor=white)
- Get All Questions 
```bash
http://localhost:3000/questions/
```

<br>

![POST](https://img.shields.io/badge/-POST-green?style=flat-square&logo=search&logoColor=white)
- Create Question 
```bash
http://localhost:3000/questions/
```

<br>

![PUT](https://img.shields.io/badge/-PUT-yellow?style=flat-square&logo=edit&logoColor=white)
- Update Question 
```bash
http://localhost:3000/questions/questionId
```

<br>

![DELETE](https://img.shields.io/badge/-DELETE-red?style=flat-square&logo=trash&logoColor=white)
- Delete Question 
```bash
http://localhost:3000/questions/questionId
```

<br>

### Quizzes 
![GET](https://img.shields.io/badge/-GET-blue?style=flat-square&logo=add&logoColor=white)
- Get All Quizzes 
```bash
http://localhost:3000/quizzes/
```

<br>

- Get Quiz by ID 
```bash
http://localhost:3000/quizzes/quizId
```

<br>

- Get all questions in quizId have keyword 
```bash
http://localhost:3000/quizzes/quizId/populate
```

<br>

![POST](https://img.shields.io/badge/-POST-green?style=flat-square&logo=search&logoColor=white)
- Create Quizzes 
```bash
http://localhost:3000/quizzes/
```

<br>

- Create new question in quizId 
```bash
http://localhost:3000/quizzes/quizId/question
```

<br>

- Create many new questions in quizId 
```bash
http://localhost:3000/quizzes/quizId/questions
```

<br>

![PUT](https://img.shields.io/badge/-PUT-yellow?style=flat-square&logo=edit&logoColor=white)
- Update Quizzes 
```bash
http://localhost:3000/quizzes/quizId
```

<br>

![DELETE](https://img.shields.io/badge/-DELETE-red?style=flat-square&logo=trash&logoColor=white)
- Delete Quizzes 
```bash
http://localhost:3000/quizzes/quizId
```



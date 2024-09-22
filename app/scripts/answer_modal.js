document.getElementById('confirm-btn').onclick = function() {
    const city = document.querySelector('input[placeholder="Укажите город в котором вы проживаете"]').value;
    const age = document.querySelector('input[placeholder="Укажите свой возраст"]').value;
    const interests = document.querySelector('input[placeholder="Расскажите о своих интересах"]').value;

    const requestData = {
        city: city,
        age: age,
        interests: interests
    };

    fetch('http://192.168.30.200:8000/api/get_recomendation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Отладочный вывод
        if (data.message) {
            showModal(data); 
        } else {
            console.error('Неизвестный формат ответа от сервера:', data);
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
};

function showModal(response) {
    const modal = document.getElementById('modal');
    const serverResponse = document.getElementById('server-response');

    serverResponse.textContent = response.message; 
    modal.style.display = 'block'; 
}

document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
};


window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

document.addEventListener('DOMContentLoaded', () => {   
    const formInputs = document.querySelectorAll('.form-input-user-info input');
    const confirmButton = document.querySelector('.confirm-button .button');

    confirmButton.addEventListener('click', async (e) => {
        e.preventDefault(); // предотвращаем переход по ссылке

        const city = formInputs[0].value;
        const age = formInputs[1].value;
        const interests = formInputs[2].value;

        const data = {
            city,
            age,
            interests
        };

        try {
            const response = await fetch('http://192.168.30.200:8000/api/get_recomendation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log('Success:', responseData);

        } catch (error) {
            console.error('Error:', error);
        }
    });
});

        // Получаем элементы по ID
        const colorPicker = document.getElementById('colorPicker');
        const colorButton = document.getElementById('colorButton');

        // Добавляем обработчик события на изменение цвета
        colorPicker.addEventListener('input', function() {
            // Применяем выбранный цвет к фону кнопки
            colorButton.style.backgroundColor = colorPicker.value;
        });
import '/src/style.css'
import { weather } from '/src/Modules/weather';
import { ui } from '/src/Modules/ui'


const form = document.getElementById('searchForm');
const formInput = document.getElementById('searchInput');
const formBtn = document.getElementById('searchBtn');

form.addEventListener('submit', (e) => {
    e.preventDefault();

});

formBtn.addEventListener('click', async () => {
    if (formInput.value === '' || formInput == null) {
        return;
    }
    const weatherData = await weather(formInput.value);
    ui(weatherData)
})
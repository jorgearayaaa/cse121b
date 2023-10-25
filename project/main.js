import { getFlag } from './flag-api.js';

const form = document.getElementById('country-form');
const flagContainer = document.getElementById('flag-container');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const countryName = document.getElementById('country').value;

    const flagData = await getFlag(countryName);

        if (flagData) {
            const flagImg = document.createElement('img');
            flagImg.src = flagData.flag;
            flagImg.alt = `Flag of ${countryName}`;

            flagContainer.innerHTML = '';
            flagContainer.appendChild(flagImg);

            const transformedData = [countryName, flagData.flag].map(item => item.toUpperCase());
            console.log('Transformed Data:', transformedData);
        } else {
            flagContainer.innerHTML = 'Flag not found.';
        }
    });

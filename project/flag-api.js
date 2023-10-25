export async function getFlag(country) {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        if (response) {
            const [countryData] = await response.json();
            return {
                flag: countryData.flags.png,
            };
        } else {
            return null;
        }
} 
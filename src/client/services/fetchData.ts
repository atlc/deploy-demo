const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

export async function fetchData(endpoint: string) {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`);

        if (!response.ok) {
            throw new Error(`HTTP Error Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Fetch error: ${error}`);
        throw error;
    }
}
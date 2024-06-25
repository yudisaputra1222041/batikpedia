import axios from 'axios';

export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

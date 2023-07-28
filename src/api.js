// api.js
import axios from 'axios';

const API_KEY = 'AIzaSyAT1Cin0DXHXEIwOPFX6Xti1Waurtir6eA';

const translateText = async (textToTranslate, targetLanguage) => {
  try {
    const response = await axios.post(
      `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
      {
        q: textToTranslate,
        target: targetLanguage,
      }
    );

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    throw new Error('Translation error occurred.');
  }
};

export default translateText;
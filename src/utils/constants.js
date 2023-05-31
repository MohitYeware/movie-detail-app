const MAX_LIMIT = 48;
const LANGUAGE = "en";
const SUGGESTIONS_LIMIT = 20;
const OFFSET = 0;

export const RAPID_URL = `https://netflix54.p.rapidapi.com/search/?offset=${OFFSET}&limit_titles=${MAX_LIMIT}&limit_suggestions=${SUGGESTIONS_LIMIT}&lang=${LANGUAGE}&query=stranger`;

export const INFO_URL = `https://netflix54.p.rapidapi.com/title/details/?lang=en&ids=`;

const MAX_LIMIT = 50;
const LANGUAGE = "en";
const SUGGESTIONS_LIMIT = 20;
const OFFSET = 0;

export const RAPID_URL = `https://netflix54.p.rapidapi.com/search/?query=stranger&offset=${OFFSET}&limit_titles=${MAX_LIMIT}&limit_suggestions=${SUGGESTIONS_LIMIT}&lang=${LANGUAGE}`;

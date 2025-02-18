import axios from 'axios';

const supabaseUrl = 'https://clzrodgbnwbehfxulpwu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsenJvZGdibndiZWhmeHVscHd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4ODcxNTEsImV4cCI6MjA1NTQ2MzE1MX0.xmC7GueN9dHtNg30eFBNTan0aXdZCws8gqwBLRMFj3A';

const api = axios.create({
  baseURL: `${supabaseUrl}/rest/v1`,
  headers: {
    apikey: supabaseKey,
    Authorization: `Bearer ${supabaseKey}`,
    'Content-Type': 'application/json',
  },
});

// Функция для получения токена пользователя
export const getToken = () => {
  return localStorage.getItem('supabase_token'); // Сохраняем токен после авторизации
};

// Добавляем токен к запросам, если пользователь авторизован
api.interceptors.request.use(config => {
  const token = getToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default api;

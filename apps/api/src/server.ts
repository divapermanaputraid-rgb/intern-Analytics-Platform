import dontenv from 'dotenv';
import app from './app.ts';

dontenv.config();

const PORT = process.env.PORT || 51213;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
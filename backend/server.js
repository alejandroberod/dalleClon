import app from './api/index.js';

const port = process.env.PORT ?? 8080;

app.listen(port, () => console.log(`Server running in port ${port}`));

const app = require('./app');
const sequelize = require('./database/database'); 
require('dotenv').config();

const PORT = process.env.PORT || 3000;

async function connectWithRetry() {
  let retries = 5;
  while (retries) {
    try {
      await sequelize.authenticate();
      console.log('Anslutning till databasen lyckades.');
      break;
    } catch (err) {
      console.log(`Kunde inte ansluta till databasen. Försöker igen om 5 sekunder... (${retries} försök kvar)`);
      retries -= 1;
      await new Promise((res) => setTimeout(res, 5000));
    }
  }

  if (retries === 0) {
    console.error('Kunde inte ansluta till databasen efter flera försök. Avslutar applikationen.');
    process.exit(1);
  }
}

async function startServer() {
  await sequelize.sync({ force: true });  
  console.log('Tabeller skapade eller uppdaterade.'); 
  app.listen(PORT, () => console.log(`Servern körs på port ${PORT}`));
}


connectWithRetry().then(startServer).catch((err) => {
  console.error('Fel vid uppstart av servern:', err);
  process.exit(1);
});

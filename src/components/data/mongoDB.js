const MongoClient = require('mongodb').MongoClient;

// Строка подключения к вашей MongoDB базе данных
//const uri = 'mongodb://localhost:27017/your-database-name';

//mongodb+srv://Andrew:PnqjPj3qRUNly0MJ@database.1xc8rqm.mongodb.net/test

const uri = 'mongodb+srv://Andrew:PnqjPj3qRUNly0MJ@database.1xc8rqm.mongodb.net/gadfly-studio'

// Опции для подключения (необязательно)
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Функция для подключения к MongoDB
export async function connectToMongoDB() {
  try {
    // Создаем клиента MongoDB
    const client = new MongoClient(uri, options);

    // Подключаемся к базе данных
    await client.connect();

    // Получаем доступ к базе данных и коллекциям
    const database = client.db();
    const collection = database.collection('foto');

    // Теперь вы можете выполнять операции с базой данных, например, вставку, поиск и обновление данных

    // Закрываем соединение при завершении работы
    client.close();
  } catch (error) {
    console.error('Ошибка при подключении к MongoDB:', error);
  }
}

// Вызываем функцию для подключения
export default connectToMongoDB();

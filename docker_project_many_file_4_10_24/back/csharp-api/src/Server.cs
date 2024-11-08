using System;
using System.Net;
using System.Text;

public class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");  // Ваше приветственное сообщение

        int port = 5001;  // Укажите желаемый порт
        var listener = new HttpListener();  // Создаём экземпляр HttpListener
        listener.Prefixes.Add($"http://*:{port}/");  // Указываем адрес и порт
        listener.Start();  // Запускаем сервер

        Console.WriteLine($"Сервер запущен на http://localhost:{port}. Нажмите Ctrl+C для остановки.");

        while (true)
        {
            var context = listener.GetContext();  // Получаем HTTP-запрос
            var response = context.Response;
            string responseString = $"Current server time: {DateTime.Now}";  // Формируем строку ответа

            Console.WriteLine(responseString);
            byte[] buffer = Encoding.UTF8.GetBytes(responseString);  // Преобразуем строку в массив байтов
            response.ContentLength64 = buffer.Length;  // Устанавливаем длину содержимого ответа
            response.OutputStream.Write(buffer, 0, buffer.Length);  // Отправляем данные в ответ
            response.OutputStream.Close();  // Закрываем поток
        }
    }
}


# Используем .NET SDK образ для стадии сборки
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем исходный код из папки src в контейнер
COPY ./src /app/src

# Компилируем приложение
RUN dotnet publish /app/src/src.csproj -c Release -o /app/out

# Используем минимальный образ .NET Runtime для стадии запуска
FROM mcr.microsoft.com/dotnet/runtime:8.0

# Копируем скомпилированное приложение из стадии build
WORKDIR /app
COPY --from=build /app/out .

EXPOSE 5001

# Запускаем приложение
ENTRYPOINT ["dotnet", "src.dll"]

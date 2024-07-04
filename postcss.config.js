module.exports = {
    plugins: {
      'postcss-preset-env': {
        // Настройка для использования современных CSS-фич и их трансформация под старые браузеры
        stage: 3,
        features: {
          'nesting-rules': true // Включение поддержки вложенности
        }
      },
      autoprefixer: {}
    }
  };
  
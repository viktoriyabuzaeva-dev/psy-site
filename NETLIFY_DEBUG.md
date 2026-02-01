# Netlify Build Debug

Этот файл для проверки сборки на Netlify.

## Ожидаемая структура после сборки:

```
out/
├── _next/
│   └── static/
│       ├── chunks/
│       ├── css/
│       └── media/ (шрифты .woff2)
├── index.html
├── photo.png
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

## Если сборка не работает:

1. Проверьте логи деплоя на Netlify
2. Убедитесь, что `npm run build` выполняется
3. Проверьте, что publish directory = "out"
4. Node.js версия должна быть 18+

## Текущая конфигурация:

- Build command: `npm run build`
- Publish directory: `out`
- Node.js: (будет определена автоматически или задайте через переменные окружения)

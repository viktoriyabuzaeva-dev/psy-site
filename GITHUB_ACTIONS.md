# Автоматический деплой на Netlify через GitHub Actions

Этот файл НЕ ОБЯЗАТЕЛЕН для работы с Netlify!

Netlify автоматически подключается к вашему GitHub репозиторию и выполняет деплой при каждом push в main ветку.

Однако, если вы хотите больше контроля над процессом деплоя или хотите деплоить через GitHub Actions, можете использовать этот пример.

## Настройка (опционально)

### Шаг 1: Получить токен Netlify

1. Зайдите в Netlify → User Settings → Applications
2. Создайте новый Personal Access Token
3. Скопируйте токен

### Шаг 2: Получить Site ID

```bash
# Если используете Netlify CLI
netlify status

# Или найдите в Netlify Dashboard → Site Settings → Site information → Site ID
```

### Шаг 3: Добавить секреты в GitHub

В вашем репозитории:
Settings → Secrets and variables → Actions → New repository secret

Добавьте:
- `NETLIFY_AUTH_TOKEN` = ваш токен из Шага 1
- `NETLIFY_SITE_ID` = ваш Site ID из Шага 2

### Шаг 4: Создать workflow файл

Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Netlify

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Build project
        run: npm run build
        env:
          NEXT_PUBLIC_SITE_URL: ${{ secrets.SITE_URL || 'https://your-site.netlify.app' }}

      - name: Deploy to Netlify (Production)
        if: github.ref == 'refs/heads/main'
        uses: nwtgck/actions-netlify@v2.0
        with:
          publish-dir: './out'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: "Deploy from GitHub Actions"
          enable-pull-request-comment: false
          enable-commit-comment: true
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}

      - name: Deploy to Netlify (Preview)
        if: github.event_name == 'pull_request'
        uses: nwtgck/actions-netlify@v2.0
        with:
          publish-dir: './out'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: "Preview deploy from PR #${{ github.event.number }}"
          enable-pull-request-comment: true
          enable-commit-comment: false
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## Что делает этот workflow

1. ✅ Запускается при каждом push в main и при создании PR
2. ✅ Проверяет код линтером
3. ✅ Собирает проект
4. ✅ Деплоит на Netlify:
   - Production деплой для main ветки
   - Preview деплой для pull requests

## Преимущества GitHub Actions

- 🔍 Видите статус сборки прямо в PR
- 🔄 Контроль над процессом деплоя
- 🧪 Можно добавить дополнительные проверки (тесты, линтеры)
- 📝 История всех деплоев в GitHub

## Когда это НЕ нужно

Для большинства проектов достаточно встроенной интеграции Netlify с GitHub:
- Автоматический деплой при push
- Preview deploys для PR
- Автоматическая установка зависимостей
- Простая настройка без дополнительных конфигов

**Рекомендация:** Начните с обычной интеграции Netlify + GitHub. Используйте GitHub Actions только если нужны специфические требования к CI/CD.

---

**Примечание:** Этот файл только для справки. Для базового деплоя используйте стандартную интеграцию Netlify с GitHub!

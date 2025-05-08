"# PlaywrightAPIAutomation" 
1. Start JSON Server:
   
json-server --watch db.json --port 3001

2. Run Playwright tests:

npx playwright test

PlaywrightAPIAutomationFramework/
├── tests/
│   └── products_api.spec.js
├── utils/
│   ├── apiClient.js
│   └── assertions.js
├── data/
│   └── productData.json
├── .env
├── .gitignore
├── package.json
├── README.md

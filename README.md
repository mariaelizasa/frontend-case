# Frontend Teste 🌸 | <img src="https://www.mikweb.com.br/wp-content/themes/alpina_theme/images/logo-banco-cora.jpg" alt="CORA logo" width="120" align="center">

---

<p align="center">
  <img src="https://github.com/user-attachments/assets/fa8e53a9-a75b-4ffe-a282-30221b81f40d" alt="App Screenshot 2" width="600">
  <img src="https://github.com/user-attachments/assets/1773a14d-8056-4db7-a919-d606687563de" alt="App Screenshot" width="600">
</p>

---

## 🚀 Como executar / How to Run

Instale as dependências / Install all the dependencies:

```sh
npm install
```

Crie um arquivo .env na pasta de frontend e adicione a URL da API como variável de ambiente no seguinte formato / Create an .env file in frontend folder and add the API URL on the following format:

```sh
Create .env
VITE_BASE_URL=http://localhost:3000/
```

Execute o frontend / Execute the frontend:

```sh
npm run dev
```

Execute o frontend / Execute the backend:

```sh
npm start
```

## 📁 Estrutura do Projeto / Project Structure

```
├── backend 📁
│   ├── controllers 📁
│   │   ├── AuthControllers.ts 🌐
│   │   └── TransactionsControllers.ts 🌐
│   ├── db 📁
│   │   ├── transactions.json
│   │   └── user.json 🌐
│   ├── middleware 📁
│   │   └── authMiddleware.json 🌐
│   └── routes 📁
│       ├── authRoutes.json 🌐
│       └── transactionRoutes.json 🌐
│
├── frontend 📁
│   └── src 📁
│       ├── @types 📁          
│       │   ├── Auth.ts 🌐
│       │   ├── TodoList.ts 🌐
│       │   └── Transactions.ts 🌐
│       ├── components 📁
│       │   └── routes 📁
│       │       └── privateRoutesService.ts 🌐
│       ├── context 📁
│       │   ├── AuthContext.ts 🌐
│       │   └── TransactionsContext.ts 🌐
│       ├── pages 📁
│       │   ├── Home 📁
│       │   ├── Login 📁
│       │   ├── TodoList 📁
│       │   └── Transactions 📁
│       ├── routes 📁
│       │   └── routes.tsx 🌐
│       ├── services 📁
│       │   ├── api.ts 🌐       
│       │   ├── Auth 📁
│       │   │   └── authService.ts 🌐
│       │   └── Transactions 📁
│       │       └── transactionsService.ts 🌐
│       ├── styles 📁
│       │   ├── global.ts 🌐
│       │   └── variables.ts 🌐
│       ├── App.tsx 🌐
│       └── main.tsx 🌐
```

## 🌟 Contribuição / Contributing

1. Fork it (`https://github.com/mariaelizasa/frontend-case.git`)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`
5. Create a new Pull Request

<p align="center">💡 Vamos construir juntos! / Let's build together! 💡</p> ```

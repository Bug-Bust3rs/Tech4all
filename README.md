# Tech4All

## Project Description

**Tech4All** is a forward-thinking project that aims to promote inclusivity in the digital world by creating tech solutions accessible to differently-abled individuals. Our mission is to ensure full participation and empowerment through inclusive design and technology.

### Key Features

- **PDF to Speech**: Integrates Google Cloud AI API to convert PDF documents to spoken word, making textual information accessible to visually impaired users.
- **E-Learning Platform**: A robust backend to support an inclusive e-learning platform, allowing users of all abilities to access educational content.
  ![image](https://github.com/priyankarpal/projectshut/assets/88102392/616c4b97-7468-4912-a28c-6893dba0f19a)

![c](https://github.com/priyankarpal/projectshut/assets/88102392/a161f613-2cf3-4148-8b32-0f2526735b85)

### Tech Stack

**Frontend**:

- Next.js with TailwindCSS

**Backend**:

- Express.js with TypeScript
- Prisma with PostgreSQL
- Turborepo

**Cloud & AI**

- AWS EC2
- Google Cloud tts API (Text-to-Speech)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- pnpm

### Installation

1. Clone the repository:

2. Install dependencies using pnpm:
   ```bash
   pnpm install
   ```

### Configuration

1. Set up environment variables:
   Create a `.env` file in the `apps/server` directory and add your configuration details:

   ```env
   PORT = 5000
   DATABASE_URL=""
   JWT_SECRET=""
   JWT_COOKIE_EXPIRES_IN="3d"
   DEV_MODE=DEV
   BACKENDURL=http://localhost:5000
   EMAIL=
   PASSWORD=
   GCP=
   ```

2. Add another `.env` in the `apps/web`

   ```env
   NEXT_PUBLIC_BACKENDURL=http://localhost:5000
   ```

### Running the Application

1. Start the development server:

   ```bash
   pnpm dev
   ```

2. The application should now be running on `http://localhost:3000` for client & `http://localhost:5000` for server

### Contributing

We welcome contributions from everyone. Here’s how you can help:

1. Fork the repository.
2. Create a new branch.
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes.
4. Commit your changes.
   ```bash
   git commit -m "Description of changes"
   ```
5. Push to your branch.
   ```bash
   git push origin feature-branch
   ```
6. Create a pull request.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
### Contributors
<a href="https://github.com/Bug-Bust3rs/tech4all/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Bug-Bust3rs/tech4all" />
</a>

---

Together, we can build a more inclusive digital world. Thank you for being a part of Tech4All.

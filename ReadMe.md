# 💪 **GraceFit Tracker** - AI-Powered Fitness Web Application 🏋️‍♀️

Welcome to **GraceFit Tracker**, the ultimate AI-powered fitness companion that helps you achieve your health goals with precision and creativity! 🏅

GraceFit brings you cutting-edge technologies like **real-time pose detection**, **AI-driven workout plans**, and **form corrections** to enhance your fitness journey like never before. It’s more than just a fitness app—it's your **personal trainer** and **workout buddy** combined! 🎯

![image alt](https://github.com/Tushar4140/The_GraceFit_Tracker/blob/main/home.png?raw=true)
---

## 🌟 **Project Overview** 💥

GraceFit Tracker is an innovative web application designed to offer:

- 🧠 **AI-Powered Workout Plans**: Tailored workout routines based on user data.
- 🔄 **Real-Time Pose Detection**: Uses **MoveNet** to monitor your form and ensure accurate repetitions.
- 🎤 **Voice Guidance & Feedback**: Real-time correction to help you stay on track.
- 📊 **Progress Tracking**: Keep tabs on your improvements with detailed workout logs.
- 📅 **Exercise Categorization & Rep Counting**: Automatic exercise recognition and rep counting.

---

## 🚀 **Key Features** ⚡

### 💡 **AI-Powered Workout Plans** 🏋️‍♂️
- **Personalize your workouts** using AI-powered recommendations based on your profile (height, weight, fitness goals).
- Integrates **OpenAI GPT** & **Google’s PaLM API** for creating the best possible routines.

### 📹 **Real-Time Exercise Monitoring** 👀
- **MoveNet** tracks your body’s key points to ensure proper form and counts your reps accurately.
- Provides **voice guidance** to correct form while exercising.

### 🏆 **Progress Tracking** 📈
- Record, track, and analyze your workout performance over time.
- Visualize your progress and stay motivated!

### 🔒 **Privacy-Conscious Design** 🔐
- Your data is **secure and private**, focusing on transparency and user privacy.

---

## ⚙️ **Installation Guide** 🛠️

### 🖥 **Frontend Setup (Next.js)**

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/gracefit-tracker.git
    cd gracefit-tracker
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

🌐 **The app will be available at**: [http://localhost:3000](http://localhost:3000)

---

### ⚙️ **Backend Setup (Node.js & Express.js)**

1. **Clone the repository** and navigate to the backend folder:
    ```bash
    git clone https://github.com/yourusername/gracefit-tracker.git
    cd gracefit-tracker-backend
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the backend server**:
    ```bash
    npm start
    ```

🌐 **Backend will be running at**: [http://localhost:8080](http://localhost:8080)

---

### 🗄️ **Database Setup (MySQL)**

1. **Create the database**:
    ```sql
    CREATE DATABASE gracefit_tracker;
    ```

2. **Ensure the database credentials** match those in your backend’s configuration.

---

## 💡 **How It Works** 🧠

### 1️⃣ **User Profile Setup** 📝
Users input their details (age, weight, height, fitness goals), allowing AI models to generate personalized workouts.

### 2️⃣ **Workout Plan Generation** 📅
The **Personalize Workout Generator** uses **OpenAI GPT** and **Google’s TextServiceClient** to create a custom workout plan suited to your goals.

### 3️⃣ **Real-Time Pose Detection** 🏃‍♀️
- **MoveNet** tracks 17 body points, ensuring proper form during each exercise.
- **Rep counting** and **form correction** through real-time feedback.

### 4️⃣ **Progress Tracking & Feedback** 📈
Track your progress with **historical workout data**, **set/reps logs**, and **PDF downloads** for offline access.

![image alt](https://github.com/Tushar4140/The_GraceFit_Tracker/blob/main/working.jpg?raw=true)
---

## 📊 **Technologies Used** 💻

| **Frontend**      | **Backend**               | **AI & ML**       | **Database**       |
|-------------------|---------------------------|-------------------|--------------------|
| **Next.js**       | **Node.js**               | **MoveNet**       | **MySQL**          |
| **Tailwind CSS**  | **Express.js**            | **OpenAI GPT**    | **Hibernate ORM**  |
| **JavaScript**    |                           | **Google PaLM API** |                    |

---

## 🏆 **Features Breakdown** 🔥

### **Personalized Workout Generator** 🏋️‍♂️
- Customizes workouts based on:
  - **Height, weight, and fitness level**
  - **Goals** (weight loss, strength, endurance)
  - **Machine learning recommendations** for optimal results.

![image alt](https://github.com/Tushar4140/The_GraceFit_Tracker/blob/main/personalize_Home.jpg?raw=true)

![image alt](https://github.com/Tushar4140/The_GraceFit_Tracker/blob/main/Personalized%20Workout%20Generator.jpg?raw=true)


### **Voice Guidance** 🎧
- Real-time feedback to guide your form during exercises.
- Provides motivational tips and form corrections.

### **Exercise Visualization** 🎥
- Visual representation of exercises to guide you step-by-step.

---

## 🌱 **Future Enhancements** 🌟

- **Advanced AI Integration**: Smarter workout suggestions based on progress.
- **Role-Based User Authentication**: Provide different levels of access (admin, user, trainer).
- **Integration with Wearables**: Sync with fitness bands and smartwatches.
- **Mobile App Expansion**: Making the experience even more portable and accessible.

---

## 📜 **License** 📄

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

## 📬 **Contact Us** 📨

For questions, suggestions, or collaboration inquiries, reach out to us:

- **Author 1**: [tp99011@Gmail.com](mailto:your-email@example.com)
- **Author 2**: [naikgayatri286@gmail.com](mailto:your-email@example.com)
---


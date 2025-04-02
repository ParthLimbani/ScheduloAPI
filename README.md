# ScheduloAPI

ScheduloAPI is a backend system built using **JavaScript** to manage college appointment bookings between students and professors. The system allows professors to set their availability, students to book appointments, and both users to manage their schedules. The project includes essential APIs.

## Features
- **User Authentication**: Secure login for students and professors.
- **Professor Availability Management**: Professors can specify their available time slots.
- **Appointment Booking**: Students can view available slots and book appointments with professors.
- **Appointment Management**: Professors can cancel appointments, and students can check their bookings.
- **Database Integration**: Stores user details, availability, and appointments while maintaining data integrity.

## User Flow
1. **Student A1** authenticates to access the system.
2. **Professor P1** authenticates and sets their available time slots.
3. **Student A1** views available slots for **Professor P1** and books an appointment for **Time T1**.
4. **Student A2** logs in and books an appointment for **Time T2** with **Professor P1**.
5. **Professor P1** cancels the appointment with **Student A1**.
6. **Student A1** checks their appointments and finds none pending.

## Database Schema
- **Users Table**: Stores student and professor details.
- **Availability Table**: Tracks professors' free slots.
- **Appointments Table**: Manages booked and canceled appointments.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB / PostgreSQL (based on implementation choice)
- **Authentication**: JWT-based authentication

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/ParthLimbani/ScheduloAPI.git
   cd ScheduloAPI
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in a `.env` file.
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints
For detailed API documentation, refer to the **Postman Collection**:
[ScheduloAPI Postman Documentation](https://documenter.getpostman.com/view/33953076/2sB2cRBj1Y)


[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/4O8cgR-D)
# Customer Portal

Welcome to the **Customer Portal**, your one-stop solution for secure and efficient international banking. This portal allows users to manage their accounts, make international payments, and gain financial insights—all in one place.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
  - [Home Page](#home-page)
  - [Registration](#registration)
  - [Login](#login)
  - [User Dashboard](#user-dashboard)
  - [Admin Dashboard](#admin-dashboard)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features


- **Secure Foreign Payments**: Facilitate secure transactions with international partners effortlessly.
- **Easy International Payments**: Send and receive payments globally with just a few clicks.
- **Instant Transfers**: Experience lightning-fast transfers with our optimized network.
- **User Dashboard**: Manage your account, view balance, and recent transactions.
- **Admin Dashboard**: Admins can approve or reject pending payments and manage users.
- **Financial Insights**: Visual representations of your financial data to help you make informed decisions.

## Demo

*Note: Since this is a mock application, a live demo is not available. Please follow the instructions below to run the application locally.*

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager
- **MongoDB** database (local or remote)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/customer-portal.git
   cd customer-portal
   ```

2. **Install Server Dependencies**

   ```bash
   cd server
   npm install
   ```

3. **Install Client Dependencies**

   ```bash
   cd ../client
   npm install
   ```

### Running the Application

#### Setting Up the Server

1. **Configure Environment Variables**

   Create a `.env` file in the `server` directory and add the following:

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

2. **Start the Server**

   ```bash
   cd server
   npm start
   ```

#### Starting the Client

1. **Run the Client Application**

   ```bash
   cd client
   npm start
   ```

2. **Access the Application**

   Open your browser and navigate to `http://localhost:3000`.

## Usage

### Home Page

The home page provides an overview of the Customer Portal's features and introduces the development team. From here, users can navigate to the Login or Register pages.

### Registration

1. **Navigate to the Registration Page**

   Click on the **Register** link in the navigation bar.

2. **Fill Out the Registration Form**

   The registration process consists of three steps:

   - **Step 1**: Enter your first name and last name.
   - **Step 2**: Provide your 13-digit ID number.
   - **Step 3**: Input your email address and create a password.

3. **Submit the Form**

   After completing all steps, submit the form to create your account.

### Login

1. **Navigate to the Login Page**

   Click on the **Login** link in the navigation bar.

2. **Enter Credentials**

   Provide your registered email address and password.

3. **Sign In**

   Click on the **Sign In** button to access your dashboard.

### User Dashboard

Once logged in, users are redirected to their personalized dashboard.

#### Navigation

- **Dashboard**: View account balance, account number, and recent transactions.
- **Make a Payment**: Send funds to other users or international partners.
- **Statements**: View detailed statements of all transactions.
- **Insights**: Access financial insights and visualizations.
- **Settings**: Update personal information and account settings.

#### Making a Payment

1. **Navigate to Make a Payment**

   Click on **Make a Payment** in the sidebar.

2. **Fill Out the Payment Form**

   - **Recipient Email**: Enter the recipient's email address.
   - **SWIFT Code**: Provide the SWIFT code for international transfers.
   - **Amount**: Specify the amount to transfer.
   - **Currency**: Select the currency.

3. **Preview and Confirm**

   Preview the payment details and confirm to initiate the transfer. Payments may require admin approval.

#### Viewing Statements

1. **Navigate to Statements**

   Click on **Statements** in the sidebar.

2. **View Transactions**

   Browse through your transaction history, filter, and search as needed.

### Admin Dashboard

Admins have additional capabilities to manage the platform.

#### Approving Payments

1. **Access Pending Payments**

   Upon logging in, admins can view all pending payments.

2. **Approve or Reject**

   Review payment details and choose to approve or reject each transaction.

#### Adding New Admins

Admins can add new admin users by filling out the **Add New Admin** form in the dashboard.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Icons**: Lucide React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **APIs**: Custom RESTful API

## Contributors

- **Hayley Hananiah Chetty** - Lead Developer
- **Mohammed Althaaf Goolam** - Backend Specialist
- **Keziah Padyachie** - Frontend Engineer
- **Sumit Raghavjee** - UI/UX Designer

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the development team for their hard work and dedication.
- Inspiration from modern banking applications and best UI/UX practices.
- Thanks to the open-source community for the tools and libraries used in this project.


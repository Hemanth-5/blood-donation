# Blood Donation App

## Overview
The Blood Donation App is a full-featured application built using the MERN (MongoDB, Express, React, Node.js) stack. This application aims to facilitate blood donations by connecting donors with recipients, providing location-based services, and ensuring the smooth management of donation requests.

## Features

### User Roles
- Donors
- Recipients
- Administrators

### Core Features
#### User Authentication and Profile Management
- **User Registration and Login**
  - Email/password registration and login
  - OAuth (Google, Facebook) login
- **Profile Management**
  - Edit personal information (name, contact details, address)
  - Set blood type and availability for donation
  - Upload profile picture

#### Donation Management
- **Donation Requests**
  - Recipients can create blood donation requests
  - Specify blood type, quantity needed, and urgency
  - Track the status of the request
- **Donation Scheduling**
  - Donors can view donation requests
  - Accept a request and schedule a donation
  - View past and upcoming donations

#### Search and Matching
- **Search for Donors/Recipients**
  - Filter by location, blood type, and availability
  - Display matched donors/recipients on a map
- **Automated Matching**
  - Automatically match recipients with compatible donors
  - Notify matched users

#### Notifications
- **Email Notifications**
  - Account creation, password reset, and profile updates
  - Donation request created, accepted, or completed
- **In-App Notifications**
  - Real-time notifications for request updates
  - Reminder notifications for scheduled donations

### Additional Features
#### Location-Based Services
- **Geo-Location**
  - Track user location (with permission)
  - Show nearby donation centers and blood banks
- **Map Integration**
  - Integrate with Google Maps for location services
  - Display directions to donation centers

#### Health and Safety
- **Health Questionnaire**
  - Donors fill out a pre-donation health questionnaire
- **Donation History**
  - Record and view donation history
  - Track health metrics related to donations

#### Admin Panel
- **User Management**
  - View and manage user accounts
  - Approve or suspend users
- **Request Management**
  - Monitor and manage donation requests
  - Resolve disputes and handle emergencies
- **Reports and Analytics**
  - Generate reports on donation statistics
  - Analyze user activity and app performance

### User Interface
#### For Donors and Recipients
- **Dashboard**
  - Overview of recent activity and important notifications
- **Profile Page**
  - View and edit personal details
- **Request Page**
  - Create, view, and manage donation requests
- **Search Page**
  - Search for donors or recipients
- **Map Page**
  - View nearby donation centers and matches

#### For Administrators
- **Admin Dashboard**
  - Overview of app statistics and recent activity
- **User Management Page**
  - List of users with management options
- **Request Management Page**
  - List of requests with status and action options
- **Reports Page**
  - Generate and view analytical reports

### Technical Requirements
#### Backend
- **Database**
  - MongoDB for storing user data, donation requests, and logs
- **Server**
  - Node.js with Express for API and server logic
- **Authentication**
  - JWT for secure user authentication

#### Frontend
- **Framework**
  - React for building user interfaces
- **State Management**
  - Redux or Context API for state management
- **Routing**
  - React Router for navigation

#### Third-Party Services
- **Email Service**
  - SendGrid or similar for sending email notifications
- **Payment Integration (Optional)**
  - Stripe or PayPal for handling donations or payments

### Security and Compliance
- **Data Encryption**
  - Encrypt sensitive user data
- **Compliance**
  - Ensure compliance with relevant regulations (e.g., GDPR, HIPAA)
- **Backups**
  - Regular database backups for data protection

### Testing and Deployment
- **Testing**
  - Unit tests, integration tests, and end-to-end tests
- **CI/CD**
  - Continuous Integration and Continuous Deployment setup
- **Hosting**
  - Deploy backend on services like Heroku or AWS
  - Host frontend on platforms like Vercel or Netlify

### Maintenance and Support
- **Documentation**
  - Comprehensive documentation for users and developers
- **Support**
  - User support through in-app chat or email
- **Updates**
  - Regular updates with new features and bug fixes
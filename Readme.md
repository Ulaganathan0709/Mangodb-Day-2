# Zen Class Program - MongoDB Database

This project is a MongoDB database setup for managing a Zen class program. The database includes collections for users, codekata, attendance, topics, tasks, company drives, and mentors. The data is inserted as dummy data, and several queries are provided to retrieve specific information from the database.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (Ensure MongoDB is running on `localhost:27017`)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/zenclass-mongodb.git
    cd zenclass-mongodb
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start MongoDB (if it's not already running):

    ```bash
    mongod
    ```

### Usage

1. Run the script to set up the database and insert dummy data:

    ```bash
    node index.js
    ```

2. The script will:

    - Connect to the `zenclass` database on your local MongoDB instance.
    - Create collections for users, codekata, attendance, topics, tasks, company_drives, and mentors.
    - Insert 10 records of dummy data into each collection.
    - Run queries to answer specific questions, with results logged to the console.

### Collections

- **users:** Stores user information.
- **codekata:** Tracks the number of problems solved by users.
- **attendance:** Records user attendance by date.
- **topics:** Contains information about topics covered in the classes.
- **tasks:** Stores details of tasks assigned to users.
- **company_drives:** Contains information about company drives and participants.
- **mentors:** Stores information about mentors and their mentee count.

### Queries

The following queries are provided in the script:

1. **Find all the topics and tasks which are taught in the month of October.**
2. **Find all the company drives which appeared between 15 Oct 2020 and 31 Oct 2020.**
3. **Find all the company drives and students who appeared for the placement.**
4. **Find the number of problems solved by each user in codekata.**
5. **Find all the mentors with a mentee count greater than 15.**
6. **Find the number of users who were absent and did not submit tasks between 15 Oct 2020 and 31 Oct 2020.**

### Example Output

The results of the queries will be logged to the console when you run the script.

```bash
node index.js

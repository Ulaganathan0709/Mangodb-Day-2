const { MongoClient } = require("mongodb");

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db("zenclass");

        // Collections
        const usersCollection = database.collection("users");
        const codekataCollection = database.collection("codekata");
        const attendanceCollection = database.collection("attendance");
        const topicsCollection = database.collection("topics");
        const tasksCollection = database.collection("tasks");
        const companyDrivesCollection = database.collection("company_drives");
        const mentorsCollection = database.collection("mentors");

        // Insert Data
        await usersCollection.insertMany([
            { user_id: 1, name: "Alice", email: "alice@example.com" },
            { user_id: 2, name: "Bob", email: "bob@example.com" },
            { user_id: 3, name: "Charlie", email: "charlie@example.com" },
            { user_id: 4, name: "David", email: "david@example.com" },
            { user_id: 5, name: "Eva", email: "eva@example.com" },
            { user_id: 6, name: "Frank", email: "frank@example.com" },
            { user_id: 7, name: "Grace", email: "grace@example.com" },
            { user_id: 8, name: "Hannah", email: "hannah@example.com" },
            { user_id: 9, name: "Ivy", email: "ivy@example.com" },
            { user_id: 10, name: "Jack", email: "jack@example.com" }
        ]);

        await codekataCollection.insertMany([
            { user_id: 1, problems_solved: 30 },
            { user_id: 2, problems_solved: 25 },
            { user_id: 3, problems_solved: 40 },
            { user_id: 4, problems_solved: 50 },
            { user_id: 5, problems_solved: 20 },
            { user_id: 6, problems_solved: 35 },
            { user_id: 7, problems_solved: 45 },
            { user_id: 8, problems_solved: 10 },
            { user_id: 9, problems_solved: 55 },
            { user_id: 10, problems_solved: 60 }
        ]);

        await attendanceCollection.insertMany([
            { user_id: 1, date: new Date("2020-10-15"), status: "present" },
            { user_id: 2, date: new Date("2020-10-15"), status: "absent" },
            { user_id: 3, date: new Date("2020-10-16"), status: "present" },
            { user_id: 4, date: new Date("2020-10-17"), status: "absent" },
            { user_id: 5, date: new Date("2020-10-18"), status: "present" },
            { user_id: 6, date: new Date("2020-10-19"), status: "present" },
            { user_id: 7, date: new Date("2020-10-20"), status: "absent" },
            { user_id: 8, date: new Date("2020-10-21"), status: "present" },
            { user_id: 9, date: new Date("2020-10-22"), status: "absent" },
            { user_id: 10, date: new Date("2020-10-23"), status: "present" }
        ]);

        await topicsCollection.insertMany([
            { topic_id: 1, title: "JavaScript", date: new Date("2020-10-05") },
            { topic_id: 2, title: "Node.js", date: new Date("2020-10-10") },
            { topic_id: 3, title: "React", date: new Date("2020-10-15") },
            { topic_id: 4, title: "MongoDB", date: new Date("2020-10-20") },
            { topic_id: 5, title: "Express.js", date: new Date("2020-10-25") },
            { topic_id: 6, title: "HTML", date: new Date("2020-09-15") },
            { topic_id: 7, title: "CSS", date: new Date("2020-09-20") },
            { topic_id: 8, title: "Bootstrap", date: new Date("2020-09-25") },
            { topic_id: 9, title: "Git", date: new Date("2020-09-30") },
            { topic_id: 10, title: "AWS", date: new Date("2020-10-30") }
        ]);

        await tasksCollection.insertMany([
            { task_id: 1, topic_id: 1, title: "JavaScript Task", date: new Date("2020-10-06") },
            { task_id: 2, topic_id: 2, title: "Node.js Task", date: new Date("2020-10-11") },
            { task_id: 3, topic_id: 3, title: "React Task", date: new Date("2020-10-16") },
            { task_id: 4, topic_id: 4, title: "MongoDB Task", date: new Date("2020-10-21") },
            { task_id: 5, topic_id: 5, title: "Express.js Task", date: new Date("2020-10-26") },
            { task_id: 6, topic_id: 6, title: "HTML Task", date: new Date("2020-09-16") },
            { task_id: 7, topic_id: 7, title: "CSS Task", date: new Date("2020-09-21") },
            { task_id: 8, topic_id: 8, title: "Bootstrap Task", date: new Date("2020-09-26") },
            { task_id: 9, topic_id: 9, title: "Git Task", date: new Date("2020-10-01") },
            { task_id: 10, topic_id: 10, title: "AWS Task", date: new Date("2020-10-31") }
        ]);

        await companyDrivesCollection.insertMany([
            { drive_id: 1, company_name: "Google", date: new Date("2020-10-16"), user_ids: [1, 3, 5] },
            { drive_id: 2, company_name: "Amazon", date: new Date("2020-10-17"), user_ids: [2, 4, 6] },
            { drive_id: 3, company_name: "Facebook", date: new Date("2020-10-18"), user_ids: [7, 8, 9] },
            { drive_id: 4, company_name: "Microsoft", date: new Date("2020-10-19"), user_ids: [1, 2, 10] },
            { drive_id: 5, company_name: "Tesla", date: new Date("2020-10-20"), user_ids: [3, 4, 5] },
            { drive_id: 6, company_name: "Apple", date: new Date("2020-10-21"), user_ids: [6, 7, 8] },
            { drive_id: 7, company_name: "Netflix", date: new Date("2020-10-22"), user_ids: [9, 10, 1] },
            { drive_id: 8, company_name: "Adobe", date: new Date("2020-10-23"), user_ids: [2, 3, 4] },
            { drive_id: 9, company_name: "Salesforce", date: new Date("2020-10-24"), user_ids: [5, 6, 7] },
            { drive_id: 10, company_name: "IBM", date: new Date("2020-10-25"), user_ids: [8, 9, 10] }
        ]);

        await mentorsCollection.insertMany([
            { mentor_id: 1, name: "John Doe", mentee_count: 10 },
            { mentor_id: 2, name: "Jane Smith", mentee_count: 16 },
            { mentor_id: 3, name: "Robert Brown", mentee_count: 18 },
            { mentor_id: 4, name: "Emily Davis", mentee_count: 14 },
            { mentor_id: 5, name: "Michael Wilson", mentee_count: 20 },
            { mentor_id: 6, name: "Sarah Johnson", mentee_count: 12 },
            { mentor_id: 7, name: "Chris Lee", mentee_count: 22 },
            { mentor_id: 8, name: "Jessica Taylor", mentee_count: 8 },
            { mentor_id: 9, name: "Paul Harris", mentee_count: 17 },
            { mentor_id: 10, name: "Nancy Clark", mentee_count: 19 }
        ]);

        console.log("Data inserted successfully!");

        // Queries to answer the questions
        console.log("Query results:");

        // Find all the topics and tasks which are taught in the month of October
        const octoberTopicsTasks = await topicsCollection.find({ date: { $gte: new Date("2020-10-01"), $lt: new Date("2020-11-01") } }).toArray();
        console.log("Topics in October:", octoberTopicsTasks);

        const octoberTasks = await tasksCollection.find({ date: { $gte: new Date("2020-10-01"), $lt: new Date("2020-11-01") } }).toArray();
        console.log("Tasks in October:", octoberTasks);

        // Find all the company drives which appeared between 15 Oct 2020 and 31 Oct 2020
        const octDrives = await companyDrivesCollection.find({ date: { $gte: new Date("2020-10-15"), $lt: new Date("2020-11-01") } }).toArray();
        console.log("Company Drives between 15-Oct-2020 and 31-Oct-2020:", octDrives);

        // Find all the company drives and students who appeared for the placement
        const companyDrivesAndStudents = await companyDrivesCollection.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "user_ids",
                    foreignField: "user_id",
                    as: "students"
                }
            }
        ]).toArray();
        console.log("Company Drives and Students:", companyDrivesAndStudents);

        // Find the number of problems solved by the user in codekata
        const problemsSolvedByUser = await codekataCollection.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "user_id",
                    foreignField: "user_id",
                    as: "user_info"
                }
            },
            {
                $project: {
                    "user_info.name": 1,
                    "problems_solved": 1
                }
            }
        ]).toArray();
        console.log("Problems Solved by Users:", problemsSolvedByUser);

        // Find all the mentors with mentee count more than 15
        const mentorsWithMoreThan15Mentees = await mentorsCollection.find({ mentee_count: { $gt: 15 } }).toArray();
        console.log("Mentors with more than 15 mentees:", mentorsWithMoreThan15Mentees);

        // Find the number of users who are absent and task is not submitted between 15 Oct 2020 and 31 Oct 2020
        const absentUsersAndUnsubmittedTasks = await attendanceCollection.aggregate([
            {
                $match: {
                    date: { $gte: new Date("2020-10-15"), $lt: new Date("2020-11-01") },
                    status: "absent"
                }
            },
            {
                $lookup: {
                    from: "tasks",
                    localField: "user_id",
                    foreignField: "user_id",
                    as: "tasks"
                }
            },
            {
                $unwind: {
                    path: "$tasks",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $match: {
                    "tasks": { $exists: false }
                }
            },
            {
                $group: {
                    _id: "$user_id",
                    count: { $sum: 1 }
                }
            }
        ]).toArray();
        console.log("Absent users and unsubmitted tasks:", absentUsersAndUnsubmittedTasks);

    } finally {
        await client.close();
    }
}

main().catch(console.error);

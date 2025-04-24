import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://test_owner:npg_3vOnBXkUQK9m@ep-billowing-sunset-a7kh036z-pooler.ap-southeast-2.aws.neon.tech/test?sslmode=require"
})

// async function createUsersTable() {
//     await client.connect();
//     const result = await client.query(`
//     CREATE TABLE users (
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(50) UNIQUE NOT NULL,
//         email VARCHAR(255) UNIQUE NOT NULL,
//         password VARCHAR(255) NOT NULL,
//         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//     );
// `)
//     console.log(result);
// }
// createUsersTable();


async function insertUsersTable() {
    await client.connect();
    const query ="INSERT INTO users (username, email, password) VALUES ($1,$2,$3);"
    const values =['username2', 'user3@example.com', 'user_password']
    const result = await client.query(query,values);

    console.log(result);

}

insertUsersTable();
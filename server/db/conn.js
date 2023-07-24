// App.js mei kam se kam code rhe eisliye yeh connection vla part yaha likh rhe alag se
const mongoose = require('mongoose');

const DB = process.env.DATABASE;
// This DB is database. This link contains username and password. So, to keep this private we are using dotenv.
//config.env file ko gitignore ke andar daal denge toh voh kbhi live hoga hei nhi

mongoose.connect(DB).then(() => {
    console.log(`CONNECTION IS SUCCESSFUL`);
}).catch((err) => console.log(`CONNECTION FAILED`));
// yeh 'promise' return kr rha hai
// DB, KE BAAD JO LIKH RHE HAI VOH DEPRECATION WARNING KO HATANE KE LIYE LIKH RHE HAI
//  DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// } YEH LIKHA THA BUT YEH LIKHNE KE BAAD CONNECTION FAILED MSG AAYA AND MERE EISMEI DEPRICATION ERROR NHI AA RHA SO I AM REMOVING THIS 
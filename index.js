

const server = require('./apis/server');


const port = process.env.PORT || 5555;
server.listen((port), () => console.log(`server listing on port ${port}`));

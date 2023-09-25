const app = require("./app");

app.listen(process.env.RUNNING_PORT, () => {
	console.log(`Server is running on port: ${process.env.RUNNING_PORT}`);
});

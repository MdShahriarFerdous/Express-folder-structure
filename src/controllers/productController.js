exports.create = async (req, res) => {
	try {
		res.status(200).json({ status: "success", data: "..information.." });
	} catch (error) {
		return res.json(error.message);
	}
};

exports.read = async (req, res) => {
	try {
		res.status(200).json({ status: "success", data: "..information.." });
	} catch (error) {
		return res.json(error.message);
	}
};

exports.delete = async (req, res) => {
	try {
		res.status(200).json({ status: "success", data: "..information.." });
	} catch (error) {
		return res.json(error.message);
	}
};

exports.update = async (req, res) => {
	try {
		res.status(200).json({ status: "success", data: "..information.." });
	} catch (error) {
		return res.json(error.message);
	}
};

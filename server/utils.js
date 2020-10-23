const compareIds = (dataId, argsId) => {
	return dataId === Number.parseInt(argsId, 10);
}

module.exports = {
	compareIds,
};
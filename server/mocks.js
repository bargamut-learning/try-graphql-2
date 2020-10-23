// Все ID записей генерятся автоматически при вставке в mLAB

module.exports = {
	movies: [
		{ id: 1, name: `Pulp Fiction`, genre: `Crime`, directorId: 1, },
		{ id: 2, name: `1984`, genre: `Sci-Fi`, directorId: 2, },
		{ id: 3, name: `V for vendetta`, genre: `Sci-Fi-Triller`, directorId: 3, },
		{ id: 4, name: `Snatch`, genre: `Crime-Comedy`, directorId: 4, },
		{ id: 5, name: `Reservoir Dogs`, genre: `Crime`, directorId: 1, },
		{ id: 6, name: `The Hateful Eight`, genre: `Crime`, directorId: 1, },
		{ id: 7, name: `Inglourious Basterds`, genre: `Crime`, directorId: 1, },
		{ id: 8, name: `Lock, Stock and Two Smoking Barrels`, genre: `Crime-Comedy`, directorId: 4, },
	],
	
	directors: [
		{ id: 1, name: `Quentin Tarantino`, age: 55, },
		{ id: 2, name: `Michael Radford`, age: 72, },
		{ id: 3, name: `James McTeigue`, age: 51, },
		{ id: 4, name: `Guy Richie`, age: 50, },
	],

	// moviesJson: [
	// 	{ "name": "Pulp Fiction", "genre": "Crime", "directorId": "5f91a483c9fd91974143e28b" },
	// 	{ "name": "1984", "genre": "Sci-Fi", "directorId": "5f91a49ec9fd91974143e7bd" },
	// 	{ "name": "V for vendetta", "genre": "Sci-Fi-Triller", "directorId": "5f91a4cfc9fd91974143f3fe" },
	// 	{ "name": "Snatch", "genre": "Crime-Comedy", "directorId": "5f91a4dec9fd91974143f731" },
	// 	{ "name": "Reservoir Dogs", "genre": "Crime", "directorId": "5f91a483c9fd91974143e28b" },
	// 	{ "name": "The Hateful Eight", "genre": "Crime", "directorId": "5f91a483c9fd91974143e28b" },
	// 	{ "name": "Inglourious Basterds", "genre": "Crime", "directorId": "5f91a483c9fd91974143e28b" },
	// 	{ "name": "Lock, Stock and Two Smoking Barrels", "genre": "Crime-Comedy", "directorId": "5f91a4dec9fd91974143f731" },
	// ],
	
	// directorsJson: [
	// 	{ "name": "Quentin Tarantino", "age": 55 },
	// 	{ "name": "Michael Radford", "age": 72 },
	// 	{ "name": "James McTeigue", "age": 51 },
	// 	{ "name": "Guy Richie", "age": 50 },
	// ],
};
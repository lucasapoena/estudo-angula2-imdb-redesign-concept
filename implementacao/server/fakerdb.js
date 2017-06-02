module.exports = function() {
    var faker = require('faker');
    var _ = require('underscore');

    return {
		movies: _.times(10, function (number) {
			return {
				id: number,
				name: faker.random.arrayElement(["The Martian", "The Revenant", "Sicario", "The Hateful Eight"]),
				description: faker.lorem.paragraph(),
				year: faker.date.past(),
				picture: faker.image.imageUrl('g','156','213')
			}
		})			
    }
}
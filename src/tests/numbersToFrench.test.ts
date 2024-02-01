import numbersToFrench from "../numbersToFrench";

describe('numbersToFrench', () => {
    it('should return ["quatre-vingt-onze", "quatre-vingt-un", "quatre-vingt", "cent-un", "deux-cents", "cent", "mille", "mille-un", "mille-cent", "deux-milles", "deux-mille-trois-cent-quatre-vingt-onze", "million"] when given [91, 81, 80, 101, 200, 100, 1000, 1001, 1100, 2000, 2391, 1000000]', () => {
        expect(numbersToFrench([91, 81, 80, 101, 200, 100, 1000, 1001, 1100, 2000, 2391, 1000000])).toEqual(["quatre-vingt-onze", "quatre-vingt-un", "quatre-vingt", "cent-un", "deux-cents", "cent", "mille", "mille-un", "mille-cent", "deux-milles", "deux-mille-trois-cent-quatre-vingt-onze", "million"]);
    });
})
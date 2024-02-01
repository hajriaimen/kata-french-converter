import numberToFrench from "../numberToFrench";

describe('numberToFrench', () => {
    it('should return "quatre-vingt-onze" when given 91', () => {
        expect(numberToFrench(91)).toBe('quatre-vingt-onze');
    });
    it('should return "quatre-vingt-un" when given 81', () => {
        expect(numberToFrench(81)).toBe('quatre-vingt-un');
    })
    it('should return "quatre-vingt" when given 80', () => {
        expect(numberToFrench(80)).toBe('quatre-vingt');
    })
    it('should return "cent-un" when given 101', () => {
        expect(numberToFrench(101)).toBe('cent-un');
    })
    it('should return "deux-cents" when given 200', () => {
        expect(numberToFrench(200)).toBe('deux-cents');
    })
    it('should return "cent" when given 100', () => {
        expect(numberToFrench(100)).toBe('cent');
    })
    it('should return "mille" when given 1000', () => {
        expect(numberToFrench(1000)).toBe('mille');
    })
    it('should return "mille-un" when given 1001', () => {
        expect(numberToFrench(1001)).toBe('mille-un');
    })
    it('should return "mille-cent" when given 1100', () => {
        expect(numberToFrench(1100)).toBe('mille-cent');
    })
    it('should return "deux-milles" when given 2000', () => {
        expect(numberToFrench(2000)).toBe('deux-milles');
    })
    it('should return "deux-milles" when given 2391', () => {
        expect(numberToFrench(2391)).toBe('deux-mille-trois-cent-quatre-vingt-onze');
    })
    it('should return "un-million" when given 1000000', () => {
        expect(numberToFrench(1000000)).toBe('million');
    })
});
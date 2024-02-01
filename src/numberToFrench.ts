interface Memo {
    [key: number]: string;
}

export default function numberToFrench(n: number, memo: Memo = {}): string {
    if(memo[n]) {
        return memo[n];
    } 

    const units: string[] = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
    const tens: string[] = ["", "", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quater-vingt-dix"];

    const largerNumbers = [
        [100, 'cent'],
        [1000, 'mille'],
        [1000000, 'million'],
        [1000000000, 'milliard']
    ] as const;

    if (n < 20) {
        memo[n] = units[n];
        return memo[n];
    } else if (n < 100) {
        if (n % 10 === 0) {
            memo[n] = tens[Math.floor(n / 10)];
            return memo[n];
        } else if (n < 70) {
            memo[n] = tens[Math.floor(n / 10)] + '-' + units[n % 10];
            return  memo[n];
        } else if (n < 80) {
            memo[n] = tens[6] + '-' + units[10 + n % 10];
            return memo[n];
        } else {
            memo[n] = tens[8] + '-' + units[n - 80];
            return memo[n];
        }
    }
    
    for(let i = 0; i < largerNumbers.length; i++) {
        const [key, value] = largerNumbers[i];
        const isBiggestLargeNumber = i === largerNumbers.length - 1;
        const [nextKey] = largerNumbers[i + 1] || [null, null];
        const coef =  isBiggestLargeNumber ? 1 : nextKey / key;

        if (n === key) {
            return value;
        } else if (n < key * 2) {
            return value + '-' + numberToFrench(n % key);
        } else if (isBiggestLargeNumber || n < key * coef) {
            if (n % key === 0) {
                memo[n] = numberToFrench(Math.floor(n / key), memo) + '-' + value + 's';
                return memo[n];
            } else {
                memo[n] = numberToFrench(Math.floor(n / key), memo) + '-' + value + '-' + numberToFrench(n % key, memo);
                return memo[n];
            }
        }
    }

    return 'error';
    // else if (n === 100) {
    //     return 'cent';
    // } else if (n < 200) {
    //     return 'cent-' + numberToFrench(n % 100);
    // } else if (n < 1000) {
    //     if (n % 100 === 0) {
    //         return numberToFrench(Math.floor(n / 100)) + '-cents';
    //     } else {
    //         return numberToFrench(Math.floor(n / 100)) + '-cent-' + numberToFrench(n % 100);
    //     }
    // } else if (n === 1000) {
    //     return 'mille';
    // } else if (n < 2000) {
    //     return 'mille-' + numberToFrench(n % 1000);
    // } else {
    //     if (n % 1000 === 0) {
    //         return numberToFrench(Math.floor(n / 1000)) + '-milles';
    //     } else {
    //         return numberToFrench(Math.floor(n / 1000)) + '-mille-' + numberToFrench(n % 1000);
    //     }
    // }
}
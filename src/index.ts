export default (str: string) => {
    if (!str) return;

    const words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (/^(http|https):\/\//.test(words[i])) continue;

        if (endsWithAny(words[i], [ ".", "?" ]) && random()) words[i] = words[i].concat(" ", pickRandom<string>([
            "OwO",
            "QwQ",
            "UwU",
            "ÚwÚ",
            "^-^",
            ":3",
            "(/ =ω=)/",
            "(ᵘʷᵘ)",
            "/^o^/"
        ]));

        if (endsWithAny(words[i], [ "!" ]) && random()) words[i] = words[i].concat(" ", pickRandom<string>([
            "><",
            "=w="
        ]));

        words[i] = words[i].replace(/[lr]/g, "w");
    }

    return words.join(" ");
}

function endsWithAny(str: string, items: string[]) {
    return items.some(x => str.trim().endsWith(x));
}

function randomNumber(max: number) {
    return Math.floor(Math.random() * max);
}

function random() {
    return randomNumber(2) == 0;
}

function pickRandom<T>(items: T[]) {
    return items[randomNumber(items.length)];
}

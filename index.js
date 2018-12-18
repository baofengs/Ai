/**
 * AI 核心代码，估值 10 亿
 */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.prompt();

rl.on('line', (line) => {
    const answer = line.trim().replace('?', '').replace('？', '').replace('吗', '');
    switch (answer) {
        case 'hello':
            console.log('world!');
            break;
        case '':
            console.log(`你想知道什么？`);
            break;
        case 'bay':
            rl.close();
            break;
        default:
            console.log(answer);
            break;
    }
    rl.prompt();
}).on('close', () => {
    console.log('再见!');
    process.exit(0);
});

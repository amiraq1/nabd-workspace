import * as os from 'os';

console.log(`معمارية المعالج: ${os.arch()}`);
console.log(`إجمالي الذاكرة: ${os.totalmem() / (1024 * 1024 * 1024)} GB`);
console.log(`الذاكرة المتاحة: ${os.freemem() / (1024 * 1024 * 1024)} GB`);
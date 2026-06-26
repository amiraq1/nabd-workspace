import * as os from 'os';

console.log(`معمارية المعالج: ${os.arch()}`);
console.log(`إجمالي الذاكرة: ${os.totalmem()}`);
console.log(`الذاكرة المتاحة: ${os.freemem()}`);
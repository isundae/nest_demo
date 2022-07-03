import { PrismaClient } from '@prisma/client';
export default new PrismaClient();

// const main = async () => {
//   try {
//     await db.$connect();
//     console.log('数据库连接成功');
//     // const res = await db.todo.create({
//     //   data: {
//     //     title: 'new title',
//     //   },
//     // });

//     const res = await db.todo.findFirst({});
//     console.log('res', res.title);
//   } catch (error) {
//     console.log(error);
//   }
// };

// main();

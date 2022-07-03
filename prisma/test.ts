/*
 * @Descripttion:
 * @version:
 * @Author🎯: isundae(微信)
 * @Email: isundae@qq.com
 * @Date: 2022-06-29 10:00:58
 * @LastEditors: isundae
 * @LastEditTime: 2022-07-03 11:08:42
 */
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

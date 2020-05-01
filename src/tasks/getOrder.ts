import "source-map-support/register";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const handler = async (): Promise<any> => {
  try {
    const res = await prisma.orders
      .findOne({ where: { order_id: 234532 } })
      .finally(async () => {
        await prisma.disconnect();
      });
    return res;
  } catch (error) {
    throw error;
  }
};

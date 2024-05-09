import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main (){
try{
    const res = await prisma.prisma_channels.findMany(
        {
            where: {
                subscribers: {
                    gte:101
                }
            }
        }
    )
    console.log(res)
}catch (err){
    console.log(err)
    }finally {
    async () => {
        await prisma.$disconnect()
    }
    }
    }
    main ();
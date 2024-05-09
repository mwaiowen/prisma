import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main (){
try{
 
        const channel =  {name: "owenmwa", descriotion: "software", subscribers: 105, link: "https://www.goojara.to"}

        const res= await prisma.prisma_channels.update({
            where: {
               id: 10
            },
            data: {
                name:"new name",
                subscribers: 2000,
            }
        })
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
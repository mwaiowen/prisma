import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main (){
try{
    
       const data = [
            
                {name: "owen mwai", descriotion: "software", subscribers: 100, link: "https://www.goojara.to"},
                {name: "owen mwai2", descriotion: "software", subscribers: 101, link: "https://www.goojara.to"},
                {name: "owen mwai3", descriotion: "software", subscribers: 102, link: "https://www.goojara.to"},
                {name: "owen mwai4", descriotion: "software", subscribers: 103, link: "https://www.goojara.to"}

            
        ]
        const res= await prisma.prisma_channels.createMany({
            data,
            skipDuplicates: true
        })
        console.log(res)
        
  

}catch (err){
console.log(err)
}finally {
async () => {
    await prisma.$disconnect 
}
}
}
main ();
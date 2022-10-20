import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const memos: Prisma.MemoCreateInput[] = [
  {
    text: 'メモ',
  },
  {
    text: 'メモ2',
  },
  {
    text: 'メモ3',
  },
]

async function main() {
  await prisma.memo.createMany({
    data: memos,
  })

  const result = await prisma.memo.findMany()
  console.log({ result })
}

main()

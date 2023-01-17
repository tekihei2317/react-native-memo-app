import { Memo, Prisma, PrismaClient } from '@prisma/client'

type camelModelName = Uncapitalize<Prisma.ModelName>

export type PaginationOptions<Model extends camelModelName> = {
  page: number
  perPage: number
} & Pick<GetFindManyArgsByModelName[Model], 'where' | 'orderBy'>

export type PaginatedData<Item> = {
  items: Item[]
  count: number
  pageCount: number
}

// 以下の2つの型を手書きする必要があります（これ、なんとかならないかな...？）
type GetFindManyArgsByModelName = {
  memo: Prisma.MemoFindManyArgs
}

type GetModelTypeByModelName = {
  memo: Memo
}

export async function getPaginatedData(
  prisma: PrismaClient,
  model: camelModelName,
  options: PaginationOptions<typeof model>
): Promise<PaginatedData<GetModelTypeByModelName[typeof model]>> {
  const [items, count] = await Promise.all([
    prisma[model].findMany({
      where: options.where,
      orderBy: options.orderBy,
      skip: options.perPage * (options.page - 1),
      take: options.perPage,
    }),
    prisma[model].count({ where: options.where }),
  ])

  return {
    items: items,
    count,
    pageCount: Math.ceil(count / options.perPage),
  }
}

import db from "../../libs/configs/db";
export async function newCriarActividade(
  clienteId: string,
  categoriaId: string,
  prestadorId: string,
  descricao: string
) {
  try {
    const dbResponse = await db.atividade.create({
      data: {
        Cliente: {
          connect: {
            id: clienteId,
          },
        },
        Prestador: {
          connect: {
            id: prestadorId,
          },
        },
        Categoria: {
          connect: {
            id: categoriaId,
          },
        },
        descricao: descricao,
      },
    });
    return dbResponse;
  } catch (e) {
    return new Error(e);
  }
}

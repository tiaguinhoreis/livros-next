import type { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivro } from './index'; // ajuste conforme necessário

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'DELETE') {
        try {
            const codigo = Number(req.query.codigo);
            ControleLivro.excluir(codigo);
            res.status(200).json({ message: 'Livro excluído com sucesso' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao excluir o livro' });
        }
    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
};

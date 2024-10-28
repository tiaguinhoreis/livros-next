import type { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '../../api/editoras/index';

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const codEditora = Number(req.query.codEditora);
            const nomeEditora = controleEditora.getNomeEditora(codEditora);
            res.status(200).json({ nome: nomeEditora });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter o nome da editora' });
        }
    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
};

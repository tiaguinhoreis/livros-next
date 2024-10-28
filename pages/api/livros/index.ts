import type { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivro } from '../../../componentes/controle/ControleLivros'; // ajuste conforme necessário

const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const livros = controleLivro.obterLivros();
            res.status(200).json(livros);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter os livros' });
        }
    } else if (req.method === 'POST') {
        try {
            const novoLivro = req.body;
            controleLivro.incluir(novoLivro);
            res.status(200).json({ message: 'Livro incluído com sucesso' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao incluir o livro' });
        }
    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
};

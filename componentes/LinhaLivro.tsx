import { ControleEditora } from './controle/ControleEditora';

interface LinhaLivroProps {
    livro: any; // substitua por um tipo adequado
    excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    const { livro, excluir } = props;
    const controleEditora = new ControleEditora();
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>{livro.titulo}</td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>{livro.autores.join(', ')}</td>
            <td>
                <button className="btn btn-danger" onClick={excluir}>
                    Excluir
                </button>
            </td>
        </tr>
    );
};

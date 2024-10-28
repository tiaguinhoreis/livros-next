import Head from 'next/head';
import { Menu } from '../componentes/Menu';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Loja Next</title>
            </Head>
            <Menu />
            <main className="main">
                <h1 className="title">Página Inicial</h1>
            </main>
        </div>
    );
}

import { Outlet, Link } from 'react-router-dom';

function Home(){
        return(
            <>
            <Link to="/"><h1>Bleach</h1></Link>
            <p>Seja Bem vindo(a)</p>
            <Link to="/register">Cadastrar</Link>
            <Link to="/login">Login</Link>
            <Link to="/pageAnime">Anime/Filmes</Link>
            <Outlet/>  
        </>            
    )   
}  
export default Home;
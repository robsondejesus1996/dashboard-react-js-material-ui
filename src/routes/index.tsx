import { Button } from '@mui/material';
import { Routes, Route, Navigate} from 'react-router-dom'

export const AppRouter = () =>{
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<p> <Button variant='contained' color='primary'>Olá mundo</Button> </p>}/>

            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
}
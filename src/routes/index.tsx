import { Button } from '@mui/material';
import { Routes, Route, Navigate} from 'react-router-dom'
import { useAppThemeContext } from '../shared/contexts';

export const AppRouter = () =>{
    const { toggleTheme } = useAppThemeContext();
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<p> <Button variant='contained' color='primary' onClick={toggleTheme }>Togle Theme</Button> </p>}/>

            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
}
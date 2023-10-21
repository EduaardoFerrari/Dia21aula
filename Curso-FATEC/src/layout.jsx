import { HeaderComponent } from "./shared/components/Header";
import { Outlet } from 'react-router-dom';

export function Layout( ){
    return (
    <section>
        <HeaderComponent /> 

        <Outlet />
    </section>
    );
}
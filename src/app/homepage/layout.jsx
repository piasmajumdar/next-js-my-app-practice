
import Sidebar from './../../components/Sidebar/Sidebar';
const HomePageLayout = ({children}) => {
    return (
        <div>
            <Sidebar></Sidebar>
            {children}
        </div>
    );
};

export default HomePageLayout;
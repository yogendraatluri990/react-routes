import {Route, Routes} from 'react-router-dom';


import App from './app';
import Welcome from './components/welcome';
import Invoices from './components/invoices';
import InvoiceDetail from './components/invoice-detail';
import NoMatch from './components/no-match';

const CustomRoutes = () => {
    return (
        <Routes>
         <Route path="/" element={<App />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="invoices" element={<Invoices />}>
            <Route path=":invoiceId" element={<InvoiceDetail />} />
          </Route>
        </Route>
        <Route path="*" element={<NoMatch />} />
        </Routes>
    )
}

export default CustomRoutes;
import { Outlet, Link} from "react-router-dom";
import { getInvoices } from "../../data/data";

const Invoices = () => {
  const invoices = getInvoices();

  return (
    <div className="breadcrumb invoice-container">
      <table className="table  invoice-table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
            <th scope="col">Amount</th>
            <th scope="col">Due</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
              <>
                 
                  <tr key={invoice.id}>
                <td>{invoice.name}</td>
                      <td className="table-hover">
                          <Link to={`/invoice/${invoice.number}`} key={invoice.id}>{invoice.number} </Link></td>
                <td>{invoice.amount}</td>
                <td className="table-danger">{invoice.due}</td>
                      </tr>
                 
            </>
          ))}
        </tbody>
      </table>
      <div className="invoice-detail-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Invoices;

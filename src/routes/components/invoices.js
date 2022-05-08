import { Outlet, Link } from "react-router-dom";
import { getInvoices } from "../../data/data";

const Invoices = () => {
  const invoices = getInvoices();

  return (
    <>
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
              <tr key={invoice.id}>
                <td>
                  <Link to={`/invoices/${invoice.number}`}>
                    {invoice.name}{" "}
                  </Link>
                </td>
                <td className="table-hover" key={invoice.id}>
                  <Link to={`/invoices/${invoice.number}`}>
                    {invoice.number}{" "}
                  </Link>
                </td>
                <td>
                  <Link to={`/invoices/${invoice.number}`}>
                    {invoice.amount}{" "}
                  </Link>
                </td>
                <td className="table-danger">
                  <Link to={`/invoices/${invoice.number}`}>{invoice.due} </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="invoice-detail-container">
        <Outlet />
      </div>
    </>
  );
};

export default Invoices;

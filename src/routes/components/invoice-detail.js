import { useParams } from "react-router-dom";
const InvoiceDetail = (props) => {
  const params = useParams();
  return (
    <div className="card border-default mb-5 invoice-detail-container">
      <div className="card-header">{`Welcome to Invoice Detail Page`}</div>
      <div className="card-body">
        <h4 className="card-title">Invoice Detail</h4>
        <p className="card-text">{params.invoiceId}</p>
      </div>
    </div>
  );
};

export default InvoiceDetail;

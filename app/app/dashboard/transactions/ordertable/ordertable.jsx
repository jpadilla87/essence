import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./ordersource";

import "./ordertable.scss";
// import { Link } from "react-router-dom";

const OrderTable = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="ordertable">
      <div className="ordertableTitle">
        <span>Previous Transactions</span>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};
export default OrderTable;

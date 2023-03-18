import { INFO } from "@/constants/info";
import { getProfileImageSrc } from "@/utils/lib";
import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import Detail from "../shared/Detail";

const columns: TableColumn<COMPAIGN.Request>[] = [
  {
    name: "Recipient",
    selector: (row) => row.recipient,
    cell: (row) => (
      <div className="flex items-center gap-2">
        <img
          src={getProfileImageSrc(row.recipient)}
          alt={`picture of ${row.recipient}`}
          className="h-7 w-7 overflow-hidden rounded-full object-cover"
        />
        <p className="text-xs text-gray-400">
          <span className="text-gray-300">by</span>{" "}
          <span className="cursor-pointer hover:underline">
            {row.recipient}
          </span>
        </p>
      </div>
    ),
    grow: 2,
  },
  {
    name: "Amount",
    selector: (row) => `${row.amount} ${INFO.CURRENCY}`,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    cell: (row) => (
      <p
        className={`rounded-full px-2 py-0.5 text-xs text-white ${
          row.status === "rejected"
            ? "bg-red-500"
            : row.status === "approved"
            ? "bg-green-500"
            : "bg-yellow-500"
        } `}
      >
        {row.status}
      </p>
    ),
  },
  {
    name: "Number of Approvals",
    selector: (row) => row.approvalsNum,
    sortable: true,
  },
  {
    name: "Actions",
    cell: (row) => {
      const onApprove = () => {
        // TODO: Approve request
        console.log("Approve");
      };
      const onReject = () => {
        // TODO: Reject request
        console.log("Reject");
      };
      return (
        <div className="flex gap-2">
          <button onClick={onApprove} className="btn !bg-green-500 px-2 py-1">
            Approve
          </button>
          <button onClick={onReject} className="btn !bg-red-500 px-2 py-1">
            Reject
          </button>
        </div>
      );
    },
    grow: 2,
  },
];

type Props = {
  requests: COMPAIGN.Request[];
};

const CompaignRequestsTable: React.FC<Props> = ({ requests }) => {
  return (
    <DataTable
      columns={columns}
      className="mt-2"
      data={requests}
      expandableRows
      expandableRowsComponent={({ data: { description } }) => (
        <div className="p-2">
          <div className="flex flex-col gap-y-1  rounded-sm bg-gray-700 p-4 transition duration-200 hover:bg-gray-600">
            <span className="text-sm text-gray-300">Description: </span>
            <p className="text-xs">{description}</p>
          </div>
        </div>
      )}
    />
  );
};

export default CompaignRequestsTable;

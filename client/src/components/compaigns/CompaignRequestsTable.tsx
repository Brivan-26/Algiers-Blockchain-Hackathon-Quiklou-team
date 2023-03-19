import { INFO } from "@/constants/info";
import useHook from "@/hooks/useHook";
import { getProfileImageSrc } from "@/utils/lib";
import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import Detail from "../shared/Detail";

type Props = {
  requests: COMPAIGN.Request[];
  owner: string;
};

const CompaignRequestsTable: React.FC<Props> = ({ owner, requests }) => {
  const { walletAddress, contract, signer } = useHook();
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
            <span
              title={row.recipient}
              className="cursor-pointer hover:underline"
            >
              {row.recipient.substring(0, 20)}...
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
        const onApprove = async () => {
          // ! approve request
          console.log(row)
        };
        if (owner.toLowerCase() === walletAddress) return null;
        return (
          <div className="flex gap-2">
            {Boolean(
              row.voters.find((voter) => voter.toLowerCase() === walletAddress)
            ) ? (
              <p>You alread approved this request</p>
            ) : (
              <>
                <button
                  onClick={onApprove}
                  className="btn !bg-green-500 px-2 py-1"
                >
                  Approve
                </button>
              </>
            )}
          </div>
        );
      },
      grow: 2,
    },
  ];
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

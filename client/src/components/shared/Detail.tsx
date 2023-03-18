type DetailProps = {
  label: string;
  value: string | number | React.ReactNode;
};

const Detail: React.FC<DetailProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col gap-y-1  rounded-lg bg-gray-700 p-4 transition duration-200 hover:bg-gray-600">
      <span className="text-sm text-gray-300">{label}</span>
      {typeof value === "string" || typeof value === "number" ? (
        <p className="text-sm">{value}</p>
      ) : (
        <div>{value}</div>
      )}
    </div>
  );
};

export default Detail;

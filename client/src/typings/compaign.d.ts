declare module COMPAIGN {
  type Compaign = {
    id: number;
    owner: COMMUN.Adress;
    title: string;
    story: string;
    goal: number;
    numOfContributers: number;
    contributors?: COMMUN.Adress[];
    launchDay: Date;
    tokenValue?: number;
    maxReachTime: Date;
    contributed?: boolean;
    requests?: Request[];
    funds?: number;
    icoToken?: string
  };

  type NewCompaign = Omit<
    Compaign,
    | "owner"
    | "numOfContributers"
    | "contributors"
    | "launchDay"
    | "id"
    | "contributed"
    | "requests"
  >;

  type Request = {
    description: string;
    amount: number;
    recipient: COMMUN.Adress;
    status: RequestStatus;
    approvalsNum: number;
  };

  type RequestStatus = "pending" | "approved" | "rejected";
}

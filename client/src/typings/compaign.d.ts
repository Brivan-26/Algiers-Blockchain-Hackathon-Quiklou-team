declare module COMPAIGN {
  type Compaign = {
    id: number;
    owner: COMMUN.Adress;
    title: string;
    story: string;
    goal: number;
    numOfContributers: number;
    contributors: COMMUN.Adress[];
    launchDay: Date;
    maxReachTime: Date;
    contributed?: boolean;
    requests?: Request[];
  };

  type NewCompaign = Omit<
    Compaign,
    "owner" | "numOfContributers" | "contributors" | "launchDay"
  >;

  type Request = {
    description: string;
    amount: number;
    recipient: COMMUN.Adress;
    completed: RequestStatus;
    approvalsNum: number;
  };

  type RequestStatus = "pending" | "approved" | "rejected";
}

type TypeRoute = {
  path: string;
  title: string;
  pathName: string;
};

export const ROUTES = {
  COMPAIGNS_HOME: {
    path: "/compaigns",
    title: "Compaigns",
    pathName: "/compaigns",
  },
  CREATE_COMPAIGN: {
    path: "/compaigns/create",
    title: "Create Compaign",
    pathName: "/compaigns/create",
  },
} satisfies Record<string, TypeRoute>;

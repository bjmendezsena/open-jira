interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: String;
  status: String;
  createdAt: Number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "Pending: Nulla amet deserunt culpa aliqua laboris pariatur culpa et eiusmod laborum ullamco esse mollit reprehenderit.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description:
        "In-progress: Cupidatat Lorem quis exercitation Lorem culpa quis occaecat mollit velit ad.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        "Finished: Id adipisicing excepteur est ex laborum mollit mollit ex et non.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

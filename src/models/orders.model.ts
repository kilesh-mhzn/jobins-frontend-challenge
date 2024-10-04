export enum STATUS {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export type Order = {
  id: string;
  customerName: string;
  date: string;
  total: string;
  method: string;
  status: keyof typeof STATUS;
};

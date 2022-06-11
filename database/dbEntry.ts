import { isValidObjectId } from "mongoose";
import { Entry, IEntry } from "../models";
import { connect, disconnect } from "./db";

export const getEntryById = async (id: string): Promise<IEntry | null> => {
  if (!isValidObjectId(id)) return null;

  await connect();
  const entry = await Entry.findById(id).lean();

  await disconnect();

  return JSON.parse(JSON.stringify(entry));
};

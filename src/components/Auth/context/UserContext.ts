import { createContext } from "react";
import { User } from "../../../services/Admin";

export const UserContext = createContext<User | null>(null) ;
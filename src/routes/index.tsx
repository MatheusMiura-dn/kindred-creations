import { createFileRoute } from "@tanstack/react-router";
import MathBoard from "../components/MathBoard";
export const Route = createFileRoute("/")({ component: MathBoard });

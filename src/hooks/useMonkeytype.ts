import { useTelemetry } from "./useTelemetry";
import {
  fetchMonkeytypeTelemetry,
  FALLBACK_MONKEYTYPE,
  type MonkeytypeTelemetry,
} from "../services/monkeytypeService";

export function useMonkeytype() {
  return useTelemetry<MonkeytypeTelemetry>(fetchMonkeytypeTelemetry, FALLBACK_MONKEYTYPE);
}

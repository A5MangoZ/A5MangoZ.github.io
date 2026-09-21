import { useTelemetry } from "./useTelemetry";
import {
  fetchGithubTelemetry,
  FALLBACK_GITHUB,
  type GithubTelemetry,
} from "../services/githubService";

export function useGithub() {
  return useTelemetry<GithubTelemetry>(fetchGithubTelemetry, FALLBACK_GITHUB);
}

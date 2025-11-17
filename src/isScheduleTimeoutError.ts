import { SCHEDULE_TIMEOUT } from "./const.ts";

export function isScheduleTimeoutError(error: unknown): error is Error {
  return error instanceof Error && error.message === SCHEDULE_TIMEOUT;
}

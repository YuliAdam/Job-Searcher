import { getAllJob } from '@api/apiRequests';
import type { GetJobResponse } from '@components/interfaces';

export default async function CardListWrapper() {
  const response: GetJobResponse = await (await getAllJob()).json();

  return <div>{response.jobs.toString()}</div>;
}

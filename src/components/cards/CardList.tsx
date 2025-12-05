import { getAllJob } from '@api/apiRequests';
import type { GetJobResponse } from '@components/interfaces';
import Card from './Card';

export default async function CardList() {
  const response: GetJobResponse = await (await getAllJob()).json();
  const length = response.jobCount;
  console.log(response.jobs[0]);
  return (
    <div>
      {response.jobs.map((i) => (
        <Card job={i} key={i.id} />
      ))}
    </div>
  );
}

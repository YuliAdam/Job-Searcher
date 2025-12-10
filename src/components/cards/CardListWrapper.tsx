import { getAllJob } from '@api/apiRequests';
import type { GetJobResponse } from '@components/interfaces';
import CardList from './CardList';

export default async function CardListWrapper() {
  const response: GetJobResponse = await (await getAllJob()).json();
  return <CardList response={response} />;
}

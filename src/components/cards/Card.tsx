import type { Job } from '@components/interfaces';

interface Props {
  job: Job;
}

export default function Card(props: Props) {
  return (
    <div>
      <h1>{props.job.jobTitle.replaceAll('&amp;#8211;', '-')}</h1>
      <div>
        {props.job.jobIndustry.map((i) => (
          <p>{i}</p>
        ))}
      </div>
      <p>{props.job.jobLevel}</p>
      <div>
        {props.job.jobType.map((i) => (
          <p>{i}</p>
        ))}
      </div>
      <div>
        <p>{props.job.companyName}</p>
        <img src={props.job.companyLogo} />
      </div>
      <p>{props.job.jobGeo}</p>
      <a href={props.job.url}>Go to offer</a>
    </div>
  );
}

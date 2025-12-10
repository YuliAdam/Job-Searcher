import type { Job } from '@components/interfaces';
import styles from './card.module.scss';

interface Props {
  job: Job;
}

export default function Card(props: Props) {
  return (
    <div className={styles.card}>
      <h1>
        {props.job.jobTitle
          .replaceAll('&amp;#8211;', '-')
          .replaceAll('&amp;#038;', '&')}
      </h1>
      <div className={styles.card_info}>
        <p>
          {`Industry: ${props.job.jobIndustry.join(' ,').replaceAll('&amp;', '&')}; 
            Level: ${props.job.jobLevel}; 
            Type: ${props.job.jobType.join(' ,')}; 
            Company: ${props.job.companyName}; 
            Location: ${props.job.jobGeo}.`}
        </p>
        <img src={props.job.companyLogo} alt="company logo" />
      </div>
      <a href={props.job.url} target="_blank">
        Go to offer
      </a>
    </div>
  );
}

import React from 'react';
import Data from '../json/Data.json';
import styles from '../css/Jobs.module.css';
import { useTag } from './Context/TagContext';

export function JobsContent() {
  const { addTag } = useTag();

  const handleTagClick = (tag) => {
    addTag(tag);
  };

  return (
    <div className={styles.jobListings}>
      {Data.map((job) => (
        <div
          key={job.id}
          className={`${styles.jobCard} ${job.featured ? styles.featured : ''}`}
        >
          <div className={styles.content}>
            <div className={styles.jobCardHeader}>
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className={styles.jobLogo}
              />
            </div>
            <div className={styles.jobInfo}>
              <div className={styles.companyInfo}>
                <h2 className={styles.companyName}>{job.company}</h2>
                {job.new && <span className={`${styles.badge} ${styles.new}`}>NEW!</span>}
                {job.featured && <span className={`${styles.badge} ${styles.featured}`}>FEATURED</span>}
              </div>
              <h3 className={styles.jobPosition}>{job.position}</h3>
              <div className={styles.jobDetails}>
                <span>{job.postedAt}</span> · <span>{job.contract}</span> ·{' '}
                <span>{job.location}</span>
              </div>
            </div>
          </div>
          <div className={styles.jobTags}>
            <span className={styles.tag} onClick={() => handleTagClick(job.role)}>{job.role}</span>
            <span className={styles.tag} onClick={() => handleTagClick(job.level)}>{job.level}</span>
            {job.languages.map((language, index) => (
              <span key={index} className={styles.tag} onClick={() => handleTagClick(language)}>
                {language}
              </span>
            ))}
            {job.tools.map((tool, index) => (
              <span key={index} className={styles.tag} onClick={() => handleTagClick(tool)}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

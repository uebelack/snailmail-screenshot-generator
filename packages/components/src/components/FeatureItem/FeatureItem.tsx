import { Feature } from '../../types';
import styles from './FeatureItem.module.scss';

export interface FeatureItemProps {
  feature: Feature;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function FeatureItem({
  feature,
  className,
  iconClassName,
  titleClassName,
  descriptionClassName,
}: FeatureItemProps) {
  return (
    <div className={`${styles.feature} ${className || ''}`}>
      <div className={`${styles.featureIcon} ${iconClassName || ''}`}>
        <i className={`fa fa-${feature.icon}`} />
      </div>
      <div className={styles.featureDetails}>
        <div className={`${styles.featureTitle} ${titleClassName || ''}`}>
          {feature.title}
        </div>
        <div className={`${styles.featureDescription} ${descriptionClassName || ''}`}>
          {feature.description}
        </div>
      </div>
    </div>
  );
}

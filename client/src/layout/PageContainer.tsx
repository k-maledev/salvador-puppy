import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

import styles from "../style";

const PageContainer: React.FC<{
  title: string;
  className?: string;
  children: ReactNode;
}> = ({ title, className, children }) => {
  return (
    <div className={`${styles.pageContainer} ${className}`}>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      {children}
    </div>
  );
};

export default PageContainer;

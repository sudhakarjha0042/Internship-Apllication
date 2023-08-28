import Header from "../components/header";
import Header1Fullstacktext from "../components/header1-fullstacktext";
import Mainimagesection from "../components/mainimagesection";
import Acorcebysectiontilltags from "../components/acorcebysectiontilltags";
import CardCertificateSection from "../components/card-certificate-section";
import FotterComponent from "../components/fotter-component";
import styles from "./index.module.css";
const MainDiv = () => {
  return (
    <div className={styles.mainDiv}>
      <Header />
      <div className={styles.contentSection}>
        <div className={styles.tutorCourseDetailsPage}>
          <Header1Fullstacktext />
          <div className={styles.tutorRow}>
            <Mainimagesection />
            <Acorcebysectiontilltags />
          </div>
        </div>
        <CardCertificateSection />
        <FotterComponent />
      </div>
    </div>
  );
};

export default MainDiv;

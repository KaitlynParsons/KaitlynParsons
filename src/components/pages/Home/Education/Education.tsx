import { IGenericCardProps } from "../../../../interfaces/GenericCardProps";
import GenericCard from "../../../layouts/GenericCard/GenericCard";
import "./Education.scss";

const education: IGenericCardProps[] = [
  {
    headline: {
      title: "Coursera",
      subtitle: "Preparing for Google Cloud Certification: Cloud Data Engineer",
    },
    duration: "Issued Nov 2021",
    link: {
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/2ECM2VFFWJ2A",
      text: "Credentials ID 2ECM2VFFWJ2A",
    },
  },
  {
    headline: {
      title: "TAFE Queensland",
      subtitle: "Diploma, Software Development",
    },
    duration: "2018 - 2018",
  },
  {
    headline: {
      title: "Pine Rivers State High School",
      subtitle: "Queensland Certificate of Education",
    },
    duration: "Jan 2012 - Nov 2016",
  },
];

const Education = () => {
  return (
    <div>
      <h3>Education</h3>
      {education.map((ed: IGenericCardProps, index: number) => (
        <GenericCard
          key={index}
          headline={ed.headline}
          duration={ed.duration}
          description={ed.description}
          link={ed.link}
        />
      ))}
    </div>
  );
};

export default Education;

import { SectionContainer } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionContainer>
    <h1>{title}</h1>
    {children}
  </SectionContainer>
);

export default Section;

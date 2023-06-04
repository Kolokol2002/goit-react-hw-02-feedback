import { Button, Container } from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Container>
    {options.map(({ id, type }) => (
      <Button key={id} onClick={onLeaveFeedback}>
        {type}
      </Button>
    ))}
  </Container>
);

export default FeedbackOptions;

import React from 'react';
import { Container } from './styles';

const List = ({ data, keyExtractor, renderItem: Component }) => {
  // Necessary for targeting Component key prop data
  const target = Component.displayName
    ? Component.displayName.toLowerCase()
    : 'item';

  return (
    <Container>
      {data.map((item, index) => (
        <Component key={keyExtractor(item, index)} {...{ [target]: item }} />
      ))}
    </Container>
  );
};

List.displayName = 'List';
List.defaultProps = {
  data: [],
  keyExtractor: (_, index) => index,
  renderItem: () => null, // Empty Component
};

export default List;

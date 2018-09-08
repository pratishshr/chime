import React, { Component } from 'react';

import SearchRow from 'components/search-row';
import Section, { ListSection, QueueSection } from 'components/section';

class Search extends Component {
  render() {
    return (
      <Section>
        <ListSection>
          <SearchRow />
          <SearchRow />
          <SearchRow />
        </ListSection>
        <QueueSection />
      </Section>
    );
  }
}

export default Search;

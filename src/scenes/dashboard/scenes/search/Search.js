import React, { Component } from 'react';

import SearchRow from 'components/search-row';
import Queue from 'components/Queue';
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
        <QueueSection>
          <Queue />
        </QueueSection>
      </Section>
    );
  }
}

export default Search;

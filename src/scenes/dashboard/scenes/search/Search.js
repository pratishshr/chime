import React, { Component } from 'react';

import SearchRow from 'components/search-row';
import Queue from 'components/queue';
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
          <Queue />
          <Queue />
          <Queue />
          <Queue />
          <Queue />
        </QueueSection>
      </Section>
    );
  }
}

export default Search;

import React, { Component } from 'react';

import SearchRow from 'components/search-row';
import Section, { ListSection } from 'components/section';

class Search extends Component {
  render() {
    return (
      <Section>
        <ListSection>
          <SearchRow />
        </ListSection>
      </Section>
    );
  }
}

export default Search;

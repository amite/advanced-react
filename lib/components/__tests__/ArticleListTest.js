import React from 'react'

import Article from '../Article'
import ArticleList from '../ArticleList'
import { shallow } from 'enzyme'

describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' },
    },
  }

  Article.propTypes = {}

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    )

    expect(wrapper.find('ArticleContainer').length).toBe(2)
    expect(wrapper).toMatchSnapshot()
  })

})

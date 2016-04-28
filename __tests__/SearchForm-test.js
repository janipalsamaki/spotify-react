'use strict';

jest.unmock('../js/components/SearchForm');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SearchForm from '../js/components/SearchForm';

describe('SearchForm', () => {

  it('should render a form, a search field and a submit button', () => {

    let searchForm = TestUtils.renderIntoDocument(<SearchForm/>);
    let searchFormNode = ReactDOM.findDOMNode(searchForm);
    let form = searchFormNode.getElementsByTagName('form')[0];
    let searchField = form.getElementsByTagName('input')[0];
    let submitButton = form.getElementsByTagName('input')[1];

    expect(form).toBeDefined();
    expect(searchField).toBeDefined();
    expect(searchField.getAttribute('type')).toEqual('text');
    expect(submitButton).toBeDefined();
    expect(submitButton.getAttribute('type')).toEqual('submit');
  });

});
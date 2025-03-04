import React from 'react';

import { storiesOf } from '@storybook/react';

import { options1 } from './storyUtil';
import { options200 } from './storyUtil';
import { groupedOptions } from './storyUtil';
import { optionsLongLabel } from './storyUtil';
import WindowedSelect from '../src';

function StoryWrapper (props) {
  return (
    <>
      <div>Windowed:</div>
      <WindowedSelect
        windowThreshold={2}
        {...props}
      />
      <div style={{ marginTop: 320 }}/>
      <div>Not windowed:</div>
      <WindowedSelect {...props} />
    </>
  );
}

storiesOf('Select', module)
.add('Default', () => (
  <StoryWrapper
    id="default"
    classNamePrefix="default"
    options={options200}
  />
))
.add('grouped', () => (
  <StoryWrapper
    id="grouped"
    classNamePrefix="grouped"
    options={groupedOptions}
    menuIsOpen
  />
))
.add('1 option', () => (
  <StoryWrapper
    id="1option"
    classNamePrefix="1option"
    options={options1}
    menuIsOpen
  />
))
.add('no options msg (with dynamic input value)', () => (
  <StoryWrapper
    id="no-options-msg-with-dynamic-input-value"
    classNamePrefix="no-options-msg-with-dynamic-input-value"
    menuIsOpen
    options={[]}
    noOptionsMessage={({ inputValue } = {}) => `No ${inputValue !== '' ? `${inputValue} ` : ''}options`}
  />
))
.add('loading msg (with dynamic input value', () => (
  <StoryWrapper
    id="loading-msg-with-dynamic-input-value"
    classNamePrefix="loading-msg-with-dynamic-input-value"
    isLoading
    loadingMessage={({ inputValue }) => `Loading ${inputValue}...`}
    menuIsOpen
    options={[]}
  />
))
.add('custom styles/height', () => (
  <StoryWrapper
    menuIsOpen
    options={options200}
    styles={{
      option: (base) => ({
        ...base,
        fontSize: 20,
        height: 40,
      }),
      menuList: (base) => ({
        ...base,
        maxHeight: 200,
      })
    }}
  />
))
.add('custom styles/height & grouped', () => (
  <StoryWrapper
    menuIsOpen
    options={groupedOptions}
    styles={{
      groupHeading: (base) => ({
        ...base,
        height: 100,
      }),
      option: (base) => ({
        ...base,
        fontSize: 20,
        height: 40,
      }),
    }}
  />
))
.add('long label text', () => (
  <div>
    <p>Don't explicitly set an option height in the styles prop if you want a dynamic/variable height for options with long labels.</p>
    <StoryWrapper
      id="default"
      classNamePrefix="default"
      options={optionsLongLabel}
    />
  </div>
))
.add('custom styles + long label text', () => (
  <StoryWrapper
    menuIsOpen
    options={optionsLongLabel}
    styles={{
      option: (base) => ({
        ...base,
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20,
      }),
      menuList: (base) => ({
        ...base,
        maxHeight: 200,
      })
    }}
  />
));
import { html, fixture, expect } from '@open-wc/testing';

import '../page-one.js';
import { PageOne } from '../src/PageOne.js';

describe('PageOne', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el: PageOne = await fixture(html`
      <page-one></page-one>
    `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el: PageOne = await fixture(html`
      <page-one></page-one>
    `);

    // Assert non-null because we know it's there :)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el: PageOne = await fixture(html`
      <page-one title="attribute title"></page-one>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('shows initially the text "hey there Nr. 5!" and an "increment" button', async () => {
    const el = await fixture(html`
      <page-one></page-one>
    `);

    expect(el).shadowDom.to.equalSnapshot();
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <page-one></page-one>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});

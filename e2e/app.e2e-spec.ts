import { Task2Page } from './app.po';

describe('task2 App', () => {
  let page: Task2Page;

  beforeEach(() => {
    page = new Task2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

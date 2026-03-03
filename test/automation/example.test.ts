// Copyright 2025-2026 Lockbox AI, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

jest.mock('playwright');

import { chromium } from 'playwright';
import { run } from '../../src/automation/example';

describe('run', () => {
  let mockPage: { goto: jest.Mock };
  let mockBrowser: { newPage: jest.Mock; close: jest.Mock };

  beforeEach(() => {
    jest.clearAllMocks();
    mockPage = { goto: jest.fn().mockResolvedValue(null) };
    mockBrowser = {
      newPage: jest.fn().mockResolvedValue(mockPage),
      close: jest.fn().mockResolvedValue(undefined),
    };
    (chromium.launch as jest.Mock).mockResolvedValue(mockBrowser);
  });

  it('launches chromium in headless mode', async () => {
    await run();
    expect(chromium.launch).toHaveBeenCalledWith({ headless: true });
  });

  it('opens a new page', async () => {
    await run();
    expect(mockBrowser.newPage).toHaveBeenCalled();
  });

  it('closes the browser after automation completes', async () => {
    await run();
    expect(mockBrowser.close).toHaveBeenCalled();
  });
});

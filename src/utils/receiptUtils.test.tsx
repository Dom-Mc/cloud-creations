import { generateReceiptDetails } from './receiptUtils';

describe('receiptUtils', () => {
  describe('generateReceiptDetails', () => {
    let originalDate: DateConstructor;
    const mockDate = new Date('2024-01-01T12:00:00Z');

    beforeAll(() => {
      originalDate = global.Date;
      global.Date = class extends Date {
        constructor() {
          super();
          return mockDate;
        }
      } as DateConstructor;
    });

    afterAll(() => {
      global.Date = originalDate;
    });

    it('generates receipt ID with correct format', () => {
      const { id } = generateReceiptDetails();
      expect(id).toMatch(/^RCP-[A-Z0-9]{9}$/);
    });

    it('generates unique receipt IDs', () => {
      const receipts = new Set();
      for (let i = 0; i < 100; i++) {
        const { id } = generateReceiptDetails();
        receipts.add(id);
      }
      // All IDs should be unique
      expect(receipts.size).toBe(100);
    });

    it('generates timestamp in correct format', () => {
      const { timestamp } = generateReceiptDetails();
      expect(timestamp).toBe(mockDate.toLocaleString());
    });

    it('returns both id and timestamp properties', () => {
      const receipt = generateReceiptDetails();
      expect(receipt).toHaveProperty('id');
      expect(receipt).toHaveProperty('timestamp');
    });
  });
}); 
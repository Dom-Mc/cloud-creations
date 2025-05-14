interface Receipt {
  id: string;
  timestamp: string;
}

export const generateReceiptDetails = (): Receipt => {
  return {
    id: `RCP-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    timestamp: new Date().toLocaleString()
  };
}; 
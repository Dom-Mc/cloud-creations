import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


const DocumentTitle: React.FC = () => {
  const itemCount = useSelector((state: RootState) => state.cart.cart.length);

  useEffect(() => {
    const baseTitle = 'Cloud Creation';
    document.title = itemCount > 0
      ? `${baseTitle} | Cart (${itemCount})`
      : baseTitle;
  }, [itemCount]);

  return null;
};

export default DocumentTitle;

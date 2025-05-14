import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItemCount } from '../../store/cartSlice';

const DocumentTitle: React.FC = () => {
  const itemCount = useSelector(selectCartItemCount);

  useEffect(() => {
    const baseTitle = 'Cloud Creation';
    document.title = itemCount > 0
      ? `${baseTitle} | Cart (${itemCount})`
      : baseTitle;
  }, [itemCount]);

  return null;
};

export default DocumentTitle;

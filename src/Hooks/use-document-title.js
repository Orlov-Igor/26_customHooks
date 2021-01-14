import { useEffect } from 'react';

export function useDocumentTitle(newTitle) {

  useEffect(() => {
    document.title = newTitle;
  }, [newTitle]);
}

export default useDocumentTitle



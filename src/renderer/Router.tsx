import { Route, Routes, useLocation } from 'react-router-dom';
import Components from './Components';

export default function Router(): JSX.Element {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Components.Home />} />
    </Routes>
  );
}

import { Users } from "../containers";
import UserColorApi from '../../api';

const colorApi = new UserColorApi();

function App() {
  return (
    <Users colorApi={colorApi} />
  );
}

export default App;
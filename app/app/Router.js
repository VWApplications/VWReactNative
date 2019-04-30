import { createStackNavigator, createAppContainer } from 'react-navigation';
// import NumerosRandomicos from './NumerosRandomicos';
// import FrasesDoDia from './FrasesDoDia';
// import Jokenpo from './Jokenpo';
import CatalogoDeItens from './Catalogo';
import HomeScreen from './Home';


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Catalogo: CatalogoDeItens
  }, {
    initialRouteName: 'Home'
  }
);

export const AppContainer = createAppContainer(AppNavigator);

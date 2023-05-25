import {View} from 'react-native';
import WeekSelector from '../Components/WeekSelector';
import WeekDays from '../Components/WeekDays';

const TimetableScreen = () => {
  return (
    <View style={{flex: 1}}>
      <WeekSelector />
      <WeekDays />
    </View>
  );
};

export default TimetableScreen;

import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header, Card } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => (
    <Provider store={createStore(reducers)}>
        <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
            <Header headerText='Tech Stack using Redux!' />
            <Card>
                <LibraryList />
            </Card>
        </View>
    </Provider>
);

export default App;

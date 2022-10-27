import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import MessageForm from '../MessageForm';
// import { PersistGate } from "redux-persist/integration/react";
// import persistedStore from "redux-persist/es/persistStore";
import store from "../../store";

describe("MessageForm page", () => {
    it("should render without crashing", () => {
        render(
            <React.StrictMode>
            <Provider store={store}>
                {/* <PersistGate loading={null} persistor={persistedStore}> */}
                    <MessageForm />
                {/* </PersistGate> */}
            </Provider>
        </React.StrictMode>
       );
    });
});


//it fails as a result of a scrollToBottom function i placed in but when removed it passes
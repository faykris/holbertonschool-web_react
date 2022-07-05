import React from 'react';
import { shallow, mount } from 'enzyme';
import App, { listNotifications, mapStateToProps } from './App';
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "./AppContext";
import { fromJS } from "immutable";
import { configureStore } from "@reduxjs/toolkit";
import uiReducer, { initialState } from "../reducers/uiReducer";


describe('<App />', () => {
  it("mapStateToProps returns the right object from user Login", () => {
    let state = fromJS({
      isUserLoggedIn: true,
    });

    const result = mapStateToProps(state);
    expect(result).toEqual({ isLoggedIn: true });
  });
});

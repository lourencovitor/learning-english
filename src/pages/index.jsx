/* eslint-disable import/prefer-default-export */
import React from 'react';
import '../assets/css/global.css';
import Layout from '../layout';
import Auth from './Auth';
import RegisterUser from './RegisterUser';

export const auth = () => <Layout>{Auth()}</Layout>;

export const registerUser = () => <Layout>{RegisterUser()}</Layout>;

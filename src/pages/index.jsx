/* eslint-disable import/prefer-default-export */
import React from 'react';
import Auth from './Auth';
import '../assets/css/global.css';
import Layout from '../layout';

export const auth = () => <Layout>{Auth()}</Layout>;
